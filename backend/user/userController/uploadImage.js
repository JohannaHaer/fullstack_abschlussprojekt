import { uploadImage } from "../../utils/imgUpload.js";
import { User } from "../userModel/user.model.js";
import { userRouter } from "./userLogin.js";
import jwt from 'jsonwebtoken'



export const imageUpload = async (req,res) =>{
    try{
        const username = 'asdfadfadfasf'//jwt.decode(req.cookies.token).username
        const uploadResult = await uploadImage(req.file.buffer)
        const imgUrl = uploadResult.secure_url
        const user = await User.findOneAndUpdate(
            {username:username},
            {pictureUrl: imgUrl}
        )
        res.json(user)
    }catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal server error" });
    }
}
