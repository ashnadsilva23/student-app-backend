const express =  require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const {studentmodel} =require("./models/student")


const app =express()
app.use(cors())
app.use(express.json())
mongoose.connect("mongodb+srv://ashna:ashna@cluster0.n9qo4.mongodb.net/studentDb?retryWrites=true&w=majority&appName=Cluster0")







app.post("/add",(req,res)=>{
    let input= req.body
    let student =  new studentmodel(input)
student.save()
    res.json({"status":"success"})
})

app.post("/view",(req,res)=>{
    studentmodel.find().then(
        (data)=>{
            res.json(data)
        }
    ).catch(
        (error)=>{
            res.json(error)
        }
    )
})



app.listen(8080,()=>{
    console.log("server started")
})




