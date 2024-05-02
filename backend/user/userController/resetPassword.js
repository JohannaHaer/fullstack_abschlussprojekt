import { User } from "../userModel/user.model.js"
import jwt from 'jsonwebtoken'
import bcrypt from "bcrypt";

export const resetPassword = async(req,res)=>{
    try{
        const {password} = req.body
        const email = await jwt.decode(req.cookies.emailToken).email
        const salt = await bcrypt.genSalt();
        const passwordHash = await bcrypt.hash(password, salt);
        const user = User.findOneAndUpdate(
            {email:email},
            {passwordHash:passwordHash}
        )
        res.json('Password changed')
        }
    catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal server error" });
    }
    
}