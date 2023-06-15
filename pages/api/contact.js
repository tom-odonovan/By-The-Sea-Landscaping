// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { mailOptions, transporter } from '../../config/nodemailer';

const CONTACT_MESSAGE_LABELS = {
  name: 'Name',
  email: 'Email',
  suburb: 'Location',
  phone: 'Phone',
  message: 'Message',
};

const generateEmailContent = (data) => {
  const stringData = Object.entries(data).reduce(
    (str, [key, value]) => {
      const newStr = `${str}${CONTACT_MESSAGE_LABELS[key]}: \n${value}\n\n`;
      return newStr;
    },
    '',
  );

  const htmlData = Object.entries(data).reduce(
    (str, [key, value]) => {
      const newStr = `${str}<h1 class='field-label' align='left'>${CONTACT_MESSAGE_LABELS[key]}</h1><p class='email-content' align='left'>${value}</p>`;
      return newStr;
    },
    '',
  );

  return {
    text: stringData,
    html: `
      <!DOCTYPE html>
      <html>
      <head>
        <title></title>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <style type="text/css">
          body,
          a {
            -webkit-text-size-adjust: 100%;
            -ms-text-size-adjust: 100%;
          }

          body {
            height: 100% !important;
            margin: 0 !important;
            padding: 0 !important;
            width: 100% !important;
          }

          @media screen and (max-width: 525px) {
            .wrapper {
              width: 100% !important;
              max-width: 100% !important;
            }

            .padding {
              padding: 10px 5% 15px 5% !important;
            }

            .section-padding {
              padding: 0 15px 50px 15px !important;
            }
          }

          .email-heading {
            color: #2a2a2a;
            font-family: "Helvetica Neue", "Helvetica", "Arial", sans-serif;
            font-weight: 400;
            text-align: center;
            font-size: 32px;
          }

          .email-container {
            margin-bottom: 24px;
            padding: 50px 80px;
            border: 2px solid rgba(0, 0, 0, 0.1);
            border-radius: 10px;
            width: 400px;
            margin: 0 auto;
          }

          .field-label {
            color: #2a2a2a;
            font-family: "Helvetica Neue", "Helvetica", "Arial", sans-serif;
            font-weight: 500;
            text-align: left;
            line-height: 20px;
            font-size: 24px;
            margin: 0px;
            padding: 0;
          }

          .email-content {
            color: #2a2a2a;
            font-family: "Helvetica Neue", "Helvetica", "Arial", sans-serif;
            font-weight: 300;
            text-align: left;
            line-height: 30px;
            font-size: 20px;
            margin: 0 0 24px;
            padding: 10px 0 24px 0;
            border-bottom: 1px solid rgba(0, 0, 0, 0.1);
          }

          .footer {
            color: #2a2a2a;
            font-family: "Helvetica Neue", "Helvetica", "Arial", sans-serif;
            text-align: center;
            font-size: 16px;
          }

          div[style*="margin: 16px 0;"] {
            margin: 0 !important;
          }
        </style>
      </head>
      <body style="margin: 0 !important; padding: 0 !important; background: none;">
        <h2 class="email-heading">New Contact Message 👋</h2>
        <div class="email-container">${htmlData}</div>
        <p class="footer">Sent via contact form @ bythesealandscapes.com</p>
      </body>
      </html>
          `,
  };
};

const handler = async (req, res) => {
  if (req.method === 'POST') {
    const { name, email, suburb, phone, message } = req.body;
    if (!name || !email || !suburb || !phone || !message) {
      return res.status(400).json({ message: 'Bad request' });
    }

    try {
      await transporter.sendMail({
        ...mailOptions,
        ...generateEmailContent({ name, email, suburb, phone, message }),
        subject: `New message from ${name}`,
      });
      console.log('Email sent');
      return res.status(200).json({ message: 'Success' });
    } catch (error) {
      console.log('Error sending email', error.message);
      return res.status(400).json({ message: error.message });
    }
  }

  return res.status(400).json({ message: 'Bad request' });
};

export default handler;
