const express = require('express')
const app = expres()
const Checking = require('./Routes/Checking')

app.get('/',(req,res)=>{
    console.log("Working")
})

app.use(express.json())

app.use('/auth',Checking)

app.listen(8080,()=>{
    console.log('Running')
})