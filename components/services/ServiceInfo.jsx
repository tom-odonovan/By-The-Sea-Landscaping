'use client';

import { motion } from 'framer-motion';
import { fadeIn } from '../../utils/motion';
import styles from '../../styles';
import ContactCard from './ContactCard';

const ServiceInfo = ({ active }) => (
  <div className="relative z-1 flex flex-col lg:flex-row w-[100vw] h-full lg:h-[600px]">
    <div className={`${styles.paddings} bg-white bg-hero-pattern w-full lg:w-2/3 flex items-center justify-center lg:justify-end`}>
      <motion.div
        variants={fadeIn('up', 'tween', 0.1, 1)}
      >
        <div className="w-fit flex flex-col my-8 py-4 px-0 sm:px-16 lg:pr-[100px] sm:border-l-[1px] border-palette-2">
          <div className="flex flex-row items-center w-full max-w-[600px]">
            <img
              src={active.icon.img}
              alt={active.icon.alt}
              className="w-[70px] h-[70px] object-contain"
            />
            <div className="flex flex-col ml-4">
              <h4 className="font-bold text-palette-2">{active.subtitle}</h4>
              <h3 className="font-bold text-[28px]">{active.title}</h3>
            </div>
          </div>
          {active.text.split('\n').map((p, index) => (
            <p className="mt-8 max-w-[600px] text-[16px] leading-7" key={index}>{p}</p>
          ))}
        </div>
      </motion.div>
    </div>
    <div className="relative w-full lg:w-1/3 h-[600px] lg:h-full">
      <img
        src={active.img}
        alt={active.alt}
        className="object-cover w-full h-full"
      />
      <ContactCard />
    </div>
  </div>
);

export default ServiceInfo;
