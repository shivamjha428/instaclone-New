const express = require("express")
const postController = require("./post")
const mongoose = require("mongoose")
const cors = require("cors")

const app = express()

app.listen(5000,()=>{
    console.log("server started at post:5000")
})

app.use(express.json({limit: "30mb",extended:true}));
app.use(express.urlencoded({extended:false}));
app.use(cors())

mongoose.connect("mongodb://localhost/iclone",{ useNewUrlParser: true, useUnifiedTopology: true },()=>{
    console.log("connected to database")
})

app.get("/",(req,res)=>{
    console.log("welcome to instaclone");
    res.send("welcome to instaclone") 
})

// middleware
app.use("/post",postController)