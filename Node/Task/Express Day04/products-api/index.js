import express from 'express'
import dbconnect from './config/config.js'
import router from './router/router.js'
const app=express()
const PORT = 9002
dbconnect()
app.use(express.json())
app.use(router)
app.listen(PORT,()=>{
    console.log(`Server is working fine at port ${PORT}`);
    
})