const express = require('express')
const greetingsRouter = express.Router()

greetingsRouter.get('/', (req,res)=>{
    res.status(200).json({greeting: "hello stranger!"})
})

greetingsRouter.get('/:name', (req,res)=>{
    let name = req.params.name
    res.status(200).json({greeting: `Wassup ${name}!`})
})
module.exports = greetingsRouter