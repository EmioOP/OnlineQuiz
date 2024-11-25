import mongoose from "mongoose";
import { DB_NAME } from "../constants";

const connectDB = async() =>{
    try {
        const connectionINstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`,)
        console.log(`mongodb Connection SuccessFull ,  Host name: ${connectionINstance.connection.host}`)
    } catch (error) {
        console.log("MONGODB CONECTION ERROR",error)
        process.exit(1)
    }
}

export {connectDB}