import { productModel } from "../model/model.js"

export const readcontroller =async(req,res)=>{
try{
    const result = await productModel.find()
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
        data:err,
        error:true
    })
}
}
export const addcontroller =async(req,res)=>{
try{
    const {name,price,category,stock} = req.body
    const data = new productModel({name,price,category,stock})
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
        data:null,
        error:true
    })
}
}
export const updatecontroller =async(req,res)=>{
try{
    const{_id}=req.params
    const {name,price,category,stock} = req.body
    const result = await productModel.updateOne({_id},{$set:{name,price,category,stock}})
    res.json({
        code:200,
        success:true,
        message:"Product updated successfully",
        data:result,
        error:false
    })
}
catch(err){
    console.log(err);
    res.json({
        code:400,
        success:false,
        message:"failed to update Product",
        data:result,
        error:true
    })
}
}
export const deletecontroller =async(req,res)=>{
try{
    const{_id}=req.params
    const result = await productModel.deleteOne({_id})
    res.json({
        code:200,
        success:true,
        message:"Product deleted successfully",
        data:result,
        error:false
    })
}
catch(err){
    console.log(err);
    res.json({
        code:400,
        success:false,
        message:"failed to update Product",
        data:result,
        error:true
    })
}
}