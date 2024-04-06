const mongoose = require('mongoose')
require('dotenv').config()
exports.dbConnection = ()=>{
    console.log(process.env.DB_URL);
    mongoose.connect(process.env.DB_URL,{
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(()=>console.log('Database connection sucessfull'))
    .catch((err)=>{
        console.log("Database connection error : ",err)
        throw err
    })
}