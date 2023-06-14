'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import styles from '../styles';
import { TitleText, TypingText, ServicesCard, ServiceInfo } from '../components';
import { staggerContainer, fadeIn } from '../utils/motion'
import { services } from '../constants';


const Services = () => {

  const [active, setActive] = useState(services[0])

  return (

    <section className={`relative z-10 bg-palette-4 min-h-[1100px] flex flex-col justify-center`} id='services'>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`mx-auto flex flex-col items-center`}
      >
        
        <div className='flex flex-col gap-4 relative -top-2 lg:top-10'>
          <motion.div
            variants={fadeIn('right', 'tween', 0.2, 1)}
            className={`${styles.innerWidth} ${styles.xPaddings} mx-auto pt-[50px] flex-[0.75] flex justify-between flex-col`}

          >
            <TypingText title='| Our Services' />
            <TitleText title={<>What We Offer</>} />
          </motion.div>

          <div className={`${styles.flexCenter} flex flex-row gap-2 sm:gap-4 flex-wrap w-full md:w-[600px] min-[1100px]:w-[1200px] z-10`}>
            {services.map((item, index) => (
              <ServicesCard
                key={index}
                index={index}
                service={item}
                active={active}
                handleClick={setActive}
              />
            ))}
          </div>
        </div>
      
        <ServiceInfo active={active} />
        
      </motion.div>
    </section>
  )
};

export default Services;
