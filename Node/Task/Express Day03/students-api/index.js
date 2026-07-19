import express from 'express'
import mongoose from 'mongoose'
const app=express()
const PORT = 3001
app.use(express.json())
const dbconnect= async()=>{
 const connect= await  mongoose.connect('mongodb://localhost:27017/studentsDB')
   if (connect){
    console.log(`Database connected Successfully`);
   }
}
dbconnect()

const studentSchema = new mongoose.Schema({
    name: String,
    course:String,
    email:String,
    mobile:String
})
const studentModel = mongoose.model("students",studentSchema)

 app.get('/get-students',async(req,res)=>{
   const result = await studentModel.find()
   res.send(result)
})

app.post('/add-student',async(req,res)=>{
    const {name, course, email, mobile} = req.body
    const data= new studentModel({name,course,email,mobile})
    const result = await data.save()
    res.send(result)
    

})

app.put('/update-student',async(req,res)=>{
    const {name, course, email, mobile} = req.body
    const result= await studentModel.updateOne({name},{ $set: {name,course,email,mobile}},)
    res.send(result)

})

app.delete('/delete-student',async(req,res)=>{
    const {name} = req.query
    const result = await studentModel.deleteOne({name})
    res.send(result)
})















app.listen(PORT,()=>{
   console.log(`Server is running at port ${PORT}`);
    
})