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
        return res.send("Please send all details");
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
        return res.send("Please send all details");
    }
    try{
        await TaskModel.findByIdAndUpdate({_id:id},payload);
        res.send(`Updated Task with id ${id}`);
    }catch{

    }
})

TaskRouter.put("/replace/:id",async (req,res)=>{
    const id=req.params.id
    const payload=req.body;
    // console.log(id)
    if(!payload||!id){
        return res.send("Please send all details");
    }
    try{
        await TaskModel.findOneAndReplace({_id:id},payload);
        res.send(`Replaced Todo with id ${id}`);
    }catch(err){
        res.send("Something Went Wrong");
        console.log(err);
    }
})

TaskRouter.delete("/delete/:id",async (req,res)=>{
    const id=req.params.id
    // console.log(id)
    if(!id){
        return res.send("Please send all details");
    }
    try{
        await TaskModel.findByIdAndDelete({_id:id});
        res.send(`Deleted Todo with id ${id}`);
    }catch(err){
        res.send("Something Went Wrong");
        console.log(err);
    }
})

module.exports={TaskRouter};