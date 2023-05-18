'use client';

import styles from '../styles';
import { BsArrowRightCircle } from 'react-icons/bs';


const ServicesCard = ({ img, alt, title, text, active, handleClick }) => (

    <div onClick={() => handleClick(title)} className={`${styles.flexCenter} flex flex-col gap-5 cursor-pointer ${active === title ? 'bg-palette-1' : 'bg-white'} drop-shadow-xl w-[250px] h-[200px] font-bold text-[18px] ${active === title ? 'text-white' : 'text-grey-900'} transition duration-300`}>
        <img
            src={img}
            alt={alt}
            className='w-[70px] h-[70px] object-contain'
        />
        {title}
        
        <BsArrowRightCircle size={40} className={`text-palette-2 opacity-80 hover:scale-110 ${active === title ? 'rotate-90' : ''} transition duration-500`} />
      
    </div>

);

export default ServicesCard;