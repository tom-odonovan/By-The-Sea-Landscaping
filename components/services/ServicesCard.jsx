'use client';

import { motion } from 'framer-motion';
import { BsArrowRightCircle } from 'react-icons/bs';
import { fadeIn } from '../../utils/motion';
import styles from '../../styles';

const ServicesCard = ({ index, service, active, handleClick }) => (
  <motion.div
    variants={fadeIn('right', 'spring', index * 0.5, 1)}
  >

    <div onClick={() => handleClick(service)} className={`${styles.flexCenter} flex-row sm:flex-col px-4 gap-5 cursor-pointer sm:rounded-md border-1 ${active === service ? 'bg-palette-1 text-white border-palette-1' : 'bg-white text-grey-900 border-gray-100'} shadow-sm w-screen sm:w-[250px] sm:mx-0 h-[120px] sm:h-[200px] font-bold text-[18px] active:scale-95 transition duration-300`}>
      <div className="flex flex-row items-center justify-start sm:flex-col w-[300px] gap-5">
        <img
          src={service.icon.img}
          alt={service.icon.alt}
          className="w-[70px] h-[70px] object-contain"
        />
        {service.title}

      </div>
      <BsArrowRightCircle size={40} className={` ${active === service ? 'text-palette-2' : 'text-gray-200 opacity-30'} opacity-80 hover:scale-110 ${active === service ? 'rotate-90' : ''} transition duration-500`} />
    </div>
  </motion.div>
);

export default ServicesCard;
