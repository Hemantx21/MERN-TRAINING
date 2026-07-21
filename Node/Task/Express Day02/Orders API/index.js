import express from 'express'
const app = express()
const PORT = 3006
app.get('/get-orders', (req, res) =>{
    const data = [
        { id: 1, item: "Pizza", amount: 299 },
{ id: 2, item: "Burger", amount: 149 }
]
res.send(data);
})
app.post('add-order', (req, res) =>{
    const data = [
        { id: 1, item: "Pizza", amount: 299 },
{ id: 2, item: "Burger", amount: 149 }
]
res.send(data);
})


app.put('/update-order', (req, res) =>{
    const data = [
        { id: 1, item: "Pizza", amount: 299 },
{ id: 2, item: "Burger", amount: 149 }
]
res.send(data);
})


app.delete('/delete-order',(req,res)=>{
    const data = [
        { id: 1, item: "Pizza", amount: 299 },
{ id: 2, item: "Burger", amount: 149 }

    ]
res.send(data)
})



app.listen(PORT,()=>{
    console.log(`Server is running at port ${PORT}`);
    
})