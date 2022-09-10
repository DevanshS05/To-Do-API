const model = require('../db/models')


const deleteOne = async (req,res)=>{
    try{
        const result = await model.findByIdAndRemove(req.body.taskID)
        //console.log(req.body.taskID);
        res.json({status:"Task deleted successfully"}).status(200).end()
    }
    catch(err){
        res.json({status:"There was some error"}).status(400).end()
    }
}

module.exports = deleteOne