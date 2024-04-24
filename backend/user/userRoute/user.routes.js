import express from "express";
import multer from "multer";
import {checkAuth} from '../../middleware/checkAuth.js'
import { checkRepeatEmail, checkRepeatName, register } from "../userController/userRegister.js";
import { login } from "../userController/userLogin.js";
import { getUserData } from "../userController/getUserData.js";
import { logout } from "../userController/userLogout.js";
import { addExpense } from "../userController/addExpense.js";
import { addIncome } from "../userController/addIncome.js";

const userRouter = express.Router()
const mult = multer()

userRouter.post("/register",mult.none(), register)
userRouter.post('/checkRepeatName', mult.none(), checkRepeatName)
userRouter.post('/checkRepeatEmail', mult.none(), checkRepeatEmail)
userRouter.post('/login', mult.none(), login)
userRouter.get('/:username', checkAuth, getUserData)
userRouter.get('/logout', logout)
userRouter.post('/addExpense', mult.none(),  addExpense)
userRouter.post('/addIncome', mult.none(), addIncome)

export default userRouter