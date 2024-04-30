import { User } from "../userModel/user.model.js"


export const compareVerificationCode = async(req,res)=>{
    const {code} = req.body
    const username = await jwt.decode(req.cookies.token).username
    const user = User.findOne({username}).lean()
    if(code == user.verificationCode){
        res.json({status:'ok'})
    }else{
        res.json({status:'Wrong Verificationcode'})
    }
}