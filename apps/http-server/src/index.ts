import express from "express"
const app=express();

app.get("/signup",(req,res)=>{
    res.send("Hello friend")
})

app.get("/signin",(req,res)=>{
    res.send("hello world")
})

app.get("/chat",(req,res)=>{
    res.send("hello chat from anywhere")
})

app.listen(5000)