import express from 'express'
const app=express()
const PORT =9002

app.use(express.json())
app.listen(PORT,()=>{
    console.log(`Server started at port ${PORT}`);
})