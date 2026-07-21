import express from 'express';
import dbconnect from './config/config.js';
import router from './route/router.js';

const app =express()
const PORT = 9001
dbconnect()
app.use(express.json())
app.use(router)

app.listen(PORT,()=>{
   console.log(` Server is running at PORT ${PORT}`);
})