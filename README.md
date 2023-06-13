>Freelance Website Build
# By The Sea Landscaping


<div align="center" style="display: flex; flex-wrap: wrap; justify-content: center;">
    </br>
    <img height='auto' width='100%' src="./public/screenshots/hero-sc.png" alt="Website cover screenshot" /> 
    <img height='auto' width='100%' src="./public/screenshots/about-sc.png" alt="About section screenshot" /> 
    <img height='auto' width='100%' src="./public/screenshots/services-sc-2.png" alt="Services section screenshot" /> 
    <img height='auto' width='100%' src="./public/screenshots/guarantee-sc.png" alt="Why choose us form screenshot" /> 
    <img height='auto' width='100%' src="./public/screenshots/explore-sc.png" alt="Explore section screenshot" /> 
    <img height='auto' width='100%' src="./public/screenshots/contact-sc-2.png" alt="Contact form screenshot" /> 
    <img height='auto' width='100%' src="./public/screenshots/footer-sc.png" alt="Footer screenshot" /> 
    </br>
</div>

This repository contains the code for a small landscaping business website built using React, Next.js, Tailwind, and Framer Motion. The website aims to showcase the services offered by the landscaping business and provide information to potential clients.

## Features

- **Responsive Design:** The website is designed to provide an optimal viewing experience across various devices, including desktops, tablets, and mobile phones.

- **Sections and Components:** The website is organized into several sections, including a hero section, about section, services section, blog section, and more. Each section is implemented as a reusable component to maintain code modularity.

- **Contact Form:** A contact form is provided to allow visitors to get in touch with the landscaping business directly. The form includes fields for name, email, subject, and message, enhancing communication with potential clients.

- **Email Integration:** The contact form integrates with [Nodemailer](https://nodemailer.com/about/) and sends an email to the business when a user submits the form. The email includes the submitted data, such as the name, email, location, phone, and message.

- **Form Validation:** The contact form employs [Yup](https://www.npmjs.com/package/yup) for form validation. It ensures that the required fields are filled out correctly, such as validating the email format and phone number format.

- **Animated Transitions:** The website utilizes [Framer Motion](https://www.framer.com/motion/), a popular animation library for React, to add smooth and engaging animations to various elements, enhancing the overall user experience.

- **Navigation and Footer:** The website includes a navigation bar for easy navigation between sections and a footer section containing relevant links and information.

- **Back to Top Button:** A "Back to Top" button is provided to allow users to quickly navigate back to the top of the page, enhancing the user experience.

## Technologies Used

### Front-End

- **React:** A JavaScript library for building user interfaces, used as the foundation of the website.

- **Next.js:** A React framework for server-rendered applications, providing improved performance, SEO capabilities, and easy routing.

- **Tailwind CSS:** A utility-first CSS framework used for styling the website. It provides a responsive and customizable design system.

- **Framer Motion:** A popular animation library for React, used to add smooth and engaging animations to various elements of the website.

- **Formik:** A form library for React that helps with form handling, validation, and error display.

- **Yup:** A JavaScript schema validation library used for defining and validating the shape of data.

### Back-End

- **Express:** A minimalist web application framework for Node.js used to handle the API route for the contact form submission.

- **Nodemailer:** A module for Node.js applications that allows sending emails using SMTP or sendmail transport.



## Feedback 

Feedback and suggestions for this project is welcome. If you find any issues or have suggestions for improvements, please open an issue or submit a pull request. Ensure that you follow the established coding guidelines and best practices.

## Acknowlegements 

- [By The Sea Landscaping](#) 
- [React](https://reactjs.org/)
- [Next.js](https://nextjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Framer Motion](https://www.framer.com/motion/)
- [Formik](https://formik.org/)
- [Yup](https://www.npmjs.com/package/yup)
- [Express](https://expressjs.com/)
- [Nodemailer](https://nodemailer.com/about/)

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
