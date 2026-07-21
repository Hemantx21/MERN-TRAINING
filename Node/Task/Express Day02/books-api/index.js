import express from 'express'
const app = express()
const PORT = 3004
app.get('/get-books', (req, res) =>{
    const data = [
        { id: 1, title: "React Basics", author: "John" },
{ id: 2, title: "Node Guide", author: "Smith" }

]
res.send(data);
})
app.post('/add-book', (req, res) =>{
    const data = [
        { id: 1, title: "React Basics", author: "John" },
{ id: 2, title: "Node Guide", author: "Smith" }

]
res.send(data);
})


app.put('/update-book', (req, res) =>{
    const data = [
       { id: 1, title: "React Basics", author: "John" },
{ id: 2, title: "Node Guide", author: "Smith" }

]
res.send(data);
})


app.delete('/delete-book',(req,res)=>{
    const data = [
       
{ id: 1, title: "React Basics", author: "John" },
{ id: 2, title: "Node Guide", author: "Smith" }

    ]
res.send(data)
})



app.listen(PORT,()=>{
    console.log(`Server is running at port ${PORT}`);
    
})