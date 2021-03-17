//authentication router

const express = require('express');
const router = express.Router();
const path = require('path');
const register = require('./register')
const {check, validationResult} = require('express-validator')

module.exports = function(passport){
    router.get('/login', function(req, res){
        res.sendFile('loginpage.html', {root: __dirname});
    });

    router.post('/login',
        passport.authenticate('local', { 
            successRedirect: '/',
            failureRedirect: '/auth/login'
    }));

    router.get('/logout', function(req, res){
        req.logout();
        res.redirect('/');
    });
    router.get('/register', function(req, res){
        res.sendFile('registerpage.html', {root: __dirname});
    });

    router.post('/register', [ //format check
        check('first_name').not().isEmpty(),
        check('last_name').not().isEmpty(),
        check('email', 'Invalid Email').isEmail(),
        check('password', 'Invalid Password: your password must be at least 5 characters').isLength({min: 5})
    ],
    function(req, res){
        const errors = validationResult(req);
        if(!errors.isEmpty()){
            console.log(errors);
            res.redirect('/auth/register')
        }else{
            register(req, res);
        }
    }
    );

    return router;
};