'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import styles from '../styles';
import SideBar from './SideBar';
import { navVariants } from '../utils/motion'
import { navbar } from '../constants';
import { Link } from 'react-scroll';

const Header = ({setOverlay}) => {

  const [active, setActive] = useState(false)

  const toggleOverlay = () => {
    setOverlay()
    setActive(!active)
  }

  return (
    <motion.nav
      variants={navVariants}
      initial='hidden'
      whileInView='show'
      className={`p-8 relative bg-palette-1/[.85] sticky top-0 z-20 shadow-2xl`}
    >
      <div className={`max-w-[1700px] mx-auto flex justify-between gap-8 h-[30px] items-center`}>
        <Link
          activeClass='active'
          to='home'
          spy={true}
          smooth={true}
          offset={-150}
          duration={300}
        >
          <img
            src='/Logos/Logo-text-dark.png'
            alt='logo'
            className='h-[40px] cursor-pointer'
          />
        </Link>
        <div className='flex flex-row items-center gap-12'>
          <nav className='hidden lg:flex'>
            <ul className='flex flex-row gap-8 xl:gap-12'>
              {navbar.map(({ name, path }) => (
                <li key={name} className='text-white text-[12px] sm:text-[14px] font-bold'>
                  <Link
                    activeClass='active'
                    to={path}
                    spy={true}
                    smooth={true}
                    offset={path === 'home' ? -100 : 0}
                    duration={300}
                    key={name}
                    className='relative py-8 transition duration-300 cursor-pointer font-bold text-[15px] xl:text-[18px] font-sans group opacity-50 hover:opacity-100'
                  >
                    {name}
                    <div className='absolute bottom-7 left-1/2 transform -translate-x-1/2 w-0 h-[2px] bg-white transition-all duration-300 group-hover:w-full'></div>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <div className='flex flex-row gap-12 items-center'>
            
            <Link
              activeClass='active'
              to='contact'
              spy={true}
              smooth={true}
              offset={0}
              duration={300}
            >
              <button className='sm:text-red-500 md:text-yellow-500 lg:text-green-500 hidden md:flex font-bold text-palette-5 text-[12px] sm:text-[14px] px-8 py-4 border-[1px] border-palette-5 rounded-full hover:bg-palette-5 hover:text-palette-1/[.85] transition duration-300'
              >GET A FREE QUOTE</button>
            </Link>
            
            <div>
              <SideBar
                active={active}
                handleClick={() => toggleOverlay()}
              />
            </div>
          </div>
        </div>
      </div>
    </motion.nav>
  );
};

export default Header;
