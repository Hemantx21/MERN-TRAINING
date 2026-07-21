import mongoose from "mongoose";

const dbconnect=async()=>{
const connect=   await mongoose.connect('mongodb://localhost:27017/studentsDB')
if (connect){
    console.log(`DB connected Successfully`);
    
}
}
export default dbconnect