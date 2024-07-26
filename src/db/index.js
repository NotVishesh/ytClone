import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const connectDB = async ()=>{
    try{
        console.log(DB_NAME);
        const connectionInstence = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        console.log(`\n MongoDB connected !! DB Host : ${connectionInstence.connection.host}`);
    }catch(error){
        console.log(` mongoDB connection Error `, error);
        process.exit(1);
    }
}
export default connectDB;