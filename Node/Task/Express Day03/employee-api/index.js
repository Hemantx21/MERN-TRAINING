
import express from 'express'
import mongoose from 'mongoose'
const app=express()
const PORT=3004
app.use(express.json())
const dbconnect=async()=>{
const connect= await mongoose.connect('mongodb://localhost:27017/employeesDB')
if (connect){
    console.log(`Database Connected Successfully`);
}
}
dbconnect()

const employeeSchema=new mongoose.Schema({
name      :String,
department:String,
salary    :String,
city      :String

})
const employeeSModel = mongoose.model("employees",employeeSchema)
app.get('/get-employees',async(req,res)=>{
const result= await employeeSModel.find()
res.send(result)
})

app.post('/add-employee',async(req,res)=>{
    const {name,department, salary, city} = req.body
    const data = employeeSModel({name,department,salary,city})
    const result = await data.save()
    res.send(result)
})
app.put('/update-employee',async(req,res)=>{
    const {name,department, salary, city} = req.body
    const result = await employeeSModel.updateOne({name},{$set: {name,department,salary,city}},)
    res.send(result)
})
app.delete('/delete-employee',async(req,res)=>{
    const {name} = req.query
    const result = await employeeSModel.deleteOne({name})
    res.send(result)
})

app.listen(PORT,()=>{
    console.log(`Server is working fine at port ${PORT}`);
    
})