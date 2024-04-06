const mongoose = require('mongoose')
const leavesSchema = mongoose.Schema(
    {
        user:{
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
        },
        leaves:{
            type:String,
        }
    }
)