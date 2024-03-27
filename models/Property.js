const mongoose = require('mongoose')

const PropertySchema = mongoose.Schema({
    PropertyType : {
        required : true,
        type : String
    },
    Negotiable : {
        required : true,
        type : String
    },
    Price : {
        required : true,
        type : Number
    },
    Ownership : {
        required : true,
        type : String
    },
    PropertyAge : {
        required : true,
        type : String
    },
    PropertyApproved : {
        required : true,
        type : String
    },
    PropertyDescription : {
        required : true,
        type : String
    },
    BankLoan : {
        required : true,
        type : String
    },
    Length : {
        required : true,
        type : Number
    },
    Breadth : {
        required : true,
        type : Number
    },
    Area : {
        required : true,
        type : Number
    },
    AreaUnit : {
        required : true,
        type : String
    },
    NoOfBHK : {
        required : true,
        type : Number
    },
    NoOfFloor : {
        required : true,
        type : Number
    },
    PropertyOwnership: {
        required : true,
        type : String
    },
    Attached : {
        required : true,
        type : String
    },
    WesternToilet : {
        required : true,
        type : String
    },
    Furnished : {
        required : true,
        type : String
    },
    CarParking : {
        required : true,
        type : String
    },
    Lift : {
        required : true,
        type : String
    },
    Electricity : {
        required : true,
        type : Number
    },
    Facing : {
        required : true,
        type : String
    },
    Name : {
        required : true,
        type : String
    },
    Mobile : {
        required : true,
        type : Number
    },
    PostedBy : {
        required : true,
        type : String
    },
    SalesType : {
        required : true,
        type : String
    },
    FeaturedPackage : {
        required : true,
        type : String
    },
    PPD_Package : {
        required : true,
        type : String
    },
    Email : {
        required : true,
        type : String
    },
    City : {
        required : true,
        type : String
    },
    AreaType : {
        required : true,
        type : String
    },
    Pincode : {
        required : true,
        type : Number
    },
    Address : {
        required : true,
        type : String
    },
    Landmark : {
        required : true,
        type : String
    },
    Latitude : {
        required : true,
        type : Number
    },
    Longitude : {
        required : true,
        type : Number
    }
})

module.exports = mongoose.model("Property", PropertySchema)