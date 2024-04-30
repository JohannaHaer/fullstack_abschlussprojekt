import nodemailer from "nodemailer";
import 'dotenv/config'

export const mail = nodemailer.createTransport({
  host: "sandbox.smtp.mailtrap.io",
  port: 2525,
  auth: {
    // user: "7065721b32325f",
    // pass: "65b99f11d0b3be"
    user: process.env.MAILTRAP_USER,
    pass: process.env.MAILTRAP_PASSWORD,
  },
});