import mongoose from "mongoose";

const URL = "mongodb://localhost/nested"

mongoose.connect(URL)
mongoose.connection
.on("open",()=>{
    console.log("Database is connected")
})
.once("error",(error)=>{
    console.log("An error occured")
})