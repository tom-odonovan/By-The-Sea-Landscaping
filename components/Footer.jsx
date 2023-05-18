'use client';

import { motion } from 'framer-motion';
import styles from '../styles';
import { navVariants } from '../utils/motion'

const Footer = () => (
  <footer className={`${styles.xPaddings} py-8 relative bg-palette-1 z-5 opacity-90`}
  >
    {/* <div className='absolute w-[50%] inset-0 gradient-01' /> */}
    <div className={`max-w-[2400px] mx-auto flex justify-between gap-8 h-[200px] items-center`}>
      
    </div>
  </footer>
);

export default Footer;
