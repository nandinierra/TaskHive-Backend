import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import {connectDB} from "./config/mongodb.js"
import connectCloudinary from "./config/cloudinary.js"
// import adminRouter from "./routes/adminRoute.js";
import technicianRouter from "./routes/techniciansRoute.js";
import userRouter from "./routes/userRoute.js";

dotenv.config();
const app=express();

connectCloudinary();

app.use(cors());
app.use(express.json())
const port=process.env.PORT;
const url=process.env.URL;



// app.use("/api/admin", adminRouter);
app.use("/api/technician", technicianRouter);
app.use("/api/user", userRouter);


// app.get("/", (req, res)=>{
//     res.status(201).json({
//         message:"got the get request"
//     })
// })


const main=()=>{
connectDB(url)
app.listen(port, ()=>{
    console.log(`server is runnng on port ${port}`)
})
}

main();