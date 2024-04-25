
import { User } from "../userModel/user.model.js";



export const addIncomeCategory = async (req,res)=>{
  //!username muss noch getestet
//   const username = 'test'
    const username = jwt.decode(res.cookie.token).payload.username
    const {categoryName, color, imgUrl} = req.body
    console.log('bitte')
        try{
            const user = await User.findOne({username})
        if (!user) {
            throw new Error("User not found");
        }
    user.incomeCategories.push({
        categoryName: categoryName,
        color: color,
        imgUrl: imgUrl
    })
    const writeResult = await user.save();
        res.json(writeResult);
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal server error" });
    }
}