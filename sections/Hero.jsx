'use client';

import { useMediaQuery } from 'react-responsive';
import { motion } from 'framer-motion';
import styles from '../styles';
import { fadeIn, staggerContainer, textVariant } from '../utils/motion'
import { Link } from 'react-scroll';
import { heroBtns } from '../constants';

const Hero = () => {
  const isDesktop = useMediaQuery({ minWidth: 1024 });

  return (
    <section className={`relative sm:pl-16 pl-6 w-full`} id='home'>
      <motion.div
        variants={staggerContainer}
        initial='hidden'
        whileInView='show'
        viewport={{ once: true, amount: 0.25 }}
        className="2xl:max-w-[1450px] w-full min-h-screen mx-auto flex flex-col justify-end short:justify-center"
      >
        <div className='absolute inset-0 w-full min-h-screen bg-hero-cover bg-black/30 bg-blend-multiply bg-cover bg-center'>
        </div>

        <div className='flex flex-col items-left justify-end gap-10 pb-[200px] relative z-10 short:gap-6 short:pb-0'>
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
          <motion.div variants={textVariant(2)} className='flex flex-col small-mobile:flex-row gap-2 mobile:gap-6'>
            {heroBtns.map(({name, path}, i) => (
              <Link
                activeClass='active'
                to={path}
                spy={true}
                smooth={true}
                offset={path === 'contact' && !isDesktop ? 600 : isDesktop ? 0 : -90}
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
};

export default Hero;
