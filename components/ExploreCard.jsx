'use client';

import { motion } from 'framer-motion';
import styles from '../styles';
import { fadeIn } from '../utils/motion'

const ExploreCard = ({ id, imgUrl, title, index, active, handleClick }) => (
  <motion.div
    variants={fadeIn('right', 'spring', index * 0.5, 0.75)}
    className={`relative ${active === id ? 'lg:flex-[3.5] flex-[10]' : 'lg:flex-[0.5] flex-[2]'} flex items-center justify-center min-w-[170px] h-[700px] transition-[flex] duration-[1s] ease-out-flex cursor-pointer`}
    onClick={() => handleClick(id)}
  >
    <img
      src={imgUrl}
      alt={title}
      className='absolute w-full h-full object-cover rounded-[24px]'
    />
    {active !== id ? (
      <div className='absolute bottom-0 p-8 justify-start w-full h-full flex-col bg-[rgba(0,0,0,0.5)] rounded-[24px]'>
        <h3 className='font-semibold sm:text-[26px] text-[18px] text-white absolute z-0 lg:bottom-20 lg:rotate-[-90deg] lg:origin-[0,0]'>
          {title}
        </h3>
      </div>
    ) : (
      <div className='absolute bottom-0 p-8 justify-start w-full flex-col bg-[rgba(0,0,0,0.5)] rounded-b-[24px]'>
        <h2 className='mt-[24px] font-semibold sm:text-[32px] text-[24px] text-white'>
          {title}
        </h2>
        <a href='#' className='font-normal text-[16px] leading-[20px] text-white hover:underline'>
          See more
        </a>
      </div>
    )}
  </motion.div>
);

export default ExploreCard;