'use client';

import { motion } from 'framer-motion';
import styles from '../styles';
import { fadeIn } from '../utils/motion'

export const ExploreCard = ({ id, imgurl, title, index, active, handleClick }) => (
  <motion.div
    variants={fadeIn('right', 'spring', index * 0.5, 0.75)}
    className={`relative ${active === id ? 'lg:flex-[3.5] flex-[10]' : 'lg:flex-[0.5] flex-[2]'} flex items-center justify-center min-w-[1070px] h-[700px] transition-[flex] duration-[0.7s] ease-out-flex cursor-pointer`}
  >
    Explore Card
  </motion.div>
);

// Whats wrong with this code?
