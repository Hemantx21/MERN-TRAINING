import express from 'express'
const app = express()
const PORT = 3001
app.get('/get-movies', (req, res) =>{
    const data = [
{ id: 1, name: "Inception", year: 2010 },
{ id: 2, name: "Avatar", year: 2009 }
]
res.send(data);
})
app.post('/add-movie', (req, res) =>{
    const data = [
        { id: 1, name: "Inception", year: 2010 },
{ id: 2, name: "Avatar", year: 2009 }
]
res.send(data);
})


app.put('/update-movie', (req, res) =>{
    const data = [
       { id: 1, name: "Inception", year: 2010 },
{ id: 2, name: "Avatar", year: 2009 }
]
res.send(data);
})


app.delete('/delete-movie',(req,res)=>{
    const data = [
        { id: 1, name: "Inception", year: 2010 },
{ id: 2, name: "Avatar", year: 2009 }

    ]
res.send(data)
})



app.listen(PORT,()=>{
    console.log(`Server is running at port ${PORT}`);
    
})