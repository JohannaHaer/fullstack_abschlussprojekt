import express from 'express'
import userRouter from './user/userRoute/user.routes.js'
import cors from 'cors'
import mongoose from 'mongoose';
import 'dotenv/config'
import cookieParser from "cookie-parser";

await mongoose.connect(process.env.MONGODB_URI);

const PORT = 3000
const app = express()

app.use(cors())
app.use(cookieParser());
app.use(express.json())
app.use('/user', userRouter)


app.listen(PORT, () => {
    console.log(`listening on http://localhost:${PORT}`);
})