import express from 'express'
const app = express()
const PORT = 3009
app.get('/get-hotels', (req, res) =>{
    const data = [
        { id: 1, name: "Taj Hotel", city: "Mumbai" },
{ id: 2, name: "Lemon Tree", city: "Delhi" }
]
res.send(data);
})
app.post('/add-hotel', (req, res) =>{
    const data = [
       { id: 1, name: "Taj Hotel", city: "Mumbai" },
{ id: 2, name: "Lemon Tree", city: "Delhi" }
]
res.send(data);
})


app.put('/update-hotel', (req, res) =>{
    const data = [
       { id: 1, name: "Taj Hotel", city: "Mumbai" },
{ id: 2, name: "Lemon Tree", city: "Delhi" }
]
res.send(data);
})


app.delete('/delete-hotel',(req,res)=>{
    const data = [
       { id: 1, name: "Taj Hotel", city: "Mumbai" },
{ id: 2, name: "Lemon Tree", city: "Delhi" }
    ]
res.send(data)
})



app.listen(PORT,()=>{
    console.log(`Server is running at port ${PORT}`);
    
})