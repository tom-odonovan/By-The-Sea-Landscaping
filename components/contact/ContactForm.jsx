'use client';

import styles from '../../styles';
import FormInput from './FormInput';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { sendContactForm } from '../../lib/api';

const ContactForm = () => {

    const { values, errors, touched, isSubmitting, isValid, handleBlur, handleChange, handleSubmit } = useFormik({
        initialValues: {
            name: '',
            email: '',
            suburb: '',
            phone: '',
            message: '',
        },
        onSubmit: async (values, actions) => {
            actions.setSubmitting(true)
            
            try {
                await sendContactForm(values);
                await new Promise((resolve) => {
                    setTimeout(() => {
                        actions.setSubmitting(false);
                        actions.resetForm()
                        resolve()
                    }, 1500)
                })
            } catch (error) {
                console.error('An error has occured', error)
            }
        },
        validationSchema: Yup.object({
            name: Yup
                .string()
                .required('Please enter your name'),
            email: Yup
                .string()
                .email('Please enter a vaild email')
                .required('Please enter your email'),
        })
    })

    return (
        <div className={`p-20 leading-8 bg-white border-[1px] border-palette-1/20 max-w-[700px] shadow-2xl rounded-lg`}>
            <h3 className='text-[26px] mb-6 pb-6 font-sans font-light text-palette-2 border-b-[1px] border-palette-1/30'>We'd love to hear from you!</h3>
            <p>
                Whether you have questions, inquiries, or simply want to chat about your landscaping needs, we're here to help. Just fill out the form below, and we'll get back to you as soon as possible. We can't wait to bring your outdoor dreams to life!
            </p>

            <form method='POST' onSubmit={handleSubmit}>
                <div>
                    <div className={`${isSubmitting && 'opacity-30'} flex flex-row flex-wrap pt-12 gap-6 gap-y-10 transition duration-300`}>
                        <FormInput
                            id='name'
                            type='text'
                            name='name'
                            placeholder={`${errors.name && touched.name ? errors.name : "Name"}`}
                            value={values.name}
                            handleChange={handleChange}
                            error={errors.name}
                            touched={touched.name}
                        />
                        <FormInput
                            id='email'
                            type='email'
                            name='email'
                            placeholder={`${errors.email && touched.email ? errors.email : "Email"}`}
                            value={values.email}
                            handleChange={handleChange}
                            error={errors.email}
                            touched={touched.email}
                        />
                        <FormInput
                            id='suburb'
                            type='text'
                            name='suburb'
                            placeholder="Suburb"
                            value={values.suburb}
                            handleChange={handleChange}
                        />
                        <FormInput
                            id='phone'
                            type='text'
                            name='phone'
                            placeholder="Phone"
                            value={values.phone}
                            handleChange={handleChange}
                        />
                        <FormInput
                            id='message'
                            type='textarea'
                            name='message'
                            placeholder="Message"
                            value={values.message}
                            handleChange={handleChange}
                        />
                    </div>
                    <button type='submit' className={`${styles.flexCenter} flex-row gap-2 font-sans bg-palette-2 border-[2px] border-palette-2 text-white text-lg rounded-lg mt-6 px-8 h-[60px] py-4 w-full transition duration-300 ${!isValid ? 'opacity-50 cursor-default' : 'hover:bg-white hover:text-palette-2 active:scale-95'}`}>
                        { isSubmitting ? (
                            <svg width="35" height="35" stroke="#C8E4D6" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <g>
                                    <circle cx="12" cy="12" r="9.5" fill="none" strokeWidth="3" strokeLinecap="round">
                                        <animate attributeName="stroke-dasharray" dur="1.5s" calcMode="spline" values="0 150;42 150;42 150;42 150" keyTimes="0;0.475;0.95;1" keySplines="0.42,0,0.58,1;0.42,0,0.58,1;0.42,0,0.58,1" repeatCount="indefinite" />
                                        <animate attributeName="stroke-dashoffset" dur="1.5s" calcMode="spline" values="0;-16;-59;-59" keyTimes="0;0.475;0.95;1" keySplines="0.42,0,0.58,1;0.42,0,0.58,1;0.42,0,0.58,1" repeatCount="indefinite" />
                                    </circle><animateTransform attributeName="transform" type="rotate" dur="2s" values="0 12 12;360 12 12" repeatCount="indefinite" />
                                </g>
                            </svg>
                        ) : ( 'SUBMIT' )}
                    </button>

                </div>
            </form>
        </div>
    );
};

export default ContactForm;