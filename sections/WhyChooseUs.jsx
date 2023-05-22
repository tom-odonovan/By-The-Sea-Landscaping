'use client';

import { motion } from 'framer-motion';
import styles from '../styles';
import { TitleText, TypingText } from '../components';
import Guarantee from '../components/Guarantee';
import { staggerContainer, fadeIn } from '../utils/motion'
import { guarantee } from '../constants';


export const WhyChooseUs = () => {

  return (
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
          className={`flex-[0.6] ${styles.flexCenter}`}
        >
          <img
            src="/poolside-01.jpeg"
            alt='Poolside'
            className='object-contain'
          />
        </motion.div>
        <motion.div
          variants={fadeIn('left', 'tween', 0.2, 1)}
          className='flex-[0.75] flex justify-center items-center lg:items-start flex-col'

        >
          <TypingText title='| Our Guarantee' />
          <TitleText title={<>Why Choose Us?</>} />
          <div className='mt-[31px] flex flex-col max-w-[570px]  gap-[24px]'>
            {guarantee.map((item, index) => (
              <Guarantee
                key={index}
                title={item.title}
                text={item.text}
              />
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default WhyChooseUs;
