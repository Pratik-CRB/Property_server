const mongoose = require('mongoose')

const SignInSchema = mongoose.Schema({
    UserId : {
        required : true,
        type : String
    },
    Password : {
        required : true,
        type : String
    }
})

module.exports = mongoose.model("SignIn", SignInSchema)