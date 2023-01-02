const router = require('express').Router()


const {login,register} = require('../controllers/userController')
//Registration Route
//localhost:400/api/users/register
router.post('/register',register)

//login Route
//localhost:4000/spi/users/login
router.post('/login',login)


module.exports = router