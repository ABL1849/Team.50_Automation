const User = require("../models/User") 
const PeriodicPerformanceData = require('../models/PeriodicPerformanceData')
const Goals = require('../models/Goals')
exports.periodicPerformanceData = async (req, res) => {
    try {
        const { 
            email,
            evaluationDate,
            goals,
            managerComments,
        } = req.body;
        if (!evaluationDate|| !goals || !managerComments ||!email) {
            return res.status(400).json({
                success: false,
                message: "Fill data properly"
            })
        }

        // Email validation
        const isUser = await User.findOne({email:email})
        if (!isUser) {
            return res.status(409).json({
                success: false,
                message: "User not found "
            })
        }
        const goalData = await Goals.create(goals)
        const details = await PeriodicPerformanceData.create({ 
            user:isUser._id,
            evaluationDate,
            goals:goalData._id,
            managerComments,

        })

        if(!details){
            return res.status(500).json({
                success: false,
                message: "Unable to add performance"
            })
        }

        return res.status(200).json({
            success: true,
            message: "Details added sucessfully",
            data:details
        })

    } catch (err) {
        console.log("Personal details  Error : ", err)
        return res.status(401).json({
            success: false,
            message: "Unable to login"
        })
    }
}
