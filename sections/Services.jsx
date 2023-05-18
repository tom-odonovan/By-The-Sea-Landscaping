'use client';

import { motion } from 'framer-motion';
import styles from '../styles';
import { TitleText, TypingText } from '../components';
import ServicesComp from '../components/ServicesComp';
import { staggerContainer, fadeIn } from '../utils/motion'
import { services } from '../constants';


const Services = () => (
  <section className={`${styles.paddings}  relative z-10`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex lg:flex-row flex-col gap-[200px]`}
    >
      
      <motion.div
        variants={fadeIn('right', 'tween', 0.2, 1)}
        className='flex-[0.75] flex justify-center flex-col'

      >
        <TypingText title='| Services' />
        <TitleText title={<>What We Offer</>} />
        <div className='mt-[31px] flex flex-col max-w-[570px]  gap-[24px]'>
          {services.map((item, index) => (
            <ServicesComp
              key={index}
              item={item}
            />
          ))}
        </div>
      </motion.div>
      <motion.div
        variants={fadeIn('left', 'tween', 0.2, 1)}
        className={`flex-[0.6] ${styles.flexCenter}`}
      >
        <img
          src="/services.jpeg"
          alt='Garden image'
          className='object-contain'
        />
      </motion.div>
    </motion.div>
  </section>
);

export default Services;
