// require('dotenv').config({path:'./.env'});
import dotenv from "dotenv";
// import mongoose from "mongoose";
// import { DB_NAME } from "./constens";
// import express from "express";
import connectDB from "./db/index.js";
import { app } from "./app.js";




dotenv.config({
  path: "./env",
});
connectDB()
  .then((result) => {
    app.on("error", (error) => {
      console.log("Failed to connect to MongoDB");
      throw error;
    });
    app.listen(process.env.PORT || 8000, () => {
      console.log(`Connected to MongoDB ${process.env.PORT}`);
    });
  })
  .catch((err) => {
    console.log("Failed to connect to MongoDB !!", err);
  });

// const app = express();
// ;(async () => {
//     try {
//         await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
//         app.on("error", (error) => {
//             console.log("Failed to connect to MongoDB");
//             throw error;
//         })

//         app.listen(process.env.PORT, () => {
//             console.log(`Server is running on port ${process.env.PORT}`);
//         })
//     } catch (error) {
//         throw console.log(error);

//     }
// })()
