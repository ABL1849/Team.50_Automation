const mongoose = require('mongoose')
const userSchema = mongoose.Schema(
    {
        email:{
            type:String,
        },
        personalDetails:{
            type: mongoose.Schema.Types.ObjectId,
            ref: "PersonalDetails"
        },
        image:{
            type:String,
        },
        officeData:{
            type: mongoose.Schema.Types.ObjectId,
            ref: "OfficeData"
        },
        leaves:{
            type:mongoose.Schema.Types.ObjectId,
            ref:"Leaves"
        },
        role:{
            type:String,
        }

    }
)

module.exports = mongoose.model("User", userSchema)