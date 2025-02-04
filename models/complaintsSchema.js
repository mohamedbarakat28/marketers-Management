const mongoose=require("mongoose");

const complaintsShema=new mongoose.Schema({
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        require:true
    },
    orderId:{
        type:mongoose.Schema.Types.ObjectId,
        require:true
    },
    status:{
        type:String,
        require:true,
        values:["completed","In Progress"]
    }, 
    description:{
        type:String,
        require:true,
    }, 
    date:{
        type:String,
        require:true,
    }
})

module.exports=mongoose.model("Complaints",complaintsShema);
