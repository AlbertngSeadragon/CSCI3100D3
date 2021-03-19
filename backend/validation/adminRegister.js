const Validator = require('validator');
const isEmpty = require('./isEmpty');

module.exports = function validateAdminRegisterInput(data){
    let errors = {};
    
    data.first_name = !isEmpty(data.first_name) ? data.first_name: '';
    data.last_name = !isEmpty(data.last_name) ? data.last_name: '';
    data.email = !isEmpty(data.email) ? data.email: '';
    data.phone = !isEmpty(data.phone) ? data.phone: '';
    data.password = !isEmpty(data.password) ? data.password: '';
    data.password2 = !isEmpty(data.password2) ? data.password2: '';
    
    if(!Validator.isLength(data.first_name, {min: 2, max: 30})){
        errors.first_name = 'First name must be between 2 and 30 chararcters';
    }
    
    if(Validator.isEmpty(data.first_name)){
        errors.first_name = 'First name field is required';
    }

    if(!Validator.isLength(data.last_name, {min: 2, max: 30})){
        errors.last_name = 'First name must be between 2 and 30 chararcters';
    }
    
    if(Validator.isEmpty(data.last_name)){
        errors.last_name = 'Last name field is required';
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

    if(Validator.isEmpty(data.password)){
        errors.password = 'Password field is required';
    }
    
    if(!Validator.isLength(data.password, {min: 8, max: 30})){
        errors.password = 'Password must be between 6 and 30 characters';
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