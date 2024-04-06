
// getting all routes
const UserRoutes = require('./routes/authRoutes')

// All requirements 
const cors = require('cors');
require('dotenv').config()
var cookieParser = require('cookie-parser')
const {connectCloudinary} = require('./config/Cloudinary')
const {dbConnection} = require('./config/Database')

// Instantiate server
const express = require('express');
const fileupload = require('express-fileupload');
const app = express();

// Middlewares 
app.use(fileupload({
    useTempFiles : true,
    tempFileDir : '/tmp/'
}
))
app.use(express.json())
app.use(cookieParser())


app.use(cors({
    origin:"http://localhost:3000",
    credentials:true
}))
// Mounting
app.use('/api/v1/auth',UserRoutes)


// Connection
connectCloudinary();
dbConnection()

// App ko listen karvade ?
// Sun rahe ho app bhai 
const PORT = process.env.PORT;
app.listen(PORT , ()=>{
    console.log(`App listening at ${PORT}`)
})

// Default request

app.get('/' , (req,res)=>{
   res.send("<h1>StudyNotion - Pratik Shah</h1>")
})