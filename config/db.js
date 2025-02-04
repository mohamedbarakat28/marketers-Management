const mongoose=require("mongoose");

const connectDB=async ()=>{
    try {
        await mongoose.connect(process.env.URLDB);
        console.log("connected DB");
        } catch (error) {
        console.error(error);
        process.exit(1);
    }
}

module.exports=connectDB;