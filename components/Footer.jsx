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
          {socials.map(({ name, icon, href }) => {
            const SocialIcon = icon;

            return (
              <a href={href}>
                <div className={`${styles.flexCenter} w-[40px] h-[40px] rounded-full bg-palette-1 border-[1px] border-white cursor-pointer hover:bg-white opacity-80 transition duration-300 group`}>
                  <SocialIcon size={20} className='text-white group-hover:text-palette-1'/>
                </div>
              </a>
            )
          })}
        </div>
      </div>
      <div className='h-[1px] w-full bg-white opacity-50' />
      <p className='text-white text-[12px] text-center'>
        © By The Sea Landscaping | Website by 
        <a href='mailto:tom@amcco.com.au' className='font-bold px-1 cursor-pointer'>
          Tom O'Donovan
        </a>
      </p>
    </motion.div>
  </footer>
);

export default Footer;
