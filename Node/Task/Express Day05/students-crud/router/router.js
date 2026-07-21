import express from 'express'
import { addcontroller, deletecontroller, readcontroller, updatecontroller } from '../controller/controller.js'
const router= express.Router()

router.get('/get-students',readcontroller)
router.post('/add-student',addcontroller)
router.put('/update-student/:_id',updatecontroller)
router.delete('/delete-student/:_id',deletecontroller)

export default router