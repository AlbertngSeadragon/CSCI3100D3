var express = require('express');
var router = express.Router();
var path = require('path');

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
    return router;
};