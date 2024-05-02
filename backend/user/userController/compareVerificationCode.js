import { User } from "../userModel/user.model.js"
import jwt from 'jsonwebtoken'

export const compareVerificationCode = async(req,res)=>{
    try{
        const {code} = req.body
        const username = await jwt.decode(req.cookies.token).username
        const user = User.findOne({username}).lean()
        if(code == user.verificationCode){
            res.json({status:'ok'})
        }else{
            res.json({status:'Wrong Verificationcode'})
        }
        }
    catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal server error" });
    }
    
}
