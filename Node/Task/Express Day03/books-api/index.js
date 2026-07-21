import express from 'express';
import mongoose from 'mongoose';
const app = express()
const PORT = 3003
app.use(express.json());

const dbconnect = async()=>{
 const connect = await mongoose.connect('mongodb://localhost:27017/booksDB')
 if (connect){
    console.log("database connected succesfully");
    
 }
}
dbconnect()
const bookSchema = new mongoose.Schema({
    title:String,
    author:String,
    price:String,
    page:String
})

const bookModel= mongoose.model("books",bookSchema)

app.get('/get-books',async(req,res)=>{
    const result= await bookModel.find()
    res.send(result)
})
app.post('/add-book',async (req,res)=>{
    const {title, author, price, page} = req.body
    const data = new bookModel({title, author, price, page})
    const result = await data.save()
    res.send(result)
})

app.put('/update-book',async(req,res)=>{
const {title, author, price, page} = req.body;
const result = await bookModel.updateOne({title},{$set: {title, author, price, page}},)
res.send(result)
})

app.delete('/delete-book',async(req,res)=>{
    const {title} = req.query
    const result = await bookModel.deleteOne({title})
    res.send(result)
})
app.listen(PORT,()=>{
    console.log(`server is running at port ${PORT}`);
})
