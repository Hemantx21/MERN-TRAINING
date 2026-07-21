import express from 'express'
const app = express()
const PORT = 3001
app.get('/get-students', (req, res) =>{
    const data = [
        { id: 1, name: "Rahul", course: "BCA" },
        { id: 2, name: "Priya", course: "MCA" }
]
res.send(data);
})
app.post('/add-student', (req, res) =>{
    const data = [
        { id: 1, name: "Rahul", course: "BCA" },
        { id: 2, name: "Priya", course: "MCA" }
]
res.send(data);
})


app.put('/update-student', (req, res) =>{
    const data = [
        { id: 1, name: "Rahul", course: "BCA" },
        { id: 2, name: "Priya", course: "MCA" }
]
res.send(data);
})


app.delete('/delete-student',(req,res)=>{
    const data = [
        { id: 1, name: "Rahul", course: "BCA" },
{ id: 2, name: "Priya", course: "MCA" }

    ]
res.send(data)
})



app.listen(PORT,()=>{
    console.log(`Server is running at port ${PORT}`);
    
})