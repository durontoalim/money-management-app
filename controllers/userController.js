const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const registerValidator = require('../validator/registerValidator')
const loginValidator = require('../validator/loginValidator')

const {serverError,resourceError} = require('../util/error')

const User = require('../model/User')

// Login Controller
module.exports = {
    login(req,res) {
         // User Data Extract forom request
         let {email, password} = req.body
         // Validate Data
         let validate = loginValidator({email,password})

         if(!validate.isValid){
            return res.status(400).json(validate.error)
         }

         User.findOne({email})
            .then(user =>{
                if(!user){
                    res.status(400).json({
                        message: 'User Not Found'
                    })
                }
                bcrypt.compare(password, user.password, (err,result) =>{
                    if(!result){
                        return resourceError(res, 'Password does not match')
                    }

                    let token = jwt.sign({
                        _id:user._id,
                        name: user.name,
                        email: user.email,
                        amount: user.amount,
                        income: user.income,
                        expense: user.expense,
                        transactions: user.transactions
                    },'SECRET',{expiresIn:'2h'})

                    res.status(200).json({
                        message: 'Login Successfull',
                        token: `Bearer ${token}`
                    })
                })
            })
            .catch(error => serverError(res,error))
         // User check registration by mail
         // compare password
         // Genarate Token and response back
         //


    },
    register(req,res){
        // Read Client Data
        const {name,email,password,confirmPassword} = req.body
        // Validation check user data
        const validate = registerValidator({name,email,password, confirmPassword})
        if(!validate.isValid){
            res.status(400).json(validate.error)
        }
        else{
            User.findOne({ email })
                .then( user => {
                    if(user){
                        return res.status(400).json({
                            message: `Email Already Existt`
                        })
                    }
                    bcrypt.hash(password, 10, (err, hash) => {
                        let user = new User({
                            name,
                            email,
                            password: hash,
                            balance: 0,
                            expense: 0,
                            income: 0,
                            transactions: []
                        })
                        user.save()
                        .then ((user)=>{
                            res.status(201).json({
                                message: "User is created Successfully"
                            })
                        })
                        .catch(error => {
                            console.log(error);
                            res.status(500).json({
                                message: 'User is not Created'
                            })
                        })
                    }) 
                })
                .catch(error => serverError(res, error))
            }
            
        },
        allUser(req,res){
            User.find()
                .then(users => {
                    res.status(200).json(users)
                })
                .catch(error => serverError(res, error))
        }
        
        // new user Object
        // Save to database
        //response back with new data
}