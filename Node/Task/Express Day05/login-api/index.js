import express from 'express'
import mongoose, { model } from 'mongoose'
const app= express()
const PORT = 8002
app.use(express.json())
  const dbconnect = async()=>{
 const conn =await mongoose.connect('mongodb://localhost:27017/authDB')
if (conn)
{
    console.log(`DB connected successfully`);
    
}
  }
  dbconnect()
const userSchema = new mongoose.Schema({
    email:String,
    password:String
})
const userModel = mongoose.model("users",userSchema)
app.post('/login',async(req,res)=>{
    const {email,password}=req.body
    const isMatch = await userModel.findOne({email,password})
    if(isMatch){
        res.json({

            code:200,
            success:true,
            message:"User Login Successfully",
            data:isMatch,
            error:false
        })

    }
    else{
        res.json({
            code:400,
            success:false,
            message:"User Login failed",
            data:isMatch,
            error:true
        })
    }
})
app.listen(PORT,()=>{
    console.log(`Server is working fine at PORT ${PORT}`);
})