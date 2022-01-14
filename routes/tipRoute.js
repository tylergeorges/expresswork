const express = require('express')
const tipRouter = express.Router()

tipRouter.get('/:total/:tip', (req,res)=>{
    let total = req.params.total
    let tip = req.params.tip

    res.status(200).json({tip: tip / 100 * total })
})



module.exports = tipRouter