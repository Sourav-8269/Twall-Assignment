const express=require("express");
const { TaskModel } = require("../models/task.model");

const TaskRouter=express.Router();

TaskRouter.get("/",async(req,res)=>{
    try{
        let tasks=await TaskModel.find();
        res.send(tasks);
    }catch(err){
        res.send("Something Went Wrong");
        console.log(err);
    }
})

TaskRouter.post("/add",async(req,res)=>{
    let payload=req.body;
    if(!payload){
        res.send("Please send all details");
    }
    try{
        const task=new TaskModel(payload);
        await task.save();
        res.send("Added Todo");
    }catch(err){
        res.send("Something Went Wrong");
        console.log(err);
    }
})

TaskRouter.patch("/edit/:id",async(req,res)=>{
    const id=req.params.id;
    const payload=req.body;
    if(!payload||!id){
        res.send("Please send all details")
    }
    try{
        await TaskModel.findByIdAndUpdate({_id:id},payload);
        res.send(`Updated Task with id ${id}`);
    }catch{

    }
})

module.exports={TaskRouter};