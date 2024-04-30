import express from 'express'
import userRouter from './user/userRoutes/user.routes.js'
import cors from 'cors'
import mongoose from 'mongoose';
import 'dotenv/config'
import cookieParser from "cookie-parser";
import { v2 as cloudinary } from "cloudinary";


await mongoose.connect(process.env.MONGODB_URI);

const PORT = 3000
const app = express()

cloudinary.config({
    cloud_name: "dvuefu0mx",
    api_key: "736547154696513",
    api_secret: process.env.CLOUDINARY_SECRET,
  });


app.use(cors({ origin: process.env.CORS_ACCESS, credentials: true }))
app.use(cookieParser());
app.use(express.json())
app.use('/user', userRouter)


app.listen(PORT, () => {
    console.log(`listening on http://localhost:${PORT}`);
})