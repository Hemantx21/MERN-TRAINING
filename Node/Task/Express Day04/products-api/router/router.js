
import express from 'express'
import { addcontroller, delcontroller, editcontroller, readcontroller } from '../controller/controller.js'
const router = express.Router()

router.get('/get-products',readcontroller)
router.get('/add-product',addcontroller)
router.get('/update-product',editcontroller)
router.get('/delete-product',delcontroller)

export default router