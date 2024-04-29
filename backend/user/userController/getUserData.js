import express from "express";
import { User } from "../userModel/user.model.js";
import jwt from "jsonwebtoken";

export const userRouter = express.Router();

export const getUserData = async (req, res) =>{
    try {
        // const username = req.params.username;
        const username = jwt.decode(req.cookie.token).username
        const user = await User.findOne({ username }).lean();
        res.json(user);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal server error" });
    }
}