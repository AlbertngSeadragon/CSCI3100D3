var student_test = require('../models/test_account')

module.exports = function(app){
    var passport = require('passport'), 
    LocalStrategy = require('passport-local').Strategy;
    const { response } = require('express');

    app.use(passport.initialize());
    app.use(passport.session());

    passport.serializeUser(function(user, done) {
            done(null, user.email); //store user email to session
        });
    
        passport.deserializeUser(function(id, done) {
            done(null, student_test) //use id(email) from session store data to get user info from database
            /*
            User.findById(id, function(err, user) {
            done(err, user);
            });*/
        });

    passport.use(new LocalStrategy(
        /*{
            usernameField: 'email',
            passwordField: 'password'

        },*/
        function(username, password, done) {
            console.log('localStrategy', username, password);
            user = student_test
            if(username === user.email){ //access database
                if(password === user.password){ //access database
                    console.log('login success');
                    return done(null, user);
                } else {
                    console.log('wrong pw');
                    return done(null, false, { message: 'Incorrect password.' });
                };
            } else {
                console.log('wrong un');
                return done(null, false, { message: 'Incorrect username.' });
            };
            /*
            User.findOne({ username: username }, function (err, user) {
                if (err) { return done(err); }
                if (!user) {
                return done(null, false, { message: 'Incorrect username.' });
                }
                if (!user.validPassword(password)) {
                return done(null, false, { message: 'Incorrect password.' });
                }
                return done(null, user);
        });*/
        }
    ));
return passport;
};
