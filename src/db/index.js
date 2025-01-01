import mongoose from "mongoose";
// import { DB_NAME } from "../constens.js";
import { DB_NAME } from "../../constens.js";

const connectDB = async () => {
    try {
        console.log("Connecting to MongoDB");
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
        console.log(`\n MongoDB connected successfully to host: ${connectionInstance.connection.host}`);
        console.log(`\n MongoDB Connected !! : DBHOST:     ${connectionInstance.connection.name}`);

        
    } catch (error) {
        console.log("MongoDB connection Failed", error );
        process.exit(1);
    }
}

export default connectDB;
