'use client';


import { motion } from 'framer-motion';
import { staggerContainer, fadeIn } from '../utils/motion'
import styles from '../styles';
import { TypingText, TitleText } from "../components";
import ContactForm from "../components/contact/ContactForm";
import ContactDetails from "../components/contact/ContactDetails";

const GetInTouch = () => (
    <section>
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
                <TitleText title={<>Get In Touch</>} textStyles='text-center mb-[50px]' />
            </motion.div>
        </motion.div>
        <div className={`${styles.flexCenter} flex-row gap-12`}>
            {/* <ContactDetails /> */}
            <ContactForm />
        </div>
    </section>
);

export default GetInTouch;