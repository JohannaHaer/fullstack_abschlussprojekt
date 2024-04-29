import express from "express";
import multer from "multer";
import {checkAuth} from '../../middleware/checkAuth.js'
import { register } from "../userController/userRegister.js";
import { login } from "../userController/userLogin.js";
import { getUserData } from "../userController/getUserData.js";
import { logout } from "../userController/userLogout.js";
import { addExpense } from "../userController/addExpense.js";
import { addIncome } from "../userController/addIncome.js";
import { addExpenseCategory } from "../userController/addExpenseCategory.js";
import { addIncomeCategory } from "../userController/addIncomeCategory.js";
import { v2 as cloudinary } from "cloudinary";
import { checkRepeatEmail, checkRepeatName } from "../../middleware/checkRepeat.js";
import { editUser } from "../userController/editUser.js";
import { changePassword } from "../userController/changePassword.js";

const userRouter = express.Router()
const mult = multer({ storage: multer.memoryStorage() })

cloudinary.config({
    cloud_name: "dvuefu0mx",
    api_key: "736547154696513",
    api_secret: process.env.CLOUDINARY_SECRET,
  });

userRouter.post("/register",mult.none(),checkRepeatName, checkRepeatEmail, register)
userRouter.post('/login', mult.none(), login)
userRouter.get('/getUser', checkAuth, getUserData)
userRouter.get('/logout', logout)
userRouter.post('/addExpense', mult.none(), checkAuth, addExpense)
userRouter.post('/addIncome', mult.none(), checkAuth, addIncome)
userRouter.post('/addExpenseCategory', mult.none(), checkAuth, addExpenseCategory)
userRouter.post('/addIncomeCategory', mult.none(), checkAuth, addIncomeCategory)
userRouter.patch('/editUser', mult.none(),checkAuth, editUser)
userRouter.patch('/changePassword', mult.none(), checkAuth, changePassword)

export default userRouter