// External import 
const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
require('dotenv').config();
const bodyparser = require('body-parser')
const app = express()




// setting middleware 
app.use(cors())
app.use(express.json())
app.use(bodyparser.urlencoded({ extended: false }))
app.use(bodyparser.json())



// setting port 
const port = process.env.PORT || 8000;



//mongodb connection
mongoose.connect(`${process.env.mongodburl}`)
    .then(res => console.log('App connected'))
    .catch(err => console.log(err))


// setting route 
app.use('/carhouse/user', require('./routers/userRouter'))
app.use('/carhouse/products', require('./routers/productsrouter'))



app.get('/', (req, res) => {
    res.json({
        message: 'Welcome to Car House'
    })
})




app.listen(port, () => {
    console.log('Application is running at', port)
})



