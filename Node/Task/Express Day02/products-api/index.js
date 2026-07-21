import express from 'express'
const exp=express()
const PORT =3002

exp.get('/get-products',(req,res)=>{
    const data =[
        { id: 1, name: "Laptop", price: 45000 },
{ id: 2, name: "Mouse", price: 500 }
    ]
    res.send(data);
})

exp.post('/add-product',(req,res)=>{
    const data = [{ id: 1, name: "Laptop", price: 45000 },
{ id: 2, name: "Mouse", price: 500 }]
res.send(data);
})

exp.put('/update-product',(req,res)=>{
    const data = [
        { id: 1, name: "Laptop", price: 45000 },
{ id: 2, name: "Mouse", price: 500 }
    ]
    res.send(data);
})

exp.delete('/delete-product',(req,res)=>{
    const data = [
        { id: 1, name: "Laptop", price: 45000 },
{ id: 2, name: "Mouse", price: 500 }
    ]
    res.send(data);
})



exp.listen(3002,(req,res)=>{
    console.log(`Server is running at port ${PORT}`);
    
})
