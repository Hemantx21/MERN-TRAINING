import express from 'express'
const app = express()
const PORT = 3008
app.get('/get-cars', (req, res) =>{
    const data = [
       { id: 1, brand: "Honda", model: "City" },
{ id: 2, brand: "Maruti", model: "Swift" }

]
res.send(data);
})
app.post('/add-car', (req, res) =>{
    const data = [
       { id: 1, brand: "Honda", model: "City" },
{ id: 2, brand: "Maruti", model: "Swift" }

]
res.send(data);
})


app.put('/update-car', (req, res) =>{
    const data = [
      { id: 1, brand: "Honda", model: "City" },
{ id: 2, brand: "Maruti", model: "Swift" }

]
res.send(data);
})


app.delete('/update-car',(req,res)=>{
    const data = [
        { id: 1, brand: "Honda", model: "City" },
{ id: 2, brand: "Maruti", model: "Swift" }


    ]
res.send(data)
})



app.listen(PORT,()=>{
    console.log(`Server is running at port ${PORT}`);
    
})