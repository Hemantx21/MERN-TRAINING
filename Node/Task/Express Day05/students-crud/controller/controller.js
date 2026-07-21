import { studentModel } from "../model/model.js"

export const readcontroller =async(req,res)=>{
try{
    const result = await studentModel.find()
    res.json({
        code:200,
        success:true,
        message:"student fetched successfully",
        data:result,
        error:false
    })
}
catch(err){
    console.log(err);
    res.json({
        code:400,
        success:false,
        message:"No such record found",
        data:result,
        error:true
    })
}
}
export const addcontroller =async(req,res)=>{
try{
    const {name,course,email,mobile} = req.body
    const data = new studentModel({name,course,email,mobile})
    const result = await data.save()
    res.json({
        code:200,
        success:true,
        message:"student added successfully",
        data:result,
        error:false
    })
}
catch(err){
    console.log(err);
    res.json({
        code:400,
        success:false,
        message:"failed to add Student",
        data:result,
        error:true
    })
}
}
export const updatecontroller =async(req,res)=>{
try{
    const{_id}=req.params
    const {name,course,email,mobile} = req.body
    const result = await studentModel.updateOne({_id},{$set:{name,course,email,mobile}})
    res.json({
        code:200,
        success:true,
        message:"student updated successfully",
        data:result,
        error:false
    })
}
catch(err){
    console.log(err);
    res.json({
        code:400,
        success:false,
        message:"failed to update Student",
        data:result,
        error:true
    })
}
}
export const deletecontroller =async(req,res)=>{
try{
    const{_id}=req.params
    const result = await studentModel.deleteOne({_id})
    res.json({
        code:200,
        success:true,
        message:"student deleted successfully",
        data:result,
        error:false
    })
}
catch(err){
    console.log(err);
    res.json({
        code:400,
        success:false,
        message:"failed to update Student",
        data:result,
        error:true
    })
}
}