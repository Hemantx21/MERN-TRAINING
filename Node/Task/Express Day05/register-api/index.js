import express from 'express'
import mongoose, { connect } from 'mongoose'
const app = express()
const PORT = 8001
app.use(express.json())

const dbconnect = async () => {
    const conn = await mongoose.connect('mongodb://localhost:27017/authDB')
    if (conn) {
        console.log(`DB connected Succesfully`);

    }
}
dbconnect()

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String

})
const userModel = mongoose.model("users",userSchema)
app.post('/register',async(req,res)=>{
    const {name,email,password} = req.body
   const isExist = await userModel.findOne({email})
   if(isExist){
    res.json({
        code:400,
        success:false,
        message:"User already registered",
        data: isExist,
        error:true,
    });
   }else{
    const data = new userModel({name,email,password})
    const result = await data.save()
    res.json({
        code:200,
        success:true,
        message:"User registered Successfully",
        data:result,
        error:false
    })

   }
})






app.listen(PORT, () => {
    console.log(`Server is working fine at port ${PORT}`);

})   