'use client';

import { useMediaQuery } from 'react-responsive';
import { motion } from 'framer-motion';
import { TypingText, TitleText } from '../components';
import styles from '../styles';
import { fadeIn, staggerContainer } from '../utils/motion'

const About = () => {

  const isDesktop = useMediaQuery({ minWidth: 1024 })

  return (
    <section className={`p-0 lg:p-[100px] relative z-10 min-h-[1100px] flex flex-col justify-end lg:justify-center`} id='about'>
      <motion.div
        variants={staggerContainer}
        initial='hidden'
        whileInView='show'
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col gap-12`}
      >
        <div className='flex flex-col-reverse lg:flex-row gap-8 lg:gap-40 mt-[50px] w-fit h-fit'>
          <motion.div
            variants={isDesktop ? fadeIn('right', 'tween', 0.1, 1) : fadeIn('up', 'tween', 0.1, 1)}
            className='relative z-50'
          >
            <img
              src='/imgs/hedge-trimming-2.jpg'
              alt='2 men trimming hedges'
              className='relative w-full lg:max-w-[400px] xl:max-w-[500px] min-h-[600px] h-full object-cover object-cover z-40 lg:rounded-lg shadow-xl'
            />
            <div className='hidden lg:block'>
              <div className='absolute -top-[50px] -left-[50px] h-full w-full bg-palette-1 shadow-2xl z-0' />
              <div className='absolute -bottom-4 -right-4 h-full w-full bg-palette-5 z-20' />
              <div className='absolute -bottom-[50px] -right-[50px] h-full w-full border-4 border-palette-1 z-10' />
            </div>
          </motion.div>

          <motion.div
            variants={isDesktop ? fadeIn('left', 'tween', 0.2, 1) : fadeIn('up', 'tween', 0.2, 1)}
            className='px-6 lg:px-0 lg:py-12 flex flex-col justify-center items-start gap-12 lg:mt-[50px] flex-1'
          >
            <motion.div
              variants={fadeIn('left', 'tween', 0.2, 1)}
              className='flex flex-col items-start'
            >
              <TypingText title='| About Us' textStyles='text-center' />
              <TitleText title={<>Who We Are</>} />
            </motion.div>

            <div className='flex flex-col gap-8'>
              <p className={`font-normal text-[16px] leading-7`}>
                Welcome to <span className=''>By The Sea Landscaping</span>
                , right here on Sydney's Northern Beaches. We take pride in offering a comprehensive range of lawn care and garden maintenance services to suit any need. Our experienced team of professionals is dedicated to delivering exceptional results that exceed your expectations. From mowing and edging to complete garden make-overs, we’ve got you covered.
              </p>

              <p className={`font-normal text-[16px] leading-7`}>
                We understand that every project is unique, and will work closely with you to ensure that we deliver tailored solutions that meet your specific needs. We use only the latest equipment and techniques to ensure that your lawn and garden look their best all year round.
              </p>

              <p className={`font-normal text-[16px] leading-7`}>
                So, whether you're seeking regular maintenance or a one-off landscaping project, we are here to help. Get in touch today for your <span className='font-extrabold'>free quote</span>, and let us show you why we are the landscaping business of choice for so many on Sydney's Northern Beaches.
              </p>
            </div>

            <button className={`${styles.heroBtn} bg-palette-1 hover:border-palette-1`}>Learn More</button>

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
};

export default About;
