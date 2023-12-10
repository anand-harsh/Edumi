import {createTransport} from "nodemailer"

export const sendEmail = async (to, subject, text) => {
    const transporter = createTransport({
            host: "sandbox.smtp.mailtrap.io",
            port: 2525,
            auth: {
              user: "dde3df5bb2c9dc",
              pass: "e6260e5e82fa5e"
            }
        })
    
    await transporter.sendMail({
        to, subject, text
    })
}