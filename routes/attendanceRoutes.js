// Importing all functions
const {
    attendance
} = require('../controller/Attendance')

// Creating routes
const express = require('express')
const routes = express.Router()

// SignUp and Login routse
routes.post('/attendance',attendance)


module.exports = routes