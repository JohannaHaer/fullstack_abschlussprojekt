import express from "express";
import { User } from "../userModel/user.model.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

export const userRouter = express.Router();

export const login = async(req, res) => {
  try {
    const { username, password, email } = req.body;
    if (!username || !password) {
      res.sendStatus(403);
      return;
    }
    const user = await User.findOne({ username }).lean();
    if (user === null) {
      res.status(401).send("user doesn`t exist");
      return;
    }
    const compareResult = await bcrypt.compare(password, user.passwordHash);
    console.log(compareResult)
    if (!compareResult) {
        res.sendStatus(401);
      res.json({ status: "failed" });
    } else {
      const token = jwt.sign({ id: user._id, username }, process.env.JWT_SECRET);
      console.log("token", token)
      res.cookie("token", token, { httpOnly: true });
      res.json({ status: "ok", token: token });
    }

  } catch (error) {
    console.log(error);
    res.sendStatus(500)
  }
}



