// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { mailOptions, transporter } from "../../config/nodemailer";

const handler = async (req, res) => {
  if (req.method === 'POST') {
    const { name, email, suburb, message } = req.body
    if (!name || !email || !suburb || !message) {
      return res.status(400).json({ message: 'Bad request' });
    }
    
    try {
      await transporter.sendMail({
        ...mailOptions,
        subject: `New message from ${name}`,
        text: `
          Name: ${name}
          Email: ${email}
          Suburb: ${suburb}
          Message: ${message}
        `,
        html: `
          <h1>New Contact Message</h1>
          <p>Name: ${name}</p>
          <p>Email: ${email}</p>
          <p>Suburb: ${suburb}</p>
          <p>Message: ${message}</p>
        `
      });
      console.log('Email sent');
      return res.status(200).json({ message: 'Success' });
    } catch (error) {
      console.log('Error sending email', error.message);
      return res.status(400).json({ message: error.message });
    }
  }


  return res.status(400).json({ message: 'Bad request' });
}

export default handler
