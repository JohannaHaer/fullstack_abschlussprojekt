import express from "express";
import multer from "multer";
import {checkAuth} from '../../middleware/checkAuth.js'
import { checkRepeatEmail, checkRepeatName, register } from "../userController/userRegister.js";
import { login } from "../userController/userLogin.js";
import { getUserData } from "../userController/getUserData.js";
import { logout } from "../userController/userLogout.js";

const userRouter = express.Router()
const mult = multer()

userRouter.post("/register",mult.none(), register)
userRouter.post('/checkRepeatName', mult.none(), checkRepeatName)
userRouter.post('/checkRepeatEmail', mult.none(), checkRepeatEmail)
userRouter.post('/login', mult.none(), login)
userRouter.get('/:username', checkAuth, getUserData)
userRouter.get('/logout', logout)

// router.get('/currentUser',checkAuth, getCurrentUserDetails)
// router.post("/register", mult.none(), registerUser)
// router.get('/:id', checkAuth, getUserDetails)

// router.post("/setFavorite", checkAuth, setFavorite)

export default userRouter