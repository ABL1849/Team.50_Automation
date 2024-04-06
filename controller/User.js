const User = require('../models/User')
const { cloudinaryUploader } = require('../utils/cloudinaryUploader')
require('dotenv').config()


exports.createUser = async (req, res) => {
    try {
        const {
            email,
            role,
        } = req.body
        // Fetching files
        const thumbnail = req.files.profile

        // Validation of data 
        if (!thumbnail || !email || !role) {
            return res.status(400).json({
                success: false,
                message: "Fill all fileds please"
            })
        }
        //Uploading image to cloudinary
        const imageData = await cloudinaryUploader(thumbnail, process.env.CLOUDINARY_FOLDER)
        if (!imageData) {
            return res.status(400).json({
                success: false,
                message: "Unable to upload image"
            })
        }
        const url = imageData.secure_url

        const userData = await User.create({
            email,
            image:url,
            role
        })

        if (!userData) {
            return res.status(400).json({
                success: false,
                message: "Invalid instructor"
            })
        }

        // Response 
        return res.status(200).json({
            success: true,
            message: "User created sucessfully",
            data: userData
        })
    } catch (err) {
        console.log("Unable to create course:", err)
        return res.status(200).json({
            success: false,
            message: "Unable to add user"
        })
    }
}


