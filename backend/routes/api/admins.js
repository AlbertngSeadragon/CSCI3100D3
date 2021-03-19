const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const keys = require('../../config/keys');
const passport = require('passport');

const validateAdminRegisterInput = require('../../validation/adminRegister');
const validateAdminLoginInput = require('../../validation/adminLogin');

const Admin = require('../../models/Admin');

// POST /api/admin/register
// logged in admin signs up a new admin
router.post('/register', passport.authenticate('adminJWT', {session: false}), (req, res) => {
    
    const {errors, isValid} = validateAdminRegisterInput(req.body);
    
    if(!isValid){
        return res.status(400).json(errors);
    }
    
    Admin.findOne({ email: req.body.email })
        .then(admin => {
            if(admin){
                errors.email = 'Email Already Exists';
                return res.status(400).json(errors);
            }
            else{
                const newAdmin = new Admin({
                    first_name: req.body.first_name,
                    last_name: req.body.last_name,
                    sex: req.body.sex,
                    birth_date: req.body.birth_date,
                    phone: req.body.phone,
                    email: req.body.email,
                    password: req.body.password
                });
                
                bcrypt.genSalt(10, (err, salt) => {
                    bcrypt.hash(newAdmin.password, salt, (err, hash) => {
                        if(err) throw err;
                        newAdmin.password = hash;
                        newAdmin
                            .save()
                            .then(admin => {
                                const payload = {id: admin.id, first_name: admin.first_name, last_name: admin.last_name};
                                jwt.sign(
                                    payload,
                                    keys.secretOrKey,
                                    {expiresIn: 3600},
                                    (err, token) => {
                                        res.json({
                                            success: true,
                                            token: 'Bearer ' + token
                                        });
                                });
                            })
                            .catch(err => console.log(err));
                    });
                });
            }
        });
});

// POST /api/admins/login
// login the admin
router.post('/login', (req, res) => {
    const {errors, isValid} = validateAdminLoginInput(req.body);
    if(!isValid){
        return res.status(400).json(errors);
    }
    
    const email = req.body.email;
    const password = req.body.password;
    
    Admin.findOne({email})
        .then(admin => {
            if(!admin){
                errors.email = 'Admin not found';
                return res.status(404).json(errors);
            }
            bcrypt.compare(password, admin.password)
                .then(isMatch => {
                    if(isMatch){
                        const payload = {id: admin.id, first_name: admin.first_name, last_name: admin.last_name};
                        jwt.sign(
                            payload,
                            keys.secretOrKey,
                            {expiresIn: 3600},
                            (err, token) => {
                                res.json({
                                    success: true,
                                    token: 'Bearer ' + token
                                });
                        });
                    }
                    else{
                        errors.password = 'Password Incorrect';
                        return res.status(400).json(errors);
                    }
                });
        });
});



// // GET /api/users/<:user_id>
// router.get('/:id', (req, res) => {
//     User.findById(req.params.id)
//         .then(user => res.json(user))
//         .catch(err =>
//             res.status(500).json({error: "Error in get api/users/:id. " + err})
//         );
// });



// GET /api/admins/
router.get('/', passport.authenticate('adminJWT', {session: false}), (req, res) => {
    res.json({
        id: req.user.id,
        first_name: req.user.first_name,
        last_name: req.user.last_name,
        email: req.user.email
    });
});

module.exports = router;