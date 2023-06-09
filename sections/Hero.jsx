'use client';

import { motion } from 'framer-motion';
import styles from '../styles';
import { fadeIn, staggerContainer, textVariant } from '../utils/motion'

const Hero = () => (
  <section className={`sm:pl-16 pl-6 w-screen`}>
    <motion.div
      variants={staggerContainer}
      initial='hidden'
      whileInView='show'
      viewport={{ once: true, amount: 0.25 }}
      className={`2xl:max-w-[1450px] w-full min-h-screen mx-auto flex flex-col justify-center`}
    >
      <motion.div
        variants={fadeIn('down', 'tween', 0.2, 1)}
        className='absolute inset-0 w-full bg-hero-cover bg-black/30 bg-blend-multiply bg-cover bg-center min-h-screen'>
      </motion.div>

      <div className='flex flex-col justify-end items-left gap-10 relative z-10'>
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
          <motion.button variants={textVariant(1)} className={styles.heroBtn}>Learn More</motion.button>
          <motion.button variants={textVariant(1.2)} className={styles.heroBtn}>Contact Us</motion.button>
        </div>
      </div>

    </motion.div>
  </section>
);

export default Hero;
