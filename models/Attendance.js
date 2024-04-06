const mongoose = require('mongoose')
const attandanceSchema = mongoose.Schema(
    {
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User"
        },
        date: {
            type: String,
            trim: true
        },
        status: {
            type: String,
            enum: ["Present", "Absent", "Maternity", "Sick Leave", "Vacation"],
            trim: true
        },
        clockIn: {
            type: String,
            trim: true
        },
        clockOut: {
            type: String,
            trim: true
          },
        hours:{
            type: Number,
            trim: true
        },
        overtime:{
            type: Number,
            trim: true
        }
    }
)

module.exports = mongoose.model("Attendance", attandanceSchema)