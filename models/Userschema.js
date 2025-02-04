const mongoose=require("mongoose");
const Userschema=new mongoose.Schema({

 role:{
    type:String,
    require:true,
    enum:["admin","marketer"],
    default:"marketer"
 },
 phone:{
    type:String,
    require:true,
    unique:true
 },
 firstName:{
    type:String,
    require:true
 },
  lastName:{
    type:String,
    require:true
 },
 email:{
    type:String,
    require:true,
    unique:true
 },
 password:{
    type:String,
    require:true
 },
 address:{
    type:String,
    require:true
 },
 job:{
    type:String,
    require:true
 }

});


module.exports=mongoose.model("User",Userschema);
