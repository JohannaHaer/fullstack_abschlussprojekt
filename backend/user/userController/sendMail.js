import { mail } from '../../utils/mail.js';
import { User } from '../userModel/user.model.js';
import jwt from "jsonwebtoken";

export const sendMail = async (req,res)=>{
    try{
    // const username = await jwt.decode(req.cookies.token).username
    const {email} = req.body
    const user = await User.findOne({ email }).lean();
    const emailResult = await mail.sendMail({
        from: '<finko@kunndensupport.de>',
        to: `<${user?.email}>`,
        subject: "Reset Passwort",
        text: `Hier ist dein Code um dein Passwort zurückzusetzten: ${user?.verificationCode}`,
        // html: `<p>Danke für deine Registrierung, .</p> <p>Klicke hier um zu bestaetigen. Dies ist dein Verification Code: </p>`,
      });
      res.json(emailResult)
  }
  catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }

}
