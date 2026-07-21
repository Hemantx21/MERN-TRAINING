import express from 'express'
const app = express()
const PORT = 3010
app.get('/get-users', (req, res) =>{
    const data = [
        { id: 1, name: "Ravi", email: "ravi@gmail.com" },
{ id: 2, name: "Sneha", email: "sneha@gmail.com" }
]
res.send(data);
})
app.post('/add-user', (req, res) =>{
    const data = [
        { id: 1, name: "Ravi", email: "ravi@gmail.com" },
{ id: 2, name: "Sneha", email: "sneha@gmail.com" }
]
res.send(data);
})


app.put('/update-user', (req, res) =>{
    const data = [
        { id: 1, name: "Ravi", email: "ravi@gmail.com" },
{ id: 2, name: "Sneha", email: "sneha@gmail.com" }
]
res.send(data);
})


app.delete('/delete-user',(req,res)=>{
    const data = [
       { id: 1, name: "Ravi", email: "ravi@gmail.com" },
{ id: 2, name: "Sneha", email: "sneha@gmail.com" }

    ]
res.send(data)
})



app.listen(PORT,()=>{
    console.log(`Server is running at port ${PORT}`);
    
})