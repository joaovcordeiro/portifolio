import emailjs from '@emailjs/browser'

const service_id = process.env.NEXT_PUBLIC_SERVICE_ID
const template_id = process.env.NEXT_PUBLIC_TEMPLATE_ID
const public_key = process.env.NEXT_PUBLIC_PUBLIC_KEY



export const sendContactMail = async (name, senderMail, content) => {
    const templateParams = {
        from_name: name,
        message: content,
        email: senderMail
    }

    try {
        emailjs.send(service_id, template_id, templateParams, public_key)
    }
    catch (error) {
        return error;
    }
}