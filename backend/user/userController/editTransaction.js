import { User } from "../userModel/user.model.js";

export const changePassword = async(req,res)=>{
    try{
        const {category, amount, description, date, time } = req.body
        const username = jwt.decode(req.cookies.token).username
        const transactionId = 'test'//req.params.id
        const user = await User.findOneAndUpdate(
            {transactions:[{id:transactionId}]},
            {}
        )
        res.json(user)
    }catch(error){
        console.error(error);
        res.status(500).json({ error: "Internal server error" });
    }
}