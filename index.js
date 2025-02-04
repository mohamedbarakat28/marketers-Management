const express=require("express");
require("dotenv").config();

const cors=require("cors");
const connectDB=require("./config/db.js");
// dotenv is a popular Node.js module that allows you to load environment variables from a .env file into process.env.
// Environment variables are often used to store sensitive or configuration-specific data (e.g., API keys, database credentials, or server ports) outside of your codebase.
const app=express();
const port=process.env.PORT;

app.use(express.json());
app.use(cors());
connectDB();
app.listen(port,()=>{
    console.log("connected......");
})