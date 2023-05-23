'use client';

import { motion } from 'framer-motion';
import styles from '../styles';
import { fadeIn } from '../utils/motion'
import { navbar, socials } from '../constants';
import { GrClose } from 'react-icons/gr'
import { FaPhoneAlt } from 'react-icons/fa'

const SideBar = ({ active, handleClick }) => (
    <div>
        {active && (
            <div className='fixed inset-0 bg-[rgba(0,0,0,0.5)]' onClick={() => handleClick()}></div>
        )}
        <div className={`${active ? 'translate-x-0' : 'translate-x-full'} transition duration-300 ease-in-out p-8 flex flex-col fixed top-0 right-0 bg-white w-[350px] h-full shadow-2xl opacity-100 z-5`} >
            <div className='w-full flex justify-end'>
                <button onClick={() => handleClick()}>
                    <GrClose className='relative left-[2px] -top-[3px] w-[30px] h-[30px] cursor-pointer' />
                </button>
            </div>
            <img
                src='/Logos/Logo-light.png'
                alt='logo'
                className='relative w-[200px] -top-[30px] pb-8'
            />
            <nav className=''>
                <ul className='flex flex-col gap-8 xl:gap-12'>
                    {navbar.map(({ name, url }) => (
                        <li key={name} className='text-[12px] sm:text-[14px] font-bold'>
                            <a
                                href={url}
                                className='relative py-8 transition duration-300 cursor-pointer font-bold text-[15px] xl:text-[18px] font-sans group hover:text-black'
                            >{name}
                                <div className='absolute bottom-7 left-1/2 transform -translate-x-1/2 w-0 h-[2px] bg-black transition-all duration-300 group-hover:w-full'></div>
                            </a>
                            <div className='relative top-[15px] h-[1px] w-full bg-black opacity-10' />
                        </li>
                    ))}
                </ul>
            </nav>

            <div className='flex flex-row pt-[80px] gap-8 items-center'>
                <FaPhoneAlt className='w-[30px] h-[30px] text-palette-2' />
                <div>
                    <h4>Call Today</h4>
                    <a href='tel://+61439439391'>
                        <p className='text-xl font-bold hover:text-palette-2 transition duration-300'>0439 439 391</p>
                    </a>
                </div>
            </div>

            <div className='flex gap-4 py-16 justify-center'>
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

        <button onClick={() => handleClick()}>
            <img
                src='/icons/menu.svg'
                alt='menu'
                className='lg:hidden w-[30px] h-[30px] object-contain cursor-pointer'
            />
        </button>

    </div>
);

export default SideBar;