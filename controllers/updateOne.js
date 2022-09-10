const model = require('../db/models')

const updateOne = async (req,res)=>{
    try{
        const result = await model.findByIdAndUpdate(req.body.taskID,{taskStatus : req.body.taskStatus})
        console.log("Task status changed successfully")
        res.status(200).end()
    }
    catch(err){
        res.json({status:"There occured some error"})
        res.status(400).end()
    }
}

module.exports = updateOne