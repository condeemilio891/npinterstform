const express= require("express")
const bodyParser = require('body-parser')
const cors= require('cors')
const app =express()

const mysql=require('mysql')

const db= mysql.createPool({
    host:"localhost",
    user:"root",
    password:"password",
    database:"dummynpdatabase"
})

app.use(cors());
app.use(express.json())
app.use(express.urlencoded({extended:false}))

app.post("/api/insert",(req,res)=>{

    const firstName= req.body.firstName
    const lastName= req.body.lastName
    const phoneNumber= req.body.phoneNumber
    const email= req.body.email
    const reason= req.body.reason



    const sqlInsert=
"INSERT INTO interestedclients (firstName,lastName,phoneNumber,email,reason) VALUES (?,?,?,?,?)"

db.query(sqlInsert,[firstName,lastName,phoneNumber,email,reason],(err,result)=>{
console.log(err)
})
})

app.listen(3001,()=>{
    console.log("running on port 3001")
})
