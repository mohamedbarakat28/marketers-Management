const mongoose=require("mongoose");

const productSchema=new mongoose.Schema({
    orderId:{
        type:mongoose.Schema.Types.ObjectId,
        require:true,
    },
    name:{type:String,require:true},
    price:{type:Number,require:true},
    quantity:{type:Number,require:true}
    })

    module.exports=mongoose.model("Prodeuct",productSchema);