// require('dotenv').config({path: './env'})

import dotenv from 'dotenv'
import connectDB from "./db/index.js";

dotenv.config({
    path: './env'
})

connectDB()















// import mongoose from "mongoose";
// import { db_name } from "./constants.js";

// import express from "express";
// import connectDB from "./db/index.js";
// const app = express();

// let port = process.env.PORT || 8000;



// ;( async () => {
//     try {
//         let dbConn = await mongoose.connect(`${process.env.MONGODB_URI}/${db_name}`);
//         console.log(dbConn);

//         app.on("error", (err) => {
//             console.log("Error  : ", err);
//             throw err;
//         })
//         app.listen(port, () => {
//             console.log(`app is listening on localhost:${port}`);
//         })
        
        
//     } catch (error) {
//         console.log("we having problem while connection db", error);
//         throw error
//     }
// })();



