import express from 'express'
import { readController,addController, delController, editController } from '../controller/controller.js'
const router = express.Router()

 router.get('/get-students',readController)
 router.post('//add-student',addController)
 router.put('/update-student/:_id',editController)
 router.delete('/delete-student/:_id',delController)
export default router;