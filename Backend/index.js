const express=require("express");

const app=express();

const cors=require("cors");
const { TaskRouter } = require("./routes/task.route");

app.use(cors());

require('dotenv').config();

app.use(express.json());

app.get("/",(req,res)=>{
    res.send("Welcome to App");
})

app.use("/task",TaskRouter);

app.listen(process.env.port,async()=>{
    try{
        console.log("Connected to DB");
    }catch(err){
        console.log("Something went wrong");
    }
})