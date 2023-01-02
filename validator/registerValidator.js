const validator = require('validator')

const validate = user => {
    let error = {}

    if(!user.name){
        error.name = 'please Provide Your Name'
    }

    if(!user.email){
        error.email = 'Provide your email'
    }
    else if(!validator.isEmail(user.email)){
        error.email = 'Please Provide a email'
    }
    
    if(!user.password){
        error.password = 'Please Provide a Password'
    }
    else if(user.password.length < 6){
        error.password = 'Password must be Greater or Equal 6 Character'
    }

    if(!user.confirmPassword){
        error.confirmPassword = 'Please Provide Confirmation Password'
    }
    else if(user.password != user.confirmPassword){
        error.confirmPassword = 'Password Doesn\`t Match'
    }

    return{
        error,
        isValid: Object.keys(error).length === 0
    }
}

module.exports = validate