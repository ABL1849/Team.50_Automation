const mongoose = require('mongoose')
const periodicPerformanceData = mongoose.Schema(
    {
        user:{
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
        },
        evaluationDate:{
            type:String,
        },
        goals:{
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
          }
        ,
        managerComments:{
            type:String,
        },
    }
)

module.exports = mongoose.model("PeriodicPerformanceData", periodicPerformanceData)