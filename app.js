const express = require('express')
const app = express()
const route = require('./routes/routes.js')

require('dotenv').config()
const connectDB = require('./db/connect')

app.use(express.json())
app.use('/api',route)

const start = async ()=>{
    try{
       await connectDB(process.env.mongo_url);
        app.listen(5000,()=>"Server listening on port 5000")
    }
    catch(err){
        console.log(err)
    }
}

start()
