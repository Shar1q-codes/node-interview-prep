
const Route = require('express').Router()
const bcrypt = require('bcrypt')
const { Router } = require('express')
const JWT = require('jsonwebtoken')

const {check,validationResult} = require('express-validator') // to validate the email or password like that && it was always array format.

const {users}= require("./db")
// Route.get("/",(req,res)=>{
//     res.send("checking page is working")
// })

Route.post("/signup",[
    check("email","please provide a valid email")
    .isEmail(), //express validator 
    check("password","please provide password greater than 6 character")
    .isLength({
        min:6 // express validator
    })
],
async(req,res)=>{

    const {email,password}=req.body
    console.log(email,password);

    const err = validationResult(req); //if there is any in req, it will sort it
   if(!err.isEmpty()){
    return res.status(400).json({
        err:err.array()
    })

    //checking our postman email and password with the database(db)
}

let user = users.find((user)=>{
    return user.email === email
})
if(user){
    return res.status(400).json({
        err:[{
            "msg":"this user is already existed"
        }]
    })

}

let hashpassword = await bcrypt.hash(password,10)
users.push({email,
    password:hashpassword})

    const token = await JWT.sign({
        email
    },"asdfghjklttyy",{
        expiresIn:36000
    })
    res.json({token})
console.log(hashpassword)
    
    res.send("checking page is working")
})

Route.get("/all",(req,res)=>{
  res.json(users);
})

module.exports = Route