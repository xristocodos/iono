const Validator = require("validator");
const isEmpty = require("is-empty");

module.exports = validateRegisterInput = (data) => {

    let errors = {};

    // need to convert possible empty fields into string Validator only works with strings
    // checking required field to be able to login
    data.email = !isEmpty(data.email) ? data.email : "";
    data.password = !isEmpty(data.password) ? data.password : "";


    // validating email

    if(Validator.isEmpty(data.email)){
        errors.email = "Email cannot be empty"
    } else if(!Validator.isEmpty(data.email)){
        errors.email = "Email is invalid"
    }

    // validating password

    if(Validator.isEmpty(data.password)){
        errors.password = 'Password cannot be empty'
    } else if(!Validator.isEmpty(data.password)){
        errors.password = 'Password is invalid'
    };


    return {
        errors,
        isValid: isEmpty(errors)
    }


}