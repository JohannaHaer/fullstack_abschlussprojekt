import bcrypt from "bcrypt";
import multer from "multer";
import express from "express";
import { User } from "../userModel/user.model.js";


export const userRouter = express.Router();
const mult = multer();


userRouter.post('/addIncome', mult.none(), async(req,res)=>{
    try{
        
    }
    catch(error){
         //!addErrorStatus
      // res.status(401).send("Authentification needed");
    }
})