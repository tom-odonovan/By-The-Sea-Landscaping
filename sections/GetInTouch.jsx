import { motion } from 'framer-motion';
import { staggerContainer, fadeIn } from '../utils/motion'
import styles from '../styles';
import { TypingText, TitleText, ContactDetails, ContactForm } from "../components";

const GetInTouch = () => (
    <section className='flex flex-col items-center bg-palette-5 sm:bg-palette-4 pt-[100px] md:pb-[200px]' id='contact'>
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
        <div className={`flex w-fit lg:max-w-[1200px] bg-palette-1 flex-col lg:flex-row shadow-2xl sm:rounded-lg overflow-hidden`}>
            <ContactDetails />
            <ContactForm />
        </div>
    </section>
);

export default GetInTouch;