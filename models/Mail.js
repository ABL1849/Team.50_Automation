const mongoose = require('mongoose')
const mailSchema = mongoose.Schema(
    {
        password: {
            type: String,
            trim:true
        },
        email: {
            type: String,
            trim:true
        },
    }
)

module.exports = mongoose.model("Mails", mailSchema)