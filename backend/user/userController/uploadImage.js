import { uploadImage } from "../../utils/imgUpload.js";
import { User } from "../userModel/user.model.js";
import { userRouter } from "./userLogin.js";



export const imageUpload = async (req,res) =>{
    console.log('check')
    try{
        const username = jwt.decode(req.cookies.token).username
        // const username = 'red2'
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