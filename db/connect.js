const mongoose = require('mongoose')


const connectionString = "";

const connect = (url)=>{
    mongoose.connect(url)
    .then(()=>{
        console.log("Connection successful!");
    })
    .catch((err)=>{
        console.log("Connection failed for some reason!")
        console.log(err)
    })
}
 
module.exports = connect
