'use client';

import { motion } from 'framer-motion';
import { fadeIn } from '../../utils/motion'
import styles from '../../styles';
import { BsArrowRightCircle } from 'react-icons/bs';


const ServicesCard = ({ index, service, active, handleClick }) => (

    <motion.div
        variants={fadeIn('right', 'spring', index * 0.5, 1)}
    >

        <div onClick={() => handleClick(service)} className={`${styles.flexCenter} flex flex-col gap-5 cursor-pointer rounded-md ${active === service ? 'bg-palette-1' : 'bg-white'} drop-shadow-xl w-[95vw] sm:w-[250px] sm:mx-0 h-[200px] font-bold text-[18px] ${active === service ? 'text-white' : 'text-grey-900'} transition duration-300`}>
            <img
                src={service.icon.img}
                alt={service.icon.alt}
                className='w-[70px] h-[70px] object-contain'
            />
            {service.title}
            
            <BsArrowRightCircle size={40} className={`${active === service ? 'text-palette-2' : 'text-grey-100 opacity-30'} opacity-80 hover:scale-110 ${active === service ? 'rotate-90' : ''} transition duration-500`} />
        
        </div>
    </motion.div>


);

export default ServicesCard;