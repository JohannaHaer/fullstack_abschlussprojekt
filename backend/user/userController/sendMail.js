import nodemailer from 'nodemailer'
import { mail } from '../../utils/mail.js';

export const sendMail = async (req,res)=>{
    const emailResult = await mail.sendMail({
        from: '<test@supercode.de>',
        // from: "stefan@supercode.de",
        to: '<test@supercode.de>',
        subject: "Registration, Hooray!",
        text: `Danke für deine Registrierung. Klicke hier um zu bestaetigen. Dies ist dein Verification Code:`,
        html: `<p>Danke für deine Registrierung, .</p> <p>Klicke hier um zu bestaetigen. Dies ist dein Verification Code: </p>`,
     
      });
      res.json(emailResult)
}
