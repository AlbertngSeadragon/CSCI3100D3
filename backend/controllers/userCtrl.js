const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const keys = require('../config/keys');
const User = require('../models/User');
const Event = require('../models/Event');
const nodemailer = require('nodemailer');
const smtpTransporter=require('nodemailer-smtp-transport');
const crypto = require('crypto');


const smtpTransport = nodemailer.createTransport(smtpTransporter({
    service: 'Gmail',
    host:'smtp.gmail.com',
    auth: {
        user: keys.email,
        pass: keys.password
    },
    tls: {
        rejectUnauthorized: false
    }
}));

// POST /api/users/register
// register a new user (student)
createStudent = (req, res) => {
    const errors = {};
    var keyOne=crypto.randomBytes(256).toString('hex').substr(100, 5);
    var keyTwo=crypto.randomBytes(256).toString('base64').substr(50, 5);
    var verificationKey = keyOne + keyTwo;

    User.findOne({ email: req.body.email }) 
        .then(user => {
            if (user) {
                errors.message = 'Email already exists';
                return res.status(400).json(errors);
            }
            else {
                const user = new User({
                    name: req.body.name,
                    email: req.body.email,
                    password: req.body.password,
                    verificationKey: verificationKey,
                    role: 'student'
                });
                bcrypt.genSalt(10, (err, salt) => {
                    bcrypt.hash(user.password, salt, (err, hash) => {
                        if (err) throw err;
                        user.password = hash;
                        user
                            .save()
                            .then(() => {
                                var url = 'http://' + req.get('host')+'/api/users/confirmEmail'+'?key=' + verificationKey;
                                var mailOpt = {
                                    from: keys.email,
                                    to: user.email,
                                    subject: 'Complete Registration With Univent',
                                    html : '<h2>Complete your registration by clicking the URL below</h2><br>' + url
                                };
                                smtpTransport.sendMail(mailOpt, (err, res) => {
                                    if (err) {
                                        throw err;
                                    } else {
                                        console.log('email has been sent.');
                                    }
                                    smtpTransport.close();
                                });
                                return res.status(200).json({
                                    success: true,
                                    message: `User successfully created. Registration email sent to ${user.email}. Open this email to finish signup.`,
                                });
                            })
                            .catch(err => console.log(err));
                    });
                });
            }
        });
}

// POST /api/users/adminRegister
// register a new admin user (accessible by only admins)
createAdmin = (req, res) => {
    if (req.user.role === 'admin') {
        const errors = {};
        User.findOne({ email: req.body.email })
            .then(user => {
                if (user) {
                    errors.message = 'Email already exists';
                    return res.status(400).json(errors);
                }
                else {
                    const user = new User({
                        name: req.body.name,
                        email: req.body.email,
                        password: req.body.password,
                        verificationKey: 0,
                        emailVerified: true,
                        role: 'admin'
                    });

                    bcrypt.genSalt(10, (err, salt) => {
                        bcrypt.hash(user.password, salt, (err, hash) => {
                            if (err) throw err;
                            user.password = hash;
                            user
                                .save()
                                .then(() => {
                                    res.json({
                                        success: true,
                                        message: "User successfully created"
                                    });
                                })
                                .catch(err => console.log(err));
                        });
                    });
                }
            });
    }

    else {
        return res.status(401).json({
            success: false, 
            message: 'You are not authorized' });
    }

}

// POST /api/users/login
// login the user
login = (req, res) => {
    const errors = {};


    User.findOne({ email: req.body.email })
        .then(user => {
            if (!user) {
                errors.message = 'Incorrect email or password';
                return res.status(404).json(errors);
            } else if (!user.emailVerified) {
                errors.message = 'Unfinished email verification';
                return res.status(404).json(errors);
            }
            bcrypt.compare(req.body.password, user.password)
                .then(areSame => {
                    if (areSame) {
                        const payload = { id: user.id };

                        jwt.sign(
                            payload,
                            keys.secretOrKey,
                            { expiresIn: 3600 },
                            (err, token) => {
                                res.json({
                                    success: true,
                                    name: user.name,
                                    role: user.role,
                                    token: 'Bearer ' + token
                                });
                            });
                    }
                    else {
                        errors.message = 'Incorrect email or password';
                        return res.status(400).json(errors);
                    }
                });
        });
}

// GET /api/users/confirmEmail?key=${verificationKey}
// verify the user account with provided verificationKey
confirmEmail = (req, res) => {
    User.updateOne({verificationKey:req.query.key}, {$set:{emailVerified:true}})
    .then(documents => {
        if(documents.n == 0){
            return res.status(400).json({
                success: false,
                message: 'verification key not found',
            });
        }
        else {
            var url = 'http://' + req.get('host') + '/';
            res.send(`<h1>UNIVENT<h1>
                      <h2>Email Verified Successfully<h2>
                      <h3><a href=${url}> Click to go back to the homepage</a></h3>`);
        }
    })
    .catch(err => console.log(err));
}

// GET /api/users/current
// fetch the current user data
getCurrentUser = (req, res) => {
    res.json({
        id: req.user.id,
        name: req.user.name,
        role: req.user.role,
        email: req.user.email
    });
}

// GET /api/users/myEvents
// fetch all the events current user enrolled in
getUserEvents = async (req, res) => {
    var myEvents = [];
    await Event.find().sort('-createdAt').then(events => {
        events.forEach(event => {
            event.participants.forEach(participant => {
                if (participant.user.toString() === req.user.id) {
                    myEvents.push(event);
                }
            });
        });
    });
    if(myEvents.length) return res.json(myEvents);
    return res.json({
        success: false,
        message: 'No events found'
    });
}

// GET /api/users/:id
// fetch data of user given by id
getUserById = (req, res) => {
    User.findById(req.params.id)
        .then(user => res.json({
            id: user.id,
            name: user.name,
            role: user.role,
            email: user.email
        }))
        .catch(err => console.log(err));
}

module.exports = {
    createStudent,
    createAdmin,
    login,
    confirmEmail,
    getCurrentUser,
    getUserEvents,
    getUserById
}