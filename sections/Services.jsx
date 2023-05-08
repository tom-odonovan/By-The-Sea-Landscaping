'use client';


import { motion } from 'framer-motion';
import { StartSteps, TypingText, TitleText } from '../components';
import styles from '../styles';
import { staggerContainer, fadeIn, planetVariants } from '../utils/motion'
import { startingFeatures } from '../constants';


export const Services = () => (
  <section className={`${styles.paddings}  relative z-10`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: 'false', amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex lg:flex-row flex-col gap-8`}
    >
      <motion.div
        variants={planetVariants('left')}
        className={`flex-1 ${styles.flexCenter}`}
      >
        <img
          src="/get-started.png"
          alt='Get Started'
          className='w-[90%] h-[90%] object-contain'
        />
      </motion.div>
      <motion.div
        variants={fadeIn('left', 'tween', 0.2, 1)}
        className='flex-[0.75] flec justify-center flex-col'
      >
        <TypingText title='| ' />
      </motion.div>
    </motion.div>
  </section>
);

export default Services;
