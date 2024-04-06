// Importing all functions
const {
    personalDetails,
} = require('../controller/PersonalDetails')

const {
    officeData
} = require('../controller/OfficeData')

const{
    createUser
}=require('../controller/User')

const{
    periodicPerformanceData
} =require('../controller/PeriodicPerformanceData')
// Creating routes
const express = require('express')
const routes = express.Router()

// SignUp and Login routse
routes.post('/personalDetails',personalDetails)
routes.post('/officeData',officeData)
routes.post('/createUser',createUser)
routes.post('/periodicPerformanceData',periodicPerformanceData)
module.exports = routes