//register a new user

const Student = require('../models/Student');
const {body, validationResult} = require('express-validator')

var register = function(req, res){
    const {first_name, last_name, email, password} = req.body
    
    Student.findOne({email}, function(err, user){
        if(user){
            console.log('email already exists')
            res.redirect('/auth/register')
        }else{
            const new_student = new Student({
                first_name: first_name,
                last_name: last_name,
                email: email,
                password: password //need hashing 
            });
            new_student.save();
            console.log('register success');
            res.redirect('/auth/login')
        }
    })
}
module.exports = register;
