import { useState } from 'react';
import { motion } from 'framer-motion';
import { ExploreCard, TypingText, TitleText } from '../components';
import styles from '../styles';
import { staggerContainer } from '../utils/motion'
import { latestProjects } from '../constants';


const Explore = () => {

  const [active, setActive] = useState('project-3')

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
        <div className='mt-[70px] flex lg:flex-row flex-col h-full min-h-[1000px] max-h-[1000px] lg:h-[70vh] lg:min-h-[450px] gap-2 xl:gap-4'>
          {latestProjects.map((project, index) => (
            <ExploreCard
              key={project.id}
              {...project}
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
