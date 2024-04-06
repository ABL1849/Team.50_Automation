const Mail = require("../models/Mail")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
exports.login = async (req, res) => {
    try {
        const { email, password } = req.body;
        if (!email || !password) {
            return res.status(400).json({
                success: false,
                message: "Fill data properly"
            })
        }

        // Email validation
        const isEmail = await Mail.findOne({ email: email })
        if (!isEmail) {
            return res.status(409).json({
                success: false,
                message: "User not found "
            })
        }

        if (bcrypt.compare(password, isEmail.password)) {

            // JWT token creation 
            const payload = {
                id: isEmail._id,
                password: isEmail.password,
                role: isEmail.role
            }

            const token = jwt.sign(payload, process.env.PRIVATE_KEY, {
                expiresIn: '2h'
            })
            const options = {
                expiresIn: 3 * 24 * 60 * 60 * 1000,
                httpOnly: true,
            }

            return res.cookie('token', token, options).status(200).json({
                success: true,
                message: "Login successfull",
                data: {
                    token:token,
                }
            })
        }
        else {
            return res.status(401).json({
                success: false,
                message: "Wrong password"
            })
        }
    } catch (err) {
        console.log("Login Error : ", err)
        return res.status(401).json({
            success: false,
            message: "Unable to login"
        })
    }
}

exports.signup = async (req,res) => {
    try {
        const {
            email,
            password,
        } = req.body


        // Validations 
        if ( !email || !password ) {
            return res.status(400).json({
                success: false,
                message: "Fill data properly"
            })
        }

        // Email validation
        const isEmail = await Mail.findOne({ email: email })
        if (isEmail) {
            return res.status(409).json({
                success: false,
                message: "User already exist"
            })
        }

        // Password hashing 

        const hashedPassword = await bcrypt.hash(password, 10)
        if (!hashedPassword) {
            return res.status(500).json({
                success: false,
                message: "Unable to encrypt your data"
            })
        }
        const userData = await Mail.create({
            email,
            password: hashedPassword,
        })

        console.log("Signup successfull : ", userData)

        return res.status(200).json({
            success: true,
            message: "Signup successfull",
            data: userData
        })

    } catch (err) {
        console.log("Signup error : ", err)
        return res.status(500).json({
            success: false,
            message: "Unable signup"
        })
    }
}