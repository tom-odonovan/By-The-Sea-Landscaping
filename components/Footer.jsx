'use client';

import { motion } from 'framer-motion';
import { socials } from '../constants';
import styles from '../styles';
import { footerVariants } from '../utils/motion';

const Footer = () => (
  <footer className={`py-8 relative bg-palette-1 z-5 opacity-90`} >
    <motion.div 
      variants={footerVariants}
      initial='hidden'
      whileInView='show'
      className={`max-w-[1700px] mx-auto flex flex-col gap-8 items-center justify-between`}>
      
      <div>
        <div className='flex gap-4'>
          {socials.map(({ name, url }) => (
            <img
              key={name}
              src={url}
              alt={name}
              className='w-[24px] h-[24px] object-contain cursor-pointer'
            />
          ))}
        </div>
      </div>
      <p className='text-white text-[12px]'>Copyright © By The Sea Landscaping 2023 | Website by <b>Tom O'Donovan</b></p>
    </motion.div>
  </footer>
);

export default Footer;
