const express = require('express')
const app = express()
const constants = require('./constants')

app.get('/start',(req,res)=>{
    res.send("hello")
})

app.listen(constants.PORT,()=>{
    console.log(`server started on ${constants.PORT}`);
})