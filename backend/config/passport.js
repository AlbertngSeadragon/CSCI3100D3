const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const LocalStrategy = require('passport-local').Strategy;
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const Admin = mongoose.model('admins');
const keys = require('../config/keys');

const opts = {};
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = keys.secretOrKey;

module.exports = (passport) => {
    passport.use('adminJWT', new JwtStrategy(opts, (jwt_payload, done) => {
        Admin.findOne({id: jwt_payload.id})
            .then(admin => {
                if(admin){
                    return done(null, admin);
                }
                return done(null, false);
            })
            .catch(err => console.log(err));
    }));

    passport.use('studentLocal', new LocalStrategy(
        {
            usernameField: 'email',
            passwordField: 'password'
        },
        function(email, password, done) {    
        Student.findOne({ email: email }, (err, student) => {
            if (err) { 
                console.log('error');
                return done(err); }
            if (!student) {
                console.log('incorrect username');
                return done(null, false, { message: 'Incorrect username.' });
            }
            bcrypt.compare(password, student.password)
                .then((isMatch) => {
                    console.log(`ismatch = ${isMatch}`)
                    if(isMatch){
                        return done(null, student);
                    }
                    else{
                        console.log('incorrect password');
                        return done(null, false, { message: 'Incorrect password.' });
                    }
                })
        });
    }));
    
    passport.serializeUser((student, done) => {
        done(null, student.email);
    });

    passport.deserializeUser((email, done) => {
        
        Student.find({email: email}, (err, student) => {
            done(err, student);
        });
    });
};