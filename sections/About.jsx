'use client';

import { motion } from 'framer-motion';
import { TypingText, TitleText } from '../components';
import styles from '../styles';
import { fadeIn, staggerContainer } from '../utils/motion'

const About = () => (
  <section className={`${styles.paddings} relative z-10 bg-hero-pattern min-h-[90vh] flex flex-col justify-center`} id='about'>
    <motion.div
      variants={staggerContainer}
      initial='hidden'
      whileInView='show'
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col`}
    >
      <TypingText title='| About Us' textStyles='text-center' />
      <TitleText title={<>Who We Are</>} />

      <div className='flex flex-col-reverse lg:flex-row gap-8 lg:gap-20 mt-[50px]'>
        <motion.div
          variants={fadeIn('up', 'tween', 0.1, 1)}
        >
          <img
            src='/imgs/hedge-trimming-2.jpg'
            alt='2 men trimming hedges'
            className='w-screen lg:w-[500px] min-h-[600px] h-full object-cover object-center'
          />
        </motion.div>

        <motion.div
          variants={fadeIn('up', 'tween', 0.2, 1)}
          className='flex flex-col justify-center items-center gap-8 mt-[50px] w-screen lg:w-[600px]'
        >
          <p className={`px-[50px] font-normal md:text-[16px] sm:text-[14px] text-[12px]`}>
            Welcome to <span className='font-extrabold'>By The Sea Landscaping</span>
            , located on Sydney's Northern Beaches. We take pride in offering a comprehensive range of lawn care and garden maintenance services to suit any need. Our experienced team of professionals is dedicated to delivering exceptional results that exceed your expectations. From mowing and edging to complete garden make-overs, we’ve got you covered.
          </p>

          <p className={`px-[50px] font-normal md:text-[16px] sm:text-[14px] text-[12px]`}>
            We understand that every project is unique, and will work closely with you to ensure that we deliver tailored solutions that meet your specific needs. We use only the latest equipment and techniques to ensure that your lawn and garden look their best all year round.
          </p>

          <p className={`px-[50px] font-normal md:text-[16px] sm:text-[14px] text-[12px]`}>
            So, whether you need regular maintenance or a one-off landscaping project, we are here to help. Get in touch today for your <span className='font-extrabold'>free quote</span>, and let us show you why we are the landscaping business of choice for so many on Sydney's Northern Beaches.
          </p>
        </motion.div>
      </div>

      <motion.img
        variants={fadeIn('up', 'tween', 0.3, 1)}
        src='/icons/arrow-down.svg'
        alt='arrow-down'
        className='hidden lg:flex w-[18px] h-[28px] object-contain mt-[50px]'
      />
    </motion.div>
  </section>
);

export default About;
