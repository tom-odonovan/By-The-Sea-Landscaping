'use client';

import { motion } from 'framer-motion';
import { fadeIn } from '../../utils/motion';
import styles from '../../styles';
import { Link } from 'react-scroll';

const ServiceInfo = ({ active }) => (
    <div className='relative z-1 flex flex-col md:flex-row w-[100vw] h-full lg:h-[600px]'>
        <div className={`${styles.paddings} bg-white bg-hero-pattern w-full md:w-2/3 flex items-center justify-end`}>
            <motion.div
                variants={fadeIn('up', 'tween', 0.1, 1)}
            >
                <div className='w-fit flex flex-col my-8 py-4 pl-16 border-l-[1px] border-palette-2'>
                    <div className='flex flex-row items-center w-full max-w-[600px]'>
                        <img
                            src={active.icon.img}
                            alt={active.icon.alt}
                            className='w-[70px] h-[70px] object-contain'
                        />
                        <div className='flex flex-col ml-4'>
                            <h4 className='font-bold text-palette-2'>{active.subtitle}</h4>
                            <h3 className='font-bold text-[28px]'>{active.title}</h3>
                        </div>
                    </div>
                    {active.text.split('\n').map((p, index) => (
                        <p className='mt-8 max-w-[600px] text-[14px]' key={index}>{p}</p>
                    ))}
                </div>
            </motion.div>
        </div>
        <img
            src={active.img}
            alt={active.alt}
            className='w-full md:w-1/3 object-cover'
        />
        <div className={`${styles.flexCenter} px-8 absolute top-[55%] sm:top-[50%] right-[50%] md:right-[5%] lg:right-[10%] xl:right-[15%] 2xl:right-[20%] translate-x-[50%] md:translate-x-0 translate-y-[110px] sm:translate-y-0 md:-translate-y-[50%] w-[250px] sm:w-[300px] h-[300px] sm:h-[350px] bg-palette-2 rounded-md text-white flex flex-col gap-5 text-center shadow-2xl z-5 transition duration-500`}>
            <img
                src='/icons/leaf-icon.svg'
                alt='Leaf Icon'
                className='w-[70px] h-[70px] object-contain'
            />
            <h3 className='text-[22px] sm:text-[28px] font-sans-bold'>Ready To Get Started?</h3>
            <p className='text-[14px]'>Get in touch today for a free quote and consoltation</p>
            <Link
                activeClass='active'
                to='contact'
                spy={true}
                smooth={true}
                offset={50}
                duration={300}
            >
                <button className='font-bold border-[1px] border-white px-6 py-2 rounded-xl hover:bg-white hover:text-palette-2 active:scale-95 transition duration-300'>CONTACT US</button>
            </Link>
        </div>
    </div>
);

export default ServiceInfo;