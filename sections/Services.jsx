'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import styles from '../styles';
import { TitleText, TypingText } from '../components';
import ServicesCard from '../components/ServicesCard';
import { staggerContainer, fadeIn } from '../utils/motion'
import { services } from '../constants';


const Services = () => {

  const [active, setActive] = useState('Landscaping Services')

  return (

    <section className={`${styles.paddings}  relative z-10`}>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto flex lg:flex-col flex-col gap-[50px]`}
      >
        
        <motion.div
          variants={fadeIn('right', 'tween', 0.2, 1)}
          className='flex-[0.75] flex justify-center flex-col'

        >
          <TypingText title='| Our Services' />
          <TitleText title={<>What We Offer</>} />
        </motion.div>

        <div className={`${styles.flexCenter} flex flex-row gap-[10px] sm:flex-wrap`}>
          {services.map((item, index) => (
            <ServicesCard 
              key={index}
              {...item}
              active={active}
              handleClick={setActive}
            />
          ))}
          
        </div>
        
      </motion.div>
    </section>
  )
};

export default Services;
