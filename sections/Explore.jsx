'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { ExploreCard, TypingText, TitleText } from '../components';
import styles from '../styles';
import { staggerContainer } from '../utils/motion'
import { latestProjects } from '../constants';


const Explore = () => {

  const [active, setActive] = useState('world-2')

  return (
    <section className={`${styles.paddings}`} id='explore'>
      <motion.div
        variants={staggerContainer}
        initial='hidden'
        whileInView='show'
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto flex flex-col`}
      >
        <TypingText title='| Explore' textStyles='text-center' />
        <TitleText title='Latest Projects' textStyles='text-center' />
        <div className='mt-[50px] flex lg:flex-row flex-col min-h-[70vh] gap-5'>
          {latestProjects.map((world, index) => (
            <ExploreCard
              key={world.id}
              {...world}
              index={index}
              active={active}
              handleClick={setActive}
            />
          ))}

        </div>
      </motion.div>
    </section>
  );
};

export default Explore;

