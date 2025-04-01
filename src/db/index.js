import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const connectDB = async () => {
    try {
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)

        // check what is in that instance
        console.log(`MongoDB Connected: ${connectionInstance.connection.host}`)
    } catch (error) {
        console.log("MONGODB Connection Error: ", error)
        process.exit(1)
    }
}

export default connectDB