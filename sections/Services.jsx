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

    <section className={`relative z-10`}>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`mx-auto flex lg:flex-col flex-col gap-[50px]`}
      >
        
        <motion.div
          variants={fadeIn('right', 'tween', 0.2, 1)}
          className={`${styles.innerWidth} ${styles.xPaddings} mx-auto flex-[0.75] flex justify-center flex-col`}

        >
          <TypingText title='| Our Services' />
          <TitleText title={<>What We Offer</>} />
        </motion.div>

        <div className={`${styles.flexCenter} flex flex-row gap-[10px] flex-wrap`}>
          {services.map((item, index) => (
            <ServicesCard 
              key={index}
              {...item}
              active={active}
              handleClick={setActive}
            />
          ))}
        </div>

        <div className='relative -top-[100px] -z-10 flex flex-row w-[100vw] max-h-[600px]'>
          <div className={`${styles.flexCenter} bg-white w-2/3`}>
            <h3 className='font-bold text-[24px]'>{active}</h3>
            <p></p>
          </div>
          <img
            src="/poolside-01.jpeg"
            alt='Poolside'
            className='w-1/3 object-cover'
          />
        </div>
        <div className={`${styles.flexCenter} px-8 absolute top-[450px] right-[400px] w-[300px] h-[350px] bg-palette-2 rounded text-white flex flex-col gap-5 text-center`}>
            <img
              src='/icons/leaf-icon.svg'
              alt='Leaf Icon'
              className='w-[70px] h-[70px] object-contain'
            />
            <h3 className='text-[28px] font-sans-bold'>Let's Get Started!</h3>
            <p>Get in touch today for a free quote and consoltation</p>
            <button className='font-bold border-[1px] border-white my-4 px-6 py-2 rounded-lg hover:bg-white hover:text-palette-2 transition duration-300'>CONTACT US</button>
        </div>
        
      </motion.div>
    </section>
  )
};

export default Services;
