const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const keys = require('../../config/keys');
const passport = require('passport');

const validateAdminRegisterInput = require('../../validation/adminRegister');
const validateAdminLoginInput = require('../../validation/adminLogin');

const Admin = require('../../models/Admin');

// POST /api/admins/register
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
                    name: req.body.name,
                    sex: req.body.sex,
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
                            .then(res.json({success: true}))
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
                        const payload = {id: admin.id, name: admin.name};
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



// PATCH /api/admins/profile/update
// change admin password
router.patch('/profile/update', passport.authenticate('adminJWT', { session: false }), (req, res) => {

    bcrypt.compare(req.body.oldPassword, req.user.password)
        .then(isMatch => {
            if (isMatch) {
                bcrypt.genSalt(10, (err, salt) => {
                    bcrypt.hash(req.body.newPassword, salt, (err, hash) => {
                        if (err) throw err;
                        else {
                            Admin.findOneAndUpdate({ id: req.user.id }, { $set: { password: hash } }, function (err, admin) {
                                if (err) {
                                    return res.status(401).json({ error: 'saveErr' });
                                }
                                else {
                                    return res.status(200).json({
                                        success: true,
                                    });
                                }
                            });
                        }
                    });
                });


            }
            else {
                return res.status(400).json({ password: "Incorrect Password" });
            }
        });
});

// GET /api/admins/profile
router.get('/profile', passport.authenticate('adminJWT', {session: false}), (req, res) => {
        return res.status(200).json({
            id: req.user.id,
            name: req.user.name,
            email: req.user.email
        });
});

// GET /api/admins/<:admin_id>
router.get('/:id', passport.authenticate('adminJWT', {session: false}), (req, res) => {

    Admin.findOne({ id: req.params.id })
        .then(admin => res.json(admin))
        .catch(err =>
            res.status(500).json({ error: "Error in get api/admins/:id. " + err })
        );
});

module.exports = router;