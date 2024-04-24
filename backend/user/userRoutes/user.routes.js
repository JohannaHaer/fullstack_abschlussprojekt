import express from "express";
import multer from "multer";
import {checkAuth} from '../../middleware/checkAuth.js'
import { checkRepeatEmail, checkRepeatName, register } from "../userController/userRegister.js";
import { login } from "../userController/userLogin.js";
import { getUserData } from "../userController/getUserData.js";
import { logout } from "../userController/userLogout.js";
import { addExpense } from "../userController/addExpense.js";
import { addIncome } from "../userController/addIncome.js";
import { addExpenseCategory } from "../userController/addExpenseCategory.js";
import { addIncomeCategory } from "../userController/addIncomeCategory.js";
import { v2 as cloudinary } from "cloudinary";

const userRouter = express.Router()
const mult = multer({ storage: multer.memoryStorage() })

cloudinary.config({
    cloud_name: "dvuefu0mx",
    api_key: "736547154696513",
    api_secret: process.env.CLOUDINARY_SECRET,
  });

userRouter.post("/register",mult.none(), register)
userRouter.post('/checkRepeatName', mult.none(), checkRepeatName)
userRouter.post('/checkRepeatEmail', mult.none(), checkRepeatEmail)
userRouter.post('/login', mult.none(), login)
userRouter.get('/:username', checkAuth, getUserData)
userRouter.get('/logout', logout)
userRouter.post('/addExpense', mult.none(), checkAuth, addExpense)
userRouter.post('/addIncome', mult.none(), checkAuth, addIncome)
userRouter.post('/addExpenseCategory', mult.none(), checkAuth, addExpenseCategory)
userRouter.post('/addIncomeCategory', mult.none(), checkAuth, addIncomeCategory)

export default userRouter