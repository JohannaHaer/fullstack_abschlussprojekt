import { User } from "../userModel/user.model.js";



export const addExpense = async (req,res)=>{
  //!username muss noch getestet werden
  // const username = 'test'
  const username = jwt.decode(res.cookie.token).payload.username
  const {amount, category, description, date, time} = req.body
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
  catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
}
}