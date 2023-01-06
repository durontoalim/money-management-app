const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const bodyParser = require('body-parser')
const mongoose = require('mongoose');


const app = express()

app.use(morgan('dev')) // used morgan
app.use(cors())  //used cors
app.use(bodyParser.urlencoded({ extended: false})) //used body parser
app.use(bodyParser.json())


//UserRouter
app.use('/api/users',userRouter)
app.use('/api/transactions', require('./routers/transactionRoute'))

app.get('/', (req,res) => {
    res.json({
        message: 'Welcome to our Aplication'
    })
})

const PORT = process.env.PORT || 4000

app.listen(PORT, () => {

    console.log(`SERVER IS RUNNING ON PORT ${PORT}`);
    mongoose.connect('mongodb://localhost/money-management-app', {useNewUrlParser: true } , ()=>{
        console.log('Database Connected....');
    });
})