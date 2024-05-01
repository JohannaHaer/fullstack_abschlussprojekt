import jwt from "jsonwebtoken";
import { User } from "../userModel/user.model.js";

export const editUser = async(req,res)=>{
    try{
        const {username, email} = req.body
        const cookieUsername = await jwt.decode(req.cookies.token).username
        if(username){
            const user = await User.findOneAndUpdate(
                {username: cookieUsername},
                {username: username}
            )
            res.json(user)
        }else if(email){
            const user = await User.findOneAndUpdate(
                {username: cookieUsername},
                {email:email}
            )
            res.json(user)
        }

    } catch(error){
        console.error(error);
        res.status(500).json({ error: "Internal server error" });
    }
}