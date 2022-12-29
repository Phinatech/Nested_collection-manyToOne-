import express,{application, Application,Request,Response} from "express";
import authorRoute from "../router/authorRoute";
// import bookRoute from "../router/bookRouter"

const app:Application = (express())
require("../config/db")
app.use(express.json())
const Port = 2987

app.get("/",(req:Request,res:Response):Response=>{
    return res.status(200).json({
        message:`Server is up and running  🍔🥞🍕🍕🍕🍕🍕`
    })
});

app.use("/api/author",authorRoute)
// app.use("/api/book",bookRoute)

app.listen(Port,()=>{
    console.log("Server is listening")
})