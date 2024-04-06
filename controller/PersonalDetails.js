const User = require("../models/User") 
const PersonalDetails = require('../models/PersonalDetails')
exports.personalDetails = async (req, res) => {
    try {
        const { 
            email,
            firstName,
            lastName,
            gender,
            dob,
            phoneNumber,

        } = req.body;
        if (!firstName || !lastName || !gender || !dob || !phoneNumber ||!email) {
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
        const details = await PersonalDetails.create({ 
            user:isUser._id,
            email,
            firstName,
            lastName,
            gender,
            dob,
            phoneNumber,

        })

        if(!details){
            return res.status(500).json({
                success: false,
                message: "Unable to add deatials"
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
