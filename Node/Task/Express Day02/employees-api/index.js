import express from 'express'
const app = express()
const PORT = 3003
app.get('/get-employees', (req, res) => {
    const data = [
        { id: 1, name: "Amit", department: "IT" },
        { id: 2, name: "Neha", department: "HR" }
    ]

    res.send(data)
})
app.post('/add-employee', (req, res) => {
    const data = [
        { id: 1, name: "Amit", department: "IT" },
        { id: 2, name: "Neha", department: "HR" }
    ]

    res.send(data)
})
app.put('/update-employee', (req, res) => {
    const data = [
        { id: 1, name: "Amit", department: "IT" },
        { id: 2, name: "Neha", department: "HR" }
    ]

    res.send(data)
})
app.delete('/delete-employee', (req, res) => {
    const data = [
        { id: 1, name: "Amit", department: "IT" },
        { id: 2, name: "Neha", department: "HR" }
    ]

    res.send(data)
})



app.listen(PORT, () => {
    console.log(`Server is running at port ${PORT}`);

})