const express = require('express')
let data = require('../data/magicData')
const magicRouter = express.Router()

magicRouter.get('/', (req,res)=>{
    res.status(200).json({MagicBall: "What would you like to know?"})
})


magicRouter.get('/:msg', (req,res)=>{
    let idx = Math.floor(Math.random() * data.length -1)
    let userMsg = req.params.msg
    res.status(200).json({User: `${userMsg} `, MagicBall: `${data[idx]}`})
})




module.exports = magicRouter

