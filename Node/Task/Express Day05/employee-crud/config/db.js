import mongoose from "mongoose";
const dbconnect = async () => {
    const conn = await mongoose.connect('mongodb://localhost:27017/employeesDB')
    if (conn) {
        console.log(`DB connected succesfully`);
    }
}

export default dbconnect