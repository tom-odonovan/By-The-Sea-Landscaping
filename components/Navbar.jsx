'use client';

import { motion } from 'framer-motion';
import styles from '../styles';
import { navVariants } from '../utils/motion'
import { navbar } from '../constants';

const Navbar = () => (
  <motion.nav
    variants={navVariants}
    initial='hidden'
    whileInView='show'
    className={`px-12 py-8 relative bg-palette-1/[.85] sticky top-0 z-50`}
  >
    {/* <div className='absolute w-[50%] inset-0 gradient-01' /> */}
    <div className={`max-w-[1700px] mx-auto flex justify-between gap-8 h-[30px] items-center`}>
      <img
        src='/Logos/Logo-text-dark.png'
        alt='logo'
        className='h-[40px]' 
      />
      <nav className='hidden lg:flex'>
        <ul className='flex flex-row gap-8 xl:gap-12'>
          {navbar.map(({ name, url }) => (
            <li className='text-white text-[12px] sm:text-[14px] font-bold'>
              <a 
                href={url}
                className='relative py-8 transition duration-300 cursor-pointer font-bold text-[14px] xl:text-[18px] font-sans group'  
              >{name}
                <div className='absolute bottom-7 left-1/2 transform -translate-x-1/2 w-0 h-[1px] bg-white transition-all duration-300 group-hover:w-full'></div>
              </a>
            </li>
          ))} 
        </ul>
      </nav>
      <div className='flex flex-row gap-12 items-center'>
        <button className='hidden md:flex font-bold text-white text-[12px] sm:text-[14px] px-8 py-4 border-[1px] border-white rounded-full hover:bg-white hover:text-palette-1/[.85] transition duration-300'>GET A FREE QUOTE</button>
        <img
          src='/menu.svg'
          alt='menu'
          className='lg:hidden w-[30px] h-[30px] object-contain cursor-pointer'
        />
      </div>
    </div>
  </motion.nav>
);

export default Navbar;
