import { User } from "../user/userModel/user.model.js";
import jwt from "jsonwebtoken";

export const createNewVerificationCode = async ( req,res, next) =>{
    const code = Math.floor(Math.random() * 900000) + 100000
    // const username = await jwt.decode(req.cookies.token).username
    const username = 'red23214234'
    const user = await User.findOneAndUpdate(
        {username: username},
        {verificationCode: code}
    )
    console.log(user)
    next()
}