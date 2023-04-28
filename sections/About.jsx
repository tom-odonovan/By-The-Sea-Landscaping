'use client';

import { motion } from 'framer-motion';
import { TypingText } from '../components';
import styles from '../styles';
import { fadeIn, staggerContainer } from '../utils/motion'

const About = () => (
  <section className={`${styles.padding} relative z-10`}>
    <div className='gradient-02 z-0' />
    <motion.div
      variants={staggerContainer}
      initial='hidden'
      whileInView='show'
      viewport={{ once: false, amount: 0.25}}
      className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col`}
    >
      <TypingText title='| About Us' textStyles='text-center' />

      <motion.p
        variants={fadeIn('up', 'tween', 0.2, 1)}
        className='mt-[50px] px-[50px] font-normal sm:text-[32px] text-[20px] text-center text-slate-400'
      >
        Welcome to <span className='font-extrabold text-slate-500'>By The Sea Landscaping</span>
        , located on Sydney's Northern Beaches. We take pride in offering a comprehensive range of lawn care and garden maintenance services to suit any need. Our experienced team of professionals is dedicated to delivering exceptional results that exceed your expectations. Whether you need lawn mowing and edging or complete garden make-overs we’ve got you covered.
      </motion.p>

      <motion.p
        variants={fadeIn('up', 'tween', 0.2, 1)}
        className='mt-[50px] px-[50px] font-normal sm:text-[32px] text-[20px] text-center text-slate-400'
      >
        We understand that every project is unique, and will work closely with you to ensure that we deliver tailored solutions that meet your specific needs. We use only the latest equipment and techniques to ensure that your lawn and garden look their best all year round.
      </motion.p>

      <motion.p
        variants={fadeIn('up', 'tween', 0.2, 1)}
        className='mt-[50px] px-[50px] font-normal sm:text-[32px] text-[20px] text-center text-slate-400'
      >
        So, whether you need regular maintenance or a one-off landscaping project, we are here to help. Get in touch today for your <span className='font-extrabold text-slate-500'>free quote</span>, and let us show you why we are the landscaping business of choice for so many in Sydney's Northern Beaches.
      </motion.p>

      <motion.img
        variants={fadeIn('up', 'tween', 0.3, 1)}
        src='/arrow-down.svg'
        alt='arrow-down'
        className='w-[18px] h-[28px] object-contain mt-[50px]'
      />
    </motion.div>
  </section>
);

export default About;
