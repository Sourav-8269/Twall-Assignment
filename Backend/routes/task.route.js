const express=require("express");
const { taskModel } = require("../models/task.model");

const TaskRouter=express.Router();

TaskRouter.get("/",async(req,res)=>{
    try{
        let tasks=await taskModel.find();
        res.send("Hii");
    }catch(err){
        res.send(err);
    }
})

module.exports={TaskRouter};