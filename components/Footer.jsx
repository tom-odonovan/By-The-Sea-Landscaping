'use client';

import { motion } from 'framer-motion';
import { socials } from '../constants';
import styles from '../styles';
import { footerVariants } from '../utils/motion';

const Footer = () => (
  <footer className={`p-8 relative bg-palette-1 z-5 opacity-90`} >
    <motion.div 
      variants={footerVariants}
      initial='hidden'
      whileInView='show'
      className={`max-w-[1700px] mx-auto flex flex-col gap-8 items-center justify-between`}>
      
      <div>
        <div className='flex gap-4'>
          {socials.map(({ name, icon, href }) => (
            <a href={href}>
              <img
                key={name}
                src={icon}
                alt={name}
                className='w-[24px] h-[24px] object-contain cursor-pointer'
              />
            </a>
          ))}
        </div>
      </div>
      <div className='h-[1px] w-full bg-white opacity-50' />
      <p className='text-white text-[12px] text-center'>
        Copyright © By The Sea Landscaping 2023 | Website by 
        <a href='mailto:tom@amcco.com.au' className='font-bold px-1 cursor-pointer'>
          Tom O'Donovan
        </a>
      </p>
    </motion.div>
  </footer>
);

export default Footer;
