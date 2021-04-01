const Validator = require('validator');
const isEmpty = require('./isEmpty');

module.exports = function validateAdminRegisterInput(data){
    let errors = {};
    
    data.name = !isEmpty(data.name) ? data.name: '';
    data.studentID = !isEmpty(data.studentID) ? data.studentID: '';
    data.email = !isEmpty(data.email) ? data.email: '';
    data.phone = !isEmpty(data.phone) ? data.phone: '';
    data.major = !isEmpty(data.major) ? data.major: '';
    data.password = !isEmpty(data.password) ? data.password: '';
    data.password2 = !isEmpty(data.password2) ? data.password2: '';
    
    if(!Validator.isLength(data.name, {min: 2, max: 30})){
        errors.name = 'Name must be between 2 and 30 chararcters';
    }
    
    if(Validator.isEmpty(data.name)){
        errors.name = 'Name field is required';
    }
    
    if(!Validator.isLength(data.studentID, {min: 10, max: 10})){
        errors.studentID = 'Student ID must be 10 chararcters';
    }
    
    if(Validator.isEmpty(data.studentID)){
        errors.studentID = 'Student ID field is required';
    }

    if(!Validator.isEmail(data.email)){
        errors.email = 'Email is invalid';
    }
    
    if(Validator.isEmpty(data.email)){
        errors.email = 'Email field is required';
    }
    
    if(!data.phone.match(/^\d{8}$/)){
        errors.phone = 'Invalid phone number. Phone number must be 8 digits';
    }

    if(Validator.isEmpty(data.major)){
        errors.major = 'Major field is required';
    }

    if(Validator.isEmpty(data.password)){
        errors.password = 'Password field is required';
    }
    
    if(!Validator.isLength(data.password, {min: 8, max: 30})){
        errors.password = 'Password must be between 8 and 30 characters';
    }
    
    if(Validator.isEmpty(data.password2)){
        errors.password2 = 'Confirm password field is required';
    }
    
    if(!Validator.equals(data.password, data.password2)){
        errors.password2 = 'Passwords must match';
    }
    
    return {
        errors,
        isValid: isEmpty(errors)
    };
};