import express from 'express'
import { addcontroller, deletecontroller, readcontroller, updatecontroller } from '../controller/controller.js'
const router= express.Router()

router.get('/get-employees',readcontroller)
router.post('/add-employee',addcontroller)
router.put('/update-employee/:_id',updatecontroller)
router.delete('/delete-employee/:_id',deletecontroller)

export default router