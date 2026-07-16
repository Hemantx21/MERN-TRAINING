import express from 'express'
const server=express()
const PORT =9000
server.listen(PORT,()=>{
    console.log(`Server2 is Running at port ${PORT}`);
    
})