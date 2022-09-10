const mongoose = require('mongoose')

const taskSchema = mongoose.Schema({
    taskName : String,
    taskStatus : String
})

module.exports = mongoose.model("Store",taskSchema)