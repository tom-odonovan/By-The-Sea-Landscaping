import { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { MdError } from 'react-icons/md';
import { AiFillCheckCircle } from 'react-icons/ai';
import { BiArrowBack } from 'react-icons/bi';
import { sendContactForm } from '../../lib/api';
import FormInput from './FormInput';
import styles from '../../styles';

const ContactForm = () => {
  const [submitted, setSubmitted] = useState(false);

  const { values, errors, touched, isSubmitting, isValid, handleChange, handleSubmit } = useFormik({
    initialValues: {
      name: '',
      email: '',
      suburb: '',
      phone: '',
      message: '',
    },
    onSubmit: async (formValues, actions) => {
      actions.setSubmitting(true);
      try {
        await sendContactForm(values);
        actions.setSubmitting(false);
        setSubmitted(true);
        actions.resetForm();
      } catch (error) {
        console.error('An error has occured', error);
      }
    },
    validationSchema: Yup.object({
      name: Yup
        .string()
        .required('Required'),
      email: Yup
        .string()
        .email('Please enter a vaild email')
        .required('Required'),
      suburb: Yup
        .string()
        .required('Required'),
      phone: Yup
        .string()
        .matches(/^[0-9]+$/, 'Must be a valid phone number')
        .required('Required'),
      message: Yup
        .string()
        .required('Required'),
    }),
  });

  return (
    <div className="relative flex flex-col px-8 py-20 sm:px-20 lg:px-12 xl:px-20 leading-8 w-full max-w-[700px] bg-white">
      {submitted ? (

      // Display message confirmation on submit

        <div className="text-center flex flex-col gap-10">
          <h3 className="text-[32px] pb-6 font-sans font-light text-palette-1 border-b-[1px] border-palette-1/30">
            Thank You!
          </h3>
          <div className="flex flex-col gap-8 items-center">
            <div className="flex flex-row gap-4 mb-0 p-4 text-palette-2 justify-center items-center text-[24px] font-light">
              <AiFillCheckCircle size={50} />
              <p>Your message has been sent.</p>
            </div>
            <p className="text-palette-1">
              We appreciate your contact and will get back to you as soon as
              possible.
            </p>
            <button
              type="button"
              onClick={() => setSubmitted(false)}
              className="mt-5 opacity-50 hover:opacity-100 transition duration-300"
            >
              <BiArrowBack size={30} className="text-palette-1" />
            </button>
          </div>
        </div>
      ) : (

      // Display contact form

        <div>
          <h3 className="text-[24px] sm:text-[32px] lg:text-[28px] mb-6 pb-6 font-sans font-light text-palette-1 border-b-[1px] border-palette-1/30">We'd love to hear from you!</h3>
          <p className="text-palette-1">
            Whether you have questions, inquiries, or simply want to chat about your landscaping needs, we're here to help. Just fill out the form below, and we'll get back to you as soon as possible. We can't wait to bring your outdoor dreams to life!
          </p>

          <div className={`${!isValid && touched.name ? 'flex flex-row  gap-4 mt-6 mb-0 p-4 bg-red-100/60 border-[1px] border-pink-500 text-pink-500 rounded-lg' : 'hidden'}`}>
            <MdError size={30} />
            <p>Please fill in the required fields.</p>
          </div>

          <form
            method="POST"
            onSubmit={handleSubmit}
          >
            <div>
              <div className={`${isSubmitting && 'opacity-30'} flex flex-row flex-wrap pt-12 gap-6 gap-y-8 lg:gap-y-10 transition duration-300`}>
                <FormInput
                  id="name"
                  type="text"
                  name="name"
                  placeholder="Name"
                  value={values.name}
                  handleChange={handleChange}
                  error={errors.name}
                  touched={touched.name}
                />
                <FormInput
                  id="email"
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={values.email}
                  handleChange={handleChange}
                  error={errors.email}
                  touched={touched.email}
                />
                <FormInput
                  id="suburb"
                  type="text"
                  name="suburb"
                  placeholder="Suburb"
                  value={values.suburb}
                  handleChange={handleChange}
                  error={errors.suburb}
                  touched={touched.suburb}
                />
                <FormInput
                  id="phone"
                  type="text"
                  name="phone"
                  placeholder="Phone"
                  value={values.phone}
                  handleChange={handleChange}
                  error={errors.phone}
                  touched={touched.phone}
                />
                <FormInput
                  id="message"
                  type="textarea"
                  name="message"
                  placeholder="Message"
                  value={values.message}
                  handleChange={handleChange}
                  error={errors.message}
                  touched={touched.message}
                />
              </div>
              <button type="submit" className={`${styles.flexCenter} flex-row gap-2 font-sans bg-palette-1/90 border-[3px] border-palette-1 text-white text-xl rounded-lg mt-6 px-8 h-[60px] py-4 w-full transition duration-300 ${(!isValid && touched.name) || isSubmitting ? 'cursor-default opacity-50' : 'opacity-100 hover:bg-white hover:text-palette-2 hover:border-palette-2 active:scale-95'}`}>
                {isSubmitting ? (
                  <svg width="35" height="35" stroke="#C8E4D6" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <g>
                      <circle cx="12" cy="12" r="9.5" fill="none" strokeWidth="3" strokeLinecap="round">
                        <animate attributeName="stroke-dasharray" dur="1.5s" calcMode="spline" values="0 150;42 150;42 150;42 150" keyTimes="0;0.475;0.95;1" keySplines="0.42,0,0.58,1;0.42,0,0.58,1;0.42,0,0.58,1" repeatCount="indefinite" />
                        <animate attributeName="stroke-dashoffset" dur="1.5s" calcMode="spline" values="0;-16;-59;-59" keyTimes="0;0.475;0.95;1" keySplines="0.42,0,0.58,1;0.42,0,0.58,1;0.42,0,0.58,1" repeatCount="indefinite" />
                      </circle><animateTransform attributeName="transform" type="rotate" dur="2s" values="0 12 12;360 12 12" repeatCount="indefinite" />
                    </g>
                  </svg>
                ) : ('SUBMIT')}
              </button>

            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default ContactForm;
