const mongoose = require('mongoose')
const userSchema = mongoose.Schema(
    {
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
        }

    }
)

module.exports = mongoose.model("User", userSchema)