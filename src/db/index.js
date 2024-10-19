import mongoose from "mongoose";
import { db_name } from "../constants.js";

const connectDB = async () => {
    try {
        let connectDB = await mongoose.connect(`${process.env.MONGODB_URI}/${db_name}`);
        // console.log("DB connection is Done !!! DB HOST: ", connectDB);
        console.log("DB connection is Done !!! DB HOST: ", connectDB.connection.host);
        
        
    } catch (error) {
        console.log("Error in connectin DB : ", error);
        process.exit();
    }
}

export default connectDB;