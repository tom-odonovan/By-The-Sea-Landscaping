'use client';

import styles from '../styles';
import { BsArrowRightCircle } from 'react-icons/bs';


const ServicesCard = ({ service, active, handleClick }) => (

    <div onClick={() => handleClick(service)} className={`${styles.flexCenter} flex flex-col gap-5 cursor-pointer ${active === service ? 'bg-palette-1' : 'bg-white'} drop-shadow-xl w-full mx-8 sm:w-[250px] sm:mx-0 h-[200px] font-bold text-[18px] ${active === service ? 'text-white' : 'text-grey-900'} transition duration-300`}>
        <img
            src={service.icon.img}
            alt={service.icon.alt}
            className='w-[70px] h-[70px] object-contain'
        />
        {service.title}
        
        <BsArrowRightCircle size={40} className={`${active === service ? 'text-palette-2' : 'text-grey-100 opacity-30'} opacity-80 hover:scale-110 ${active === service ? 'rotate-90' : ''} transition duration-500`} />
      
    </div>

);

export default ServicesCard;