const mongoose = require('mongoose')
const officeSchema = mongoose.Schema(
    {
        jobTitle: {
            type: String,
            trim:true
        },
        dateOfJoining: {
            type: String,
            trim:true
        },
        salary:{
            type: Number,
            trim:true
        },
        user:{
            type: mongoose.Schema.Types.ObjectId,
            ref: "User"
        },
    }
)

module.exports = mongoose.model("OfficeData", officeSchema)