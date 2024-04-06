const jwt = require('jsonwebtoken')
require('dotenv').config()
exports.auth = async (req, res, next) => {
    console.log("I reach to auth");
    try {
        const token = req.cookies.token || req.body.token || req.header("Authorization").replace("Bearer ", "")
        const jwtResponse = await jwt.verify(token, process.env.PRIVATE_KEY)
        if (jwtResponse) {
            req.payload = jwtResponse
        }
        else {
            return res.status(400).json({
                success: false,
                message: "Not token is not readable"
            })
        }
    } catch (err) {
        console.log("Unable to recognise token : ",err);
        return res.status(500).json({
            success: false,
            message: "Unable to recognise token"
        })
    }
    next();
}

exports.isHR = (req, res, next) => {
    try {
        const {payload}= req
        if (payload.role !== 'HR') {
            return res.status(200).json({
                success: false,
                message: "It is protected route for student"
            })
        }
        next();
    } catch (err) {
        console.log('Unable to process token',err);
        return res.status(500).json({
            success: false,
            message: "Unable to process token"
        })
    }
}

exports.isEmp = (req, res, next) => {
    console.log("I reach to isEmp ");
    try {
        const {payload} = req
        if (payload.role !== 'Employee') {
            return res.status(200).json({
                success: true,
                message: "It is protected route for Admin"
            })
        }
        next()
    } catch (err) {
        console.log('Unable to process token',err);
        return res.status(500).json({
            success: true,
            message: "Unable to process token"
        })
    }
}

exports.isAM = (req, res, next) => {
    try {
        const { payload }= req
        if (payload.role !== 'Attendance Manager,') {
            return res.status(200).json({
                success: true,
                message: "It is protected route for Attendance Manager"
            })
        }
        next();
    } catch (err) {
        console.log('Unable to process token',err);
        return res.status(500).json({
            success: true,
            message: "Unable to process token"
        })
    }
}