'use client';

import { motion } from 'framer-motion';
import styles from '../styles';
import { fadeIn, staggerContainer, textVariant } from '../utils/motion'

const Hero = () => (
  <section className={`sm:pl-16 pl-6`}>
    <motion.div
      variants={staggerContainer}
      initial='hidden'
      whileInView='show'
      viewport={{ once: true, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex flex-col`}
    >
      <motion.div
        variants={fadeIn('down', 'tween', 0.2, 1)}
        className='absolute top-[194px] left-0 w-full '
      >
        <div />
          <img
            src='/cover-01.jpeg'
            alt='cover'
            className='absolute w-[100vw] h-[1000px] object-cover brightness-75 z-[-10]'
          />

          <a href='#explore'>
            <div className='w-full flex justify-end sm:-mt-[70px] -mt-[50px] pr-[40px] relative z-10'>
              <img
                src='/stamp.png'
                alt='stamp'
                className='sm:w-[155px] w-[100px] sm:h-[155px] h-[100px] object-contain'
              />
            </div>
          </a>
        

      </motion.div>

      <div className='absolute top-[150px] flex justify-left items-left flex-col relative z-10'>
        <motion.h1 variants={textVariant(1.1)} className={styles.heroHeading}>
          By The Sea
        </motion.h1>
        <motion.h1 variants={textVariant(1.3)} className={styles.heroHeading}>
          Landscaping
        </motion.h1>
      </div>

    </motion.div>
  </section>
);

export default Hero;
