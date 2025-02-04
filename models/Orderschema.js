const mongoose=require("mongoose");

const orderSchema=new mongoose.Schema({
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        require:true,
        unique:true
     },
    fullName:{
        type:String,
        require:true
    },
    phone:{
        type:String,
        require:true,
        unique:true
    },
    address:{
        type:String,
        require:true,
    },
    totalAmount:{
        type:Number,
        require:true
    },
    status:{
        type:String,
        require:true
    },

    // product:[
    //     {
    //         name:{type:String,require:true},
    //         price:{type:Number,require:true},
    //         quantity:{type:Number,require:true}

    //     }
    // ]


})

module.expor=mongoose.model("Order",orderSchema);