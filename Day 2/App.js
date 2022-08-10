const express = require('express')
const app = express()

const send = require('./Exports')
const {test} = require('./Exports')

const cors = require('cors')
const { rmSync } = require('fs')

app.use(cors())

app.get('/send',send)
app.get('/test',test)

app.get('/',(req,res)=>{
    res.send("working")
})

//middleware

const middleware1 = (req,res,next)=>{
    console.log('middleware1')
    next()
}

const middleware2 = (req,res,next)=>{
    console.log('middleware2')
    next()
}

app.get('/page1',middleware1,function (req,res) {
    console.log('page1 - both middleware 1 and 2 applied')
})

app.get('/page2',function (req,res) {
    console.log('page2-middleware 2 only applied')
})


app.listen(3000,()=>{
    console.log('app running')
})