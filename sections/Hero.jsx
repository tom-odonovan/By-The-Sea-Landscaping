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
      className={`${styles.innerWidth} w-full flex flex-col`}
    >
      <motion.div
        variants={fadeIn('down', 'tween', 0.2, 1)}
        className='absolute left-0 w-full '
      >
        <div />
          <img
            src='/imgs/mowing-man.jpg'
            alt='cover'
            className='absolute -top-[95px] w-[100vw] h-[1000px] object-cover brightness-75 z-[-10]'
          />

          {/* <a href='#explore'>
            <div className='w-full flex justify-end sm:-mt-[70px] -mt-[50px] pr-[40px] relative z-10'>
              <img
                src='/stamp.png'
                alt='stamp'
                className='sm:w-[155px] w-[100px] sm:h-[155px] h-[100px] object-contain'
              />
            </div>
          </a> */}
        

      </motion.div>

      <div className='absolute top-[250px] flex justify-left items-left flex-col gap-10 relative z-10'>
        <div>
          <motion.h1 variants={textVariant(1.1)} className={styles.heroHeading}>
            Transform Your
          </motion.h1>
          <motion.h1 variants={textVariant(1.4)} className={styles.heroHeading}>
            Outdoor Space.
          </motion.h1>
        </div>
        <motion.p variants={textVariant(1.7)} className={styles.heroText}>
          Quality landscaping solutions that bring life and inspiration to your garden.
        </motion.p>
        <div className='flex flex-row gap-6'>
          <motion.button variants={textVariant(2)} className={styles.heroBtn}>Learn More</motion.button>
          <motion.button variants={textVariant(2.3)} className={styles.heroBtn}>Contact Us</motion.button>
        </div>
      </div>

    </motion.div>
  </section>
);

export default Hero;
