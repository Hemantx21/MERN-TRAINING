import { studentModel } from "../model/model.js";
export const readController=async(req,res)=>{
   const result= await studentModel.find()
   res.send(result)
   
}
export const addController=async(req,res)=>{
   const {name,course,email,mobile} = req.body
   const data =new studentModel({name,course,email,mobile})
   const result = await data.save()
   res.send(result)

}
export const editController=async(req,res)=>{
    const{_id}=req.params
   const {name,course,email,mobile} = req.body
   const result = await studentModel.updateOne({_id},{$set:{name,course,email,mobile}},)
   res.send(result)

}
export const delController=async(req,res)=>{
    const{_id}=req.params
   const result = await studentModel.deleteOne({_id})
   res.send(result)
}