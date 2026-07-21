import express from 'express'
import mongoose from 'mongoose'
const app = express()
const PORT = 3002
app.use(express.json())
const dbconnect=async()=>{
const connect= await  mongoose.connect('mongodb://localhost:27017/productsDB')
if (connect){
    console.log("Database Connected Successfully");
}
}
dbconnect()
 const productSchema = new mongoose.Schema({
    name:String,
    price:String,
    category:String,
    stock:String,
})

const productModel = mongoose.model("products",productSchema)


app.get('/get-products',async(req,res)=>{
    const data = await  productModel.find()
    res.send(data)
    
})

app.post('/add-product',async(req,res)=>{
    const {name, price, category, stock} = req.body
    const data = new productModel({name, price, category, stock})
    const result = await data.save()
    res.send(result)
})

app.put('/update-product',async(req,res)=>{
    const {name, price,category, stock}= req.body
    const result = await productModel.updateOne({name},{$set:{ price, category, stock}},)
    res.send(result)
})

app.delete('/delete-product',async(req,res)=>{
    const {name} = req.query
    const result =  await productModel.deleteOne({name})
    res.send(result);
    
})

app.listen(PORT,()=>{
    console.log(`Server is running at port ${PORT}`);
})