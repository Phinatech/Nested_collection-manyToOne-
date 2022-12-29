import express,{Application,Request,Response} from "express";


const app:Application = (express())
require("../config/db")
app.use(express.json())
const Port = 2987

app.get("/",(req:Request,res:Response):Response=>{
    return res.status(200).json({
        message:"Server is up and running"
    })
})

app.listen(Port,()=>{
    console.log("Server is listening")
})