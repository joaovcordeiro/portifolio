import nodemailer from "nodemailer";
import sendgridTransport from "nodemailer-sendgrid-transport";

const email = process.env.MAILADRESS;

const transporter = nodemailer.createTransport(
    sendgridTransport({
        auth: {
            api_key: process.env.SENDGRID_API_KEY
        }
    })
)

export default async function Contact(req, res) {
    try {
        const { name, senderMail, content } = req.body;

        if (!senderMail.trim() || !name.trim() || !content.trim()) {
            return res.status(403).send();
        }

        const message = {
            from: email,
            to: email,
            subject: `Nova mensagem de contato - ${name} `,
            html: `<p><b>Email:</b> ${senderMail} <br/> <b>Mensagem:</b> ${content}</p>`,
            replyTo: senderMail
        }

        transporter.sendMail(message);

        return res.send('');

    } catch {
        return res.json({
            error: true,
            message: err.message
        })
    }
}