const express = require('express');
const bodyParser = require('body-parser')
const cors = require('cors')
const SignUp = require('./Routes/SignUp')
const Property = require('./Routes/Property')

const app = express()

app.use(express.json())
app.use(cors())

const PORT = process.env.PORT || 8080;

app.use("/SignUp", SignUp)
app.use("/Property", Property)

app.listen(PORT,()=>{
    console.log(`App is listening is ${PORT}`)
})



