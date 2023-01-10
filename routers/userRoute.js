const router = require('express').Router()


const {login,register, allUser} = require('../controllers/userController')
//Registration Route
//localhost:400/api/users/register
router.post('/register',register)

//login Route
//localhost:4000/spi/users/login
router.post('/login',login)
router.get('/all',allUser);


module.exports = router