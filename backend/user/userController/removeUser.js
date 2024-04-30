import { User } from "../userModel/user.model.js"


export const removeUser = async(req, res)=>{
    const username = jwt.decode(req.cookies.token).username
    console.log(username)
    try{
    const user = await User.findOneAndDelete({username:username})
    console.log('test user is :', user);
    if (!user) {
      return res.status(400).send('Item not found');
    }
    return res.status(200).send("Id " + req.params.id + " has been deleted");//?funtioniert req.params.id?
}
    catch(error){
        return res.status(500).json(err);
    }
}