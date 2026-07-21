import express from 'express'
import { addcontroller, deletecontroller, readcontroller, updatecontroller } from '../controller/controller.js'
const router= express.Router()

router.get('/get-products',readcontroller)
router.post('/add-product',addcontroller)
router.put('/update-product/:_id',updatecontroller)
router.delete('/delete-product/:_id',deletecontroller)

export default router