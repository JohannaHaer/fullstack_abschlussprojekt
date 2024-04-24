import express from "express";
export const userRouter = express.Router();


export const logout = async (req,res) =>{
    res.clearCookie("token");
    res.end();
}
