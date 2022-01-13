const express = require('express')

const app = express()
const port = 3333

//magic
const magicRoute = require('./routes/magicRoute')
app.use('/magic', magicRoute)
//bottles of beer 
const bottlesRoute = require('./routes/bottlesRoute')
app.use('/bottles', bottlesRoute)

app.get('/', (req, res)=>{
    res.status(200).json({message: "API UP!"})
})
//greetings
const greetingRoute = require('./routes/greetingsRoute')
app.use('/greeting', greetingRoute)


app.listen(port, ()=>{
    console.log("Up and running!")
})