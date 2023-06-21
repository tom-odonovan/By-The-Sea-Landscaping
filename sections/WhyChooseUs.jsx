'use client';

import { useMediaQuery } from 'react-responsive';
import { motion } from 'framer-motion';
import styles from '../styles';
import { TitleText, TypingText, QuoteCard } from '../components';
import Guarantee from '../components/Guarantee';
import { staggerContainer, fadeIn } from '../utils/motion'
import { guarantee } from '../constants';


export const WhyChooseUs = () => {

  const isDesktop = useMediaQuery({ maxWidth: 1024 })

  return (
    <section className={`px-0 xl:px-[100px] max-w-full relative z-10 bg-palette-4 flex flex-col justify-center items-center lg:py-[100px]`} id='guarantee'>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className={`${styles.innerWidth} flex flex-col-reverse lg:flex-row lg:h-[900px]  justify-center items-center bg-white xl:rounded-lg`}
      >

        <motion.div
          variants={isDesktop ? fadeIn('up', 'tween', 0.2, 1) : fadeIn('right', 'tween', 0.2, 1)}
          className={`relative w-full lg:w-1/2 h-[600px] lg:h-full xl:rounded-l-lg overflow-hidden`}
        >
          <img
            src="/imgs/pruning.jpg"
            alt='Poolside'
            className='object-cover w-full h-full'
          />
          <QuoteCard
            text="Experience the difference of our professional service and have your garden looking its best!"
          />
        </motion.div>


        <motion.div
          variants={isDesktop ? fadeIn('up', 'tween', 0.2, 1) : fadeIn('left', 'tween', 0.2, 1)}
          className={`flex flex-col justify-center items-center lg:items-start my-[50px] mx-4 sm:mx-12 md:m-[100px] xl:my-[150px]`}

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
