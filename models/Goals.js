const mongoose = require('mongoose')
const goalsSchema = mongoose.Schema(
    {
        title:{
            type:String,
            ref: "User",
        },
        description:{
            type:String,
        },
        targetDate:{
            type:String,
        },
        progress:{
            type:String,
        },
        comments:{
            type:String,
        }
    }
)
module.exports = mongoose.model("Goals", goalsSchema)