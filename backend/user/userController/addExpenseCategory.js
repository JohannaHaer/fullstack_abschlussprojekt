import { User } from "../userModel/user.model.js";
import jwt from 'jsonwebtoken'



export const addExpenseCategory = async (req,res)=>{
  //!username muss noch getestet werden
  // const username = 'test'
  const username = jwt.decode(res.cookie.token).payload.username
  const {categoryName, color, imgUrl} = req.body
  console.log('bitte')
  try{
    const user = await User.findOne({username})
    if (!user) {
      throw new Error("User not found");
    }
    user.expenseCategories.push({
      categoryName: categoryName,
      color: color,
      imgUrl: imgUrl
    })
    const writeResult = await user.save();
      res.json(writeResult);
  }
  catch(error){
    console.log(error);
    res.sendStatus(500)
  }
}