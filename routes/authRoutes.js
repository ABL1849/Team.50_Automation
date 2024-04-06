// Importing all functions
const {
    signup,
    login,
} = require('../controller/Auth')

// Creating routes
const express = require('express')
const routes = express.Router()

// SignUp and Login routse
routes.post('/signup',signup)
routes.post('/login',login)

module.exports = routes