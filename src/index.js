// require('dotenv').config({path: './env'})

import dotenv from 'dotenv'
import connectDB from "./db/index.js";
import { app } from './app.js';
let port = process.env.PORT || 8000;

dotenv.config({
    path: './env'
})


connectDB()
.then( () => {
    app.on("error", (err) => {
        console.log("There was something problem in connectDB: ", err);
        
    })
    app.listen(port, () => {
        console.log(`App is listening on http://localhost:${port}`);
    })
})
.catch( (err) => {
    console.log("There was something problem in connectDB: ", err);
})















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



