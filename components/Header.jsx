'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import styles from '../styles';
import SideBar from './SideBar';
import { navVariants } from '../utils/motion'
import { navbar } from '../constants';

const Header = () => {

  const [active, setActive] = useState(false)
  console.log(active)

  return (
    <motion.nav
      variants={navVariants}
      initial='hidden'
      whileInView='show'
      className={`p-8 relative bg-palette-1/[.85] sticky top-0 z-20`}
    >
      <div className={`max-w-[1700px] mx-auto flex justify-between gap-8 h-[30px] items-center`}>
        <img
          src='/Logos/Logo-text-dark.png'
          alt='logo'
          className='h-[40px]'
        />
        <div className='flex flex-row items-center gap-12'>
          <nav className='hidden lg:flex'>
            <ul className='flex flex-row gap-8 xl:gap-12'>
              {navbar.map(({ name, url }) => (
                <li key={name} className='text-white text-[12px] sm:text-[14px] font-bold'>
                  <a
                    href={url}
                    className='relative py-8 transition duration-300 cursor-pointer font-bold text-[15px] xl:text-[18px] font-sans group opacity-50 hover:opacity-100'
                  >{name}
                    <div className='absolute bottom-7 left-1/2 transform -translate-x-1/2 w-0 h-[2px] bg-white transition-all duration-300 group-hover:w-full'></div>
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <div className='flex flex-row gap-12 items-center'>
            {
              active ? ('') : (
                <button className='hidden md:flex font-bold text-white text-[12px] sm:text-[14px] px-8 py-4 border-[1px] border-white rounded-full hover:bg-white hover:text-palette-1/[.85] transition duration-300'
                >GET A FREE QUOTE</button>
              )
            }
            <div>
              <SideBar
                active={active}
                handleClick={() => setActive(!active)}
              />
            </div>
          </div>
        </div>
      </div>
    </motion.nav>
  );
};

export default Header;
