import express from 'express'
import dbconnect from './config/db.js'
import { studentModel } from './model/model.js'
import router from './router/router.js'
const app = express()
const PORT = 8003
app.use(express.json())
dbconnect()
app.use(router)
app.listen(PORT, () => {
    console.log(`Servetr is working fine at PORT ${PORT}`);
})