import express from 'express'
import mongoose from 'mongoose'
const app = express()
const PORT = 3005
app.use(express.json())
const dbconnect = async () => {
    const connect = await mongoose.connect('mongodb://localhost:27017/doctorsDB')
    if (connect) {
        console.log(`Database connected succesfully`);
    }
}
dbconnect()

const doctorSchema = new mongoose.Schema({
    name: String,
    specialist: String,
    hospital: String,
    mobile: String,
})
const doctorModel=mongoose.model("doctors",doctorSchema)

app.get('/get-doctors',async(req,res)=>{
    const result = await doctorModel.find()
    res.send(result)
})

app.post('/add-doctor',async(req,res)=>{
    const {name,specialist,hospital,mobile} = req.body
    const data = new doctorModel({name,specialist,hospital,mobile})
    const result = await data.save()
    res.send(result)
})

app.put('/update-doctor',async(req,res)=>{
    const {name,specialist,hospital,mobile} = req.body
    const result = await doctorModel.updateOne({name},{$set : {specialist,hospital,mobile}},)
    res.send(result)
})

app.delete('/delete-doctor',async(req,res)=>{
    const {name}=req.query
    const result =await doctorModel.deleteOne({name})
    res.send(result)
})

app.listen(PORT, () => {
    console.log(`Server is running at port ${PORT}`);
}
)