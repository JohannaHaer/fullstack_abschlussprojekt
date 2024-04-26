import jwt from "jsonwebtoken";
import { User } from "../userModel/user.model.js";

export const editUser = async(req,res)=>{
    try{
        const {username, email, pictureUrl} = req.body
        const cookieUsername = jwt.decode(req.cookies.token).username
        console.log(cookieUsername)
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
        }else if(pictureUrl){
            const user = await User.findOneAndUpdate(
                {username:cookieUsername},
                {pictureUrl:pictureUrl}
            )
            res.json(user)
        }

    } catch(error){
        console.error(error);
        res.status(500).json({ error: "Internal server error" });
    }
}


// imageRouter.patch("/:id", mult.single("image"), async (req, res) => {
//     const { likes } = req.body;
//     const id = req.params.id;
//     const image = await Image.findOneAndUpdate(
//       { _id: id },
//       { likes },
//       { new: true }
//     );
//     res.json(image);
//   });