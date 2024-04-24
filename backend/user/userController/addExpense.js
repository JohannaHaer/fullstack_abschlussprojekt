import express from "express";
import { User } from "../userModel/user.model.js";


export const userRouter = express.Router();



export const addExpense = async (req,res)=>{
  const username = 'test'
  // try{
    const user = await User.findOne({username})
    console.log(user)
    if (!user) {
      throw new Error("User not found");
    }
    let expenses = user.transactions.expenses;
    expenses.push({test:'test'})
    const writeResult = await user.save();
      res.json(writeResult);
  // }
  // catch(error){
  //      //!addErrorStatus
  //   res.status(401).send("Authentification needed");
  // }
}