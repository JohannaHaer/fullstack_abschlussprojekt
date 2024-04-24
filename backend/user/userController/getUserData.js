import express from "express";
import { User } from "../userModel/user.model.js";

export const userRouter = express.Router();

export const getUserData = async (req, res) =>{
    try {
        const username = req.params.username;
        const user = await User.findOne({ username }).lean();
        res.json(user);
    } catch (error) {
        //!addErrorStatus
        // res.status(401).send("Authentification needed");
    }
}