import { User } from "../userModel/user.model.js";



export const addIncome = async (req,res)=>{
  //!username muss noch getestet werden
  const username = 'joan'
  // const username = await jwt.decode(req.cookies.token).username
  const {amount, category, description, date, time} = req.body
  try{
    const user = await User.findOne({username})
    if (!user) {
      throw new Error("User not found");
    }
    user.transactions.push({
      amount: amount,
      category: category,
      description: description,
      date: date,
      time: time,
      type:"income"
    })
    const writeResult = await user.save();
      res.json(writeResult);
  }
  catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
}
}