import { productModel } from "../model/model.js";

export const readcontroller=async(req,res)=>{
const result = await productModel.find()
res.send(result)
}
export const addcontroller=async(req,res)=>{
const {name,price,category,stock}=req.body
const data = new productModel({name,price,category,stock})
const result = await productModel.Save()
res.send(result)
}
export const editcontroller=async(req,res)=>{
const {_id}=req.query
const {name,price,category,stock}=req.body
const update = productModel.updateOne({_id},{$set : {name,price,category,stock}},)
res.send(result)
}
export const delcontroller=async(req,res)=>{
const {_id}=req.query
const update = productModel.deleteOne({_id})
res.send(result)
}