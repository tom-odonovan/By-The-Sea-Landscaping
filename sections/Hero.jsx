'use client';

import { motion } from 'framer-motion';
import styles from '../styles';
import { fadeIn, staggerContainer, textVariant } from '../utils/motion'
import { Link } from 'react-scroll';
import { heroBtns } from '../constants';

const Hero = () => (
  <section className={`relative -top-[95px] sm:pl-16 pl-6 w-full`} id='home'>
    <motion.div
      variants={staggerContainer}
      initial='hidden'
      whileInView='show'
      viewport={{ once: true, amount: 0.25 }}
      className={`2xl:max-w-[1450px] w-full min-h-screen mx-auto flex flex-col justify-end`}
    >
      <motion.div
        variants={fadeIn('down', 'tween', 0.2, 1)}
        className='absolute left-0 w-full bg-hero-cover bg-black/30 bg-blend-multiply bg-cover bg-center min-h-screen'>
      </motion.div>

      <div className='flex flex-col justify-end items-left gap-10 pb-[200px] relative z-10'>
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
        <motion.div variants={textVariant(2)} className='flex flex-row gap-6'>
          {heroBtns.map(({name, path}, i) => (
            <Link
              activeClass='active'
              to={path}
              spy={true}
              smooth={true}
              offset={path === 'contact' ? 0 : -150}
              duration={300}
              key={name}
            >
              <button className={styles.heroBtn}>{name}</button>
            </Link>
          ))}
        </motion.div>
      </div>

    </motion.div>
  </section>
);

export default Hero;
