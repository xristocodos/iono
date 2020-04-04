const Validator = require('validator');
const isEmpty = require('is-empty');



module.exports = validateRegisterInput = (data) => {

    let errors = {};

    // need to convert possible empty fields into string Validator only works with strings
    // checking required field to be able to login
    data.name = isEmpty(data.name) ? data.name : ''
    data.userName = isEmpty(data.userName) ? data.userName : ''
    data.email = isEmpty(data.email) ? data.email : ''
    data.password = isEmpty(data.password) ? data.password : '' 
    // password2 = confirm password
    data.password2 = isEmpty(data.password2) ? data.password2 : ''

    // checking if name is not empty

    if(Validator.isEmpty(data.name)){
        errors.name = "Name cannot be empty"
    }

    // checking that email is valid and not empty

    if(Validator.isEmpty(data.email)){
        errors.email = "Email cannot be empty"
    } else if(!Validator.isEmpty(data.email)){
        errors.email = "Email is invalid"
    }

    // checking that password is not empty

    if(Validator.isEmpty(data.password)){
        errors.password = "Password cannot be empty"
    }

    // checking that password2 is not empty and matches password

    if(Validator.isEmpty(data.password2)){
        errors.password2 = "Please confirm password"
    }

    if(!Validator.equals(data.password, data.password2)){
        errors.password2 = "Passwords must match"
    }

    return {
        errors,
        isValid: isEmpty(errors)
    }

}