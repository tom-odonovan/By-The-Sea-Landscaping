'use client';

import { motion } from 'framer-motion';
import styles from '../styles';
import { navVariants } from '../utils/motion'

const Navbar = () => (
  <motion.nav
    variants={navVariants}
    initial='hidden'
    whileInView='show'
    className={`${styles.xPaddings} py-8 relative bg-palette-1/[.85] sticky top-0 z-50`}
  >
    {/* <div className='absolute w-[50%] inset-0 gradient-01' /> */}
    <div className={`max-w-[2400px] mx-auto flex justify-between gap-8 h-[60px] items-center`}>
      <img
        src='/search.svg'
        alt='search'
        className='w-[40px] h-[40px] object-contain cursor-pointer'
      />
      {/* <h2 className='font-extrabold text-[24px] leading-[30px] text-palette-1'>
        BY THE SEA LANDSCAPING
      </h2> */}
      <img
        src='/Logos/Logo-text-dark.png'
        alt='logo'
        className='h-[60px]' 
      />
      <img
        src='/menu.svg'
        alt='menu'
        className='w-[40px] h-[40px] object-contain cursor-pointer' 
      />
    </div>
  </motion.nav>
);

export default Navbar;
