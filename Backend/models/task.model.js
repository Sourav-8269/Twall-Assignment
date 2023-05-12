const mongoose=require("mongoose");

const taskSchema=mongoose.Schema({
    title:String,
    description:String,
    status:{
        type:Boolean,
        default:false
    }
});

const taskModel=mongoose.model("task",taskSchema);

module.exports={taskModel};