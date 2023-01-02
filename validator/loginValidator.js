const validator = require('validator')

const validate = user => {
    let error = {}

    if(!user.email){
        error.email = 'Provide your email'
    }
    else if(!validator.isEmail(user.email)){
        error.email = 'Please Provide a email'
    }
    
    if(!user.password){
        error.password = 'Please Provide a Password'
    }


    return{
        error,
        isValid: Object.keys(error).length === 0
    }
}

module.exports = validate