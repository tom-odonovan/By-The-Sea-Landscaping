'use client';

import styles from '../../styles';

const ContactCard = ({icon, heading, text, button}) => (
    
    <div className={`${styles.flexCenter} px-8 absolute top-[55%] sm:top-[50%] right-[50%] md:right-[5%] lg:right-[10%] xl:right-[15%] 2xl:right-[20%] translate-x-[50%] md:translate-x-0 translate-y-[110px] sm:translate-y-0 md:-translate-y-[50%] w-[250px] sm:w-[300px] h-[300px] sm:h-[350px] bg-palette-2 rounded-md text-white flex flex-col gap-5 text-center shadow-2xl z-5 transition duration-500`}>
        <img
            src='/icons/leaf-icon.svg'
            alt='Leaf Icon'
            className='w-[70px] h-[70px] object-contain'
        />
        <h3 className='text-[22px] sm:text-[28px] font-sans-bold'>Ready To Get Started?</h3>
        <p className='text-[14px]'>Get in touch today for a free quote and consoltation</p>
        <button className='font-bold border-[1px] border-white px-6 py-2 rounded-xl hover:bg-white hover:text-palette-2 active:scale-95 transition duration-300'>CONTACT US</button>
    </div>
);

export default ContactCard;