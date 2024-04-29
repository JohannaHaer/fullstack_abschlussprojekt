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
import { checkRepeatEmail, checkRepeatName } from "../../middleware/checkRepeat.js";
import { editUser } from "../userController/editUser.js";
import { changePassword } from "../userController/changePassword.js";
import { imageUpload } from "../userController/uploadImage.js";

const userRouter = express.Router()
const mult = multer({ storage: multer.memoryStorage() })


userRouter.post("/register",mult.none(),checkRepeatName, checkRepeatEmail, register)
userRouter.post('/login', mult.none(), login)
userRouter.get('/getUser', checkAuth, getUserData)
userRouter.get('/logout', logout)
userRouter.post('/addExpense', mult.none(), checkAuth, addExpense)
userRouter.post('/addIncome', mult.none(), checkAuth, addIncome)
userRouter.post('/addExpenseCategory', mult.none(), checkAuth, addExpenseCategory)
userRouter.post('/addIncomeCategory', mult.none(), checkAuth, addIncomeCategory)
userRouter.patch('/editUser', mult.none(), checkAuth, editUser)
userRouter.patch('/changePassword', mult.none(), checkAuth, changePassword)
userRouter.patch('/uploadImage', mult.single("image"), checkAuth, imageUpload) //sowohl für initialen upload als auch als änderung

export default userRouter