import express from 'express'
const exp1=express()
const PORT=9001
exp1.listen(PORT,()=>{
    console.log(`Server 7 is running at port ${PORT}`);
    
})