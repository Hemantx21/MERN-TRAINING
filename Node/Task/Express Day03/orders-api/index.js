
import express from 'express'
import mongoose from 'mongoose'
const app = express()
const PORT = 3006
app.use(express.json())
const dbconnect = async () => {
    const connect = await mongoose.connect('mongodb://localhost:27017/ordersDB')
    if (connect) {
        console.log(`Database Connected Successfully`);
    }
}
dbconnect()

const ordersSchema = new mongoose.Schema({
    item: String,
    amount: String,
    status: String,
    customer: String,

})
const ordersSModel = mongoose.model("orders", ordersSchema)
app.get('/get-orders', async (req, res) => {
    const result = await ordersSModel.find()
    res.send(result)
})

app.post('/add-order', async (req, res) => {
    const { item, amount, status, customer } = req.body
    const data = ordersSModel({ item, amount, status, customer })
    const result = await data.save()
    res.send(result)
})
app.put('/update-order', async (req, res) => {
    const { item, amount, status, customer } = req.body
    const result = await ordersSModel.updateOne({ item }, { $set: { item, amount, status, customer } },)
    res.send(result)
})
app.delete('/delete-order', async (req, res) => {
    const { item } = req.query
    const result = await ordersSModel.deleteOne({ item })
    res.send(result)
})

app.listen(PORT, () => {
    console.log(`Server is working fine at port ${PORT}`);

})