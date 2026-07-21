import { employeeModel } from "../model/model.js"

export const readcontroller =async(req,res)=>{
try{
    const result = await employeeModel.find()
    res.json({
        code:200,
        success:true,
        message:"empoyee fetched successfully",
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
    const {name,department,salary,city} = req.body
    const data = new employeeModel({name,department,salary,city})
    const result = await data.save()
    res.json({
        code:200,
        success:true,
        message:"empoyee added successfully",
        data:result,
        error:false
    })
}
catch(err){
    console.log(err);
    res.json({
        code:400,
        success:false,
        message:"failed to add empoyee",
        data:result,
        error:true
    })
}
}
export const updatecontroller =async(req,res)=>{
try{
    const{_id}=req.params
    const {name,department,salary,city} = req.body
    const result = await employeeModel.updateOne({_id},{$set:{name,department,salary,city}})
    res.json({
        code:200,
        success:true,
        message:"empoyee updated successfully",
        data:result,
        error:false
    })
}
catch(err){
    console.log(err);
    res.json({
        code:400,
        success:false,
        message:"failed to update empoyee",
        data:result,
        error:true
    })
}
}
export const deletecontroller =async(req,res)=>{
try{
    const{_id}=req.params
    const result = await employeeModel.deleteOne({_id})
    res.json({
        code:200,
        success:true,
        message:"empoyee deleted successfully",
        data:result,
        error:false
    })
}
catch(err){
    console.log(err);
    res.json({
        code:400,
        success:false,
        message:"failed to update empoyee",
        data:result,
        error:true
    })
}
}