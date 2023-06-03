'use client';

import { useState } from 'react';
import styles from '../../styles';
import FormInput from './FormInput';
import { IoSendSharp } from 'react-icons/io5';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const ContactForm = () => {

    const [formData, setFormData] = useState({});

    const handleFormChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevState) => ({
            ...prevState,
            [name]: value
        }));
    }

    const { values, errors, touched, handleBlur, handleChange, handleSubmit } = useFormik({
        initialValues: {
            name: '',
            email: '',
            suburb: '',
            phone: '',
            message: '',
        },
        onSubmit: (values, actions) => {
            console.log(values)
            actions.resetForm()
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
        <div className={`p-20 leading-8 bg-white max-w-[700px] shadow-2xl rounded-lg`}>
            <h3 className='text-[26px] mb-6 pb-6 font-sans text-palette-3 border-b-[1px] border-palette-1/30'>We'd love to hear from you!</h3>
            <p>
                Whether you have questions, inquiries, or simply want to chat about your landscaping needs, we're here to help. Just fill out the form below, and we'll get back to you as soon as possible. We can't wait to bring your outdoor dreams to life!
            </p>

            <form method='POST' onSubmit={handleSubmit}>
                <div className='flex flex-row flex-wrap pt-12 gap-6 gap-y-10'>
                    <FormInput
                        id='name'
                        type='text'
                        name='name'
                        placeholder={`${errors.name && touched.name ? errors.name : "Your name"}`}
                        value={values.name}
                        handleChange={handleChange}
                        error={errors.name}
                        touched={touched.name}
                    />
                    <FormInput
                        id='email'
                        type='email'
                        name='email'
                        placeholder={`${errors.email && touched.email ? errors.email : "Your email"}`}
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
                    <button type='submit' className={`${styles.flexCenter} flex-row gap-2 font-sans bg-palette-2 border-[2px] border-palette-2 text-white text-lg rounded-lg px-8 py-4 w-full hover:bg-white hover:text-palette-2 active:scale-95 transition duration-300`}>SEND
                        {/* <IoSendSharp className='ml-2' /> */}
                    </button>

                </div>
            </form>
        </div>
    );
};

export default ContactForm;