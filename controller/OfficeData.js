const OfficeData = require("../models/OfficeData")
const User = require("../models/User") 
exports.officeData = async (req, res) => {
    try {
        const { 
            email,
            jobTitle,
            dateOfJoining,
            salary,
        } = req.body;
        if (!jobTitle || !dateOfJoining || !salary   ||!email) {
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
        const data = await OfficeData.create({ 
            user:isUser._id,
            email,
            jobTitle,
            dateOfJoining,
            salary,
            
        })

        if(!data){
            return res.status(500).json({
                success: false,
                message: "Unable to add deatials"
            })
        }

        return res.status(200).json({
            success: true,
            message: "Details added sucessfully",
            data:data
        })

    } catch (err) {
        console.log("Personal details  Error : ", err)
        return res.status(401).json({
            success: false,
            message: "Unable to login"
        })
    }
}
