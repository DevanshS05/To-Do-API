const model = require('../db/models')

const createOne = async (req,res)=>{
   try{
    const response = await model.create({taskName:req.body.taskName, taskStatus: req.body.taskStatus})
    console.log(response)
    res.status(201).end()
   }
   catch(err){
    res.json({status:"Error inserting this record"})
    res.status(400).end()
   }
}

module.exports = createOne