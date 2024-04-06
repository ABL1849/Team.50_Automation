const mongoose = require('mongoose')
const personalSchema = mongoose.Schema(
    {
        firstName: {
            type: String,
            trim:true
        },
        lastName: {
            type: String,
            trim:true
        },
        gender:{
            type: String,
            trim:true
        },
        dob:{
            type: String,
            trim:true
        },
        phoneNumber:{
            type: Number,
            trim:true
        },
        user:{
            type: mongoose.Schema.Types.ObjectId,
            ref: "User"
        },
    }
)

module.exports = mongoose.model("PersonalDetails", personalSchema)