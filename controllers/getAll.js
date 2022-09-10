const model = require('../db/models')

const getAll = async (req,res)=>{
    try{
        const result = await model.find({});
        res.json(result);
        res.status(200).end();
    }
    catch(err){
        console.log("There was an error in fetching the records")
        res.json({error:"Unable to fetch records"})
        res.status(400).end();
    }
}

module.exports = getAll