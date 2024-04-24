import { User } from "../userModel/user.model.js";



export const addExpense = async (req,res)=>{
  //!username muss noch abgefragt werden
  const username = 'test'
  const {amount, category, description} = req.body
  try{
    const user = await User.findOne({username})
    if (!user) {
      throw new Error("User not found");
    }
    user.transactions.expenses.push({
      amount: amount,
      category: category,
      description: description
    })
    const writeResult = await user.save();
      res.json(writeResult);
  }
  catch(error){
    console.log(error);
    res.sendStatus(500)
  }
}