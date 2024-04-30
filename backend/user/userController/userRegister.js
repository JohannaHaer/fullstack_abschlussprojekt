import bcrypt from "bcrypt";
import { User } from "../userModel/user.model.js";
import jwt from "jsonwebtoken";


export const register = async (req,res)=>{
    try {
        const checkNameStatus = res.locals.checkNameStatus
        const checkEmailStatus = res.locals.checkEmailStatus
        console.log(checkNameStatus, checkEmailStatus)
        if(checkNameStatus == "ok" && checkEmailStatus == "ok"){
            const { firstName, lastName, username, password, email } = req.body;
            if (!firstName || !lastName || !username || !password || !email) {
                res.sendStatus(403);
                return;
            }  
            const salt = await bcrypt.genSalt();
            const hash = await bcrypt.hash(password, salt);
            const user = await User.create({ username, passwordHash: hash, email, firstName, lastName });

            //für den automatischen Login nach dem Regsiter
            const userData = await User.findOne({username:username}).lean()
            const token = jwt.sign({ id: userData._id, username: userData.username }, process.env.JWT_SECRET);
            res.cookie("token", token, { httpOnly: true });
            res.json({ status: "ok", token: token });


            res.json(user);
        }else{
            res.json({checkNameStatus:checkNameStatus,checkMailStatus:checkEmailStatus})
        }

    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal server error" });
    }
}