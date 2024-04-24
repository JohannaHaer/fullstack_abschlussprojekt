import { User } from "../userModel/user.model.js";



export const addIncomeCategory = async (req,res)=>{
  //!username muss noch abgefragt werden
  const username = 'test'
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
  catch(error){
    console.log(error);
    res.sendStatus(500)
  }
}