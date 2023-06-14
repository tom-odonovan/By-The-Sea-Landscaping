'use client';


import { motion } from 'framer-motion';
import { staggerContainer, fadeIn } from '../utils/motion'
import styles from '../styles';
import { TypingText, TitleText } from "../components";
import ContactForm from "../components/contact/ContactForm";
import ContactDetails from "../components/contact/ContactDetails";

const GetInTouch = () => (
    <section className='flex flex-col items-center bg-palette-4 py-[100px] pb-[200px]' id='contact'>
        <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.25 }}
            className={`mx-auto flex lg:flex-col flex-col items-center`}
        >
            <TypingText title='| Contact' textStyles='text-center' />
            <TitleText title={<>Get In Touch</>} textStyles='text-center mb-[50px]' />
        </motion.div>
        <div className={`flex w-fit lg:w-[1200px] lg:max-h-[90vh] max-w-[95vw] bg-palette-1 flex-col lg:flex-row shadow-2xl rounded-lg overflow-hidden`}>
            <ContactDetails />
            <ContactForm />
        </div>
    </section>
);

export default GetInTouch;