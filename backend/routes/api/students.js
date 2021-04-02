const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const passport = require('passport');

const validateAdminRegisterInput = require('../../validation/studentRegister');
const validateAdminLoginInput = require('../../validation/adminLogin');

const Student = require('../../models/Student');

// POST /api/students/register
// new student signup
router.post('/register', (req, res) => {
    
    const {errors, isValid} = validateAdminRegisterInput(req.body);
    
    if(!isValid){
        return res.status(400).json(errors);
    }
    
    Student.findOne({ email: req.body.email })
        .then((student) => {
            if(student){
                errors.email = 'Email Already Exists';
                return res.status(400).json(errors);
            }
            else{
                const newStudent = new Student({
                    name: req.body.name,
                    sex: req.body.sex,
                    yearOfStudy: req.body.yearOfStudy,
                    studentID: req.body.studentID,
                    major: req.body.major,
                    phone: req.body.phone,
                    email: req.body.email,
                    password: req.body.password
                });
                
                bcrypt.genSalt(10, (err, salt) => {
                    bcrypt.hash(newStudent.password, salt, (err, hash) => {
                        if(err) throw err;
                        newStudent.password = hash; 
                        console.log('register success');
                        newStudent
                            .save()
                            .catch(err => console.log(err));
                    });
                });
            }
        });
});

// POST /api/students/login
// login the student 
router.post('/login', (req, res) => {
        const {errors, isValid} = validateAdminLoginInput(req.body);
        if(!isValid){
            return res.status(400).json(errors);
        }else{
            passport.authenticate('studentLocal'), (req, res) => {
                res.json({success: true});
            }
        }
            
    }
);
// GET /api/students/logout
router.get('/logout', (req, res) => {
    req.logout();
    res.redirect('/api/students');
});
// GET /api/students/
router.get('/', (req, res) => {
    if(req.user){
<<<<<<< HEAD
        res.send(req.user);
=======
        res.json({
            first_name: req.user.first_name,
            last_name: req.user.last_name,
            email: req.user.email
        });
>>>>>>> backend
    }else{
        res.send('no logged in student')
    }
});
module.exports = router;