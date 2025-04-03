// require("dotenv").config({ path: "./env" });
import dotenv from "dotenv";
import connectDB from "./db/index.js";

dotenv.config({ path: "./env" });





connectDB()
.then(() => {
    app.listen(process.env.PORT || 8000, () => {
        console.log(`Server is running on port ${process.env.PORT}`)
    })
})
.catch( (error) => {
    console.log("MONGODB Connection Error: ", error)
})














// one of approch 
/*
import express from "express";
;( async () => {
    try {
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)

        express.on("errror", (error) => {
            console.log(error)
            throw error
        })

        express.listen(process.env.PORT, () => {
            console.log(`Server is running on port ${process.env.PORT}`)
        })
    } catch (error) {
        console.log(error)
        throw error
    }
})()
    */