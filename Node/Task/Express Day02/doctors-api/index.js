import express from 'express'
const app = express()
const PORT = 3005
app.get('/get-doctors', (req, res) =>{
    const data = [
       { id: 1, name: "Dr. Sharma", specialist: "Heart" },
{ id: 2, name: "Dr. Mehta", specialist: "Skin" }
]
res.send(data);
})
app.post('/add-doctor', (req, res) =>{
    const data = [
        { id: 1, name: "Dr. Sharma", specialist: "Heart" },
{ id: 2, name: "Dr. Mehta", specialist: "Skin" }
]
res.send(data);
})


app.put('/update-doctor', (req, res) =>{
    const data = [
       { id: 1, name: "Dr. Sharma", specialist: "Heart" },
{ id: 2, name: "Dr. Mehta", specialist: "Skin" }
]
res.send(data);
})


app.delete('/delete-doctor',(req,res)=>{
    const data = [
        { id: 1, name: "Dr. Sharma", specialist: "Heart" },
{ id: 2, name: "Dr. Mehta", specialist: "Skin" }

    ]
res.send(data)
})



app.listen(PORT,()=>{
    console.log(`Server is running at port ${PORT}`);
    
})