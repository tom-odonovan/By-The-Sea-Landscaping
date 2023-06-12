'use client';

import { motion } from 'framer-motion';
import styles from '../styles';
import { TitleText, TypingText } from '../components';
import Guarantee from '../components/Guarantee';
import { staggerContainer, fadeIn } from '../utils/motion'
import { guarantee } from '../constants';


export const WhyChooseUs = () => {

  return (
    <section className={`px-0 xl:px-[100px] relative z-10 bg-palette-4 flex flex-col justify-center items-center py-[100px]`} id='guarantee'>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth} flex flex-col-reverse lg:flex-row lg:h-[900px]  justify-center items-center bg-white bg-hero-pattern xl:rounded-lg`}
      >

        <motion.div
          variants={fadeIn('right', 'tween', 0.2, 1)}
          className={`w-full lg:w-1/2 h-[600px] lg:h-full xl:rounded-l-lg overflow-hidden`}
        >
          <img
            src="/imgs/poolside-01.jpeg"
            alt='Poolside'
            className='object-cover w-full h-full'
          />
        </motion.div>


        <motion.div
          variants={fadeIn('left', 'tween', 0.2, 1)}
          className={`flex flex-col justify-center items-center lg:items-start py-[50px] px-8 md:p-[100px] xl:py-[150px]`}

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
