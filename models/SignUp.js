const mongoose = require('mongoose')

const UserSchema = mongoose.Schema({
    UserId : {
        required : true,
        type : String
    },
    Password : {
        required : true,
        type : String
    },
    ConfirmPassword : {
        required : true,
        type : String
    }
})

module.exports = mongoose.model("User", UserSchema)