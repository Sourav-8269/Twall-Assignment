const express=require("express");

const app=express();

const cors=require("cors");

app.use(cors());

app.get("/",(req,res)=>{
    res.send("Welcome to App");
})

app.listen(process.env.port,async()=>{
    try{
        console.log("Connected to DB");
    }catch(err){
        console.log("Something went wrong");
    }
})