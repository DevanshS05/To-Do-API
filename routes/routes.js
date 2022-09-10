const express = require('express')
const router = express.Router()

const { getOne, getAll, createOne, updateOne, deleteOne} = require('../controllers/task')

router.route('/')
.get(getAll)
.post(createOne)
.delete(deleteOne)
.patch(updateOne)

router.route('*')
.all((req,res)=>{
    res.json({status:"Illegitimate Request"})
    res.status(403).end();
})
module.exports = router