import { User } from "../user/userModel/user.model.js";
import bcrypt from 'bcrypt'

export const createNewVerificationCode = async ( req,res, next) =>{
    const code = Math.floor(Math.random() * 900000) + 100000
    const salt = await bcrypt.genSalt();
    const hash = await bcrypt.hash(code, salt);
    const {email} = req.body
    const user = await User.findOneAndUpdate(
        {email: email},
        {verificationCode: hash}
    )
    next()
}



//    const compareResult = await bcrypt.compare(password, user.passwordHash);
// const salt = await bcrypt.genSalt();
// const hash = await bcrypt.hash(password, salt);
// const user = await User.create({ username, passwordHash: hash, email, firstName, lastName });