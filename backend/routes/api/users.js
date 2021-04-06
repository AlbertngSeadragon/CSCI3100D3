const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const keys = require('../../config/keys');
const passport = require('passport');

const User = require('../../models/User');
const Event = require('../../models/Event');

// POST /api/users/register
// sign up a new Student user
router.post('/register', (req, res) => {
    const errors = {};

    User.findOne({ email: req.body.email })
        .then(user => {
            if (user) {
                errors.message = 'Email already exists';
                return res.status(400).json(errors);
            }
            else {
                const newUser = new User({
                    name: req.body.name,
                    email: req.body.email,
                    password: req.body.password,
                    role: 'student'
                });

                bcrypt.genSalt(10, (err, salt) => {
                    bcrypt.hash(newUser.password, salt, (err, hash) => {
                        if (err) throw err;
                        newUser.password = hash;
                        newUser
                            .save()
                            .then(user => {
                                res.json({
                                    success: true
                                });
                            })
                            .catch(err => console.log(err));
                    });
                });
            }
        });
});

// POST /api/users/adminRegister
// sign up a new Admin user
router.post('/adminRegister', passport.authenticate('jwt', { session: false }), (req, res) => {
    if (req.user.role === 'admin') {
        

        User.findOne({ email: req.body.email })
            .then(user => {
                if (user) {
                    errors.message = 'Email already exists';
                    return res.status(400).json(errors);
                }
                else {
                    const newUser = new User({
                        name: req.body.name,
                        email: req.body.email,
                        password: req.body.password,
                        role: 'admin'
                    });

                    bcrypt.genSalt(10, (err, salt) => {
                        bcrypt.hash(newUser.password, salt, (err, hash) => {
                            if (err) throw err;
                            newUser.password = hash;
                            newUser
                                .save()
                                .then(user => {
                                    res.json({
                                        success: true
                                    });
                                })
                                .catch(err => console.log(err));
                        });
                    });
                }
            });
    }

    else {
        return res.status(400).json({ message: 'You are not authorized' });
    }

});


// POST /api/users/login
// login the user
router.post('/login', (req, res) => {
    const errors = {};

    const email = req.body.email;
    const password = req.body.password;

    User.findOne({ email })
        .then(user => {
            if (!user) {
                errors.message = 'Incorrect email or password';
                return res.status(404).json(errors);
            }
            bcrypt.compare(password, user.password)
                .then(isMatch => {
                    if (isMatch) {
                        const payload = { id: user.id, name: user.name };

                        jwt.sign(
                            payload,
                            keys.secretOrKey,
                            { expiresIn: 3600 },
                            (err, token) => {
                                res.json({
                                    success: true,
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
});

// GET /api/users/current
router.get('/current', passport.authenticate('jwt', { session: false }), (req, res) => {
    res.json({
        id: req.user.id,
        name: req.user.name,
        role: req.user.role,
        email: req.user.email
    });
});

// GET /api/users/myEvents
router.get('/myEvents', passport.authenticate('jwt', { session: false }), async (req, res) => {
    var myEvents = [];
    await Event.find().sort('-createDate').populate('user', ['name']).then(events => {
        events.forEach(event => {
            event.participants.forEach(participant => {
                if(participant.id === req.user.id){
                    myEvents.push(event);
                }
            });
        });
    });
    return res.json(myEvents);
});

// GET /api/users/:id
router.get('/:id', (req, res) => {
    User.findById(req.params.id)
        .then(user => res.json({
            id: user.id,
            name: user.name,
            role: user.role,
            email: user.email
        }))
        .catch(err =>
            res.status(500).json({ message: "Error in get api/users/:id " + err })
        );
});



module.exports = router;