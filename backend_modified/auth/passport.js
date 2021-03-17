//passport api for authentication
const Student = require('../models/Student');

module.exports = function(app){
    var passport = require('passport'), 
    LocalStrategy = require('passport-local').Strategy;
    const { response } = require('express');

    app.use(passport.initialize());
    app.use(passport.session());

    passport.serializeUser(function(user, done) {
        done(null, user.email); //store user email to session
    });

    passport.deserializeUser(function(email, done) {
        
        Student.find({email: email}, function(err, user) {
            done(err, user);
        });
    });

    passport.use(new LocalStrategy(

        function(email, password, done) {
            
        Student.findOne({ email: email }, function (err, user) {
            
            if (err) { return done(err); }
            if (!user) {
                console.log('i u')
                return done(null, false, { message: 'Incorrect username.' });
            }
            if (user.password !== password) { //will be modified with hashing later
                console.log('i p')
                return done(null, false, { message: 'Incorrect password.' });
            }
            return done(null, user);
        });
        }
    ));
return passport;
};
