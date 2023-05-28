'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { staggerContainer, fadeIn } from '../../utils/motion'
import styles from '../../styles';
import { TypingText, TitleText } from "../";
import FormInput from './FormInput';
import { IoSendSharp } from 'react-icons/io5';

const ContactForm = () => {

    const [formData, setFormData] = useState({});
    console.log(formData);

    const handleFormChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevState) => ({
            ...prevState,
            [name]: value
        }));
    }

    return (
        <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.25 }}
            className={`mx-auto flex lg:flex-col flex-col gap-[50px] items-center`}
        >

            <motion.div
                variants={fadeIn('right', 'tween', 0.2, 1)}
                className={`${styles.innerWidth} ${styles.xPaddings} mx-auto flex-[0.75] flex justify-center flex-col`}

            >
                <TypingText title='| Contact' textStyles='text-center' />
                <TitleText title={<>Get In Touch</>} textStyles='text-center' />
            </motion.div>

            <div className={`p-20 leading-8 bg-white max-w-[700px] shadow-2xl rounded-lg`}>
                <p>
                    Whether you have questions, inquiries, or simply want to chat about your landscaping needs, we're here to help. Just fill out the form below, and we'll get back to you as soon as possible. We can't wait to bring your outdoor dreams to life!
                </p>

                <form method='POST'>
                    <div className='flex flex-row flex-wrap py-12 gap-6 gap-y-10'>
                        <FormInput 
                            id='name'
                            type='text'
                            name='name'
                            placeholder="You're Name"
                            value={formData.name}
                            handleChange={handleFormChange}
                        />
                        <FormInput 
                            id='email'
                            type='email'
                            name='email'
                            placeholder="Email"
                            value={formData.email}
                            handleChange={handleFormChange}
                        />
                        <FormInput 
                            id='suburb'
                            type='text'
                            name='suburb'
                            placeholder="Suburb"
                            value={formData.suburb}
                            handleChange={handleFormChange}
                        />
                        <FormInput 
                            id='phone'
                            type='text'
                            name='phone'
                            placeholder="Phone"
                            value={formData.phone}
                            handleChange={handleFormChange}
                        />
                        <FormInput 
                            id='message'
                            type='textarea'
                            name='message'
                            placeholder="Message"
                            value={formData.message}
                            handleChange={handleFormChange}
                        />
                        <button className={`${styles.flexCenter} flex-row gap-2 mt-6 font-sans bg-palette-2 border-[2px] border-palette-2 text-white text-lg rounded-lg px-8 py-4 w-full hover:bg-white hover:text-palette-2 active:scale-95 transition duration-300`}>SEND
                            {/* <IoSendSharp className='ml-2' /> */}
                        </button>

                    </div>
                </form>
            </div>

            

        </motion.div>
    );
};

export default ContactForm;