const express = require('express')
const bottlesRouter = express.Router()
let bottles = require('../data/bottlesData')

bottlesRouter.get('/', (req,res)=>{
    res.status(200).json({message: `${bottles} Bottles of beer on the wall`})
})

bottlesRouter.get('/takeonedown', (req,res)=>{
 
 res.status(200).json({message: `${bottles --} Bottles of beer on the wall`})
})

bottlesRouter.get('/numberofbottles', (req,res)=>{
    res.status(200).json({message: `${bottles} Bottles of beer on the wall`})
   })
// bottlesRouter.get('/:id', (req,res)=>{

//     res.status(200).json({message: "99 Bottles of beer on the wall"})
// })


module.exports = bottlesRouter