'use client';

import styles from '../styles';

const ServiceInfo = ({ active }) => (
    <div className='relative -top-[100px] z-1 flex flex-row w-[100vw] h-fit md:h-[600px]'>
        <div className={`${styles.paddings} bg-white w-2/3 flex items-center justify-end`}>
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
                    <p className='mt-8 max-w-[600px]' key={index}>{p}</p>
                ))}
            </div>
        </div>
        <img
            src={active.img}
            alt={active.alt}
            className='w-1/3 object-cover'
        />

        <div className={`${styles.flexCenter} px-8 absolute top-[150px] right-[10%] w-[300px] h-[350px] bg-palette-2 rounded-md text-white flex flex-col gap-5 text-center shadow-2xl z-5`}>
            <img
                src='/icons/leaf-icon.svg'
                alt='Leaf Icon'
                className='w-[70px] h-[70px] object-contain'
            />
            <h3 className='text-[28px] font-sans-bold'>Ready To Get Started?</h3>
            <p>Get in touch today for a free quote and consoltation</p>
            <button className='font-bold border-[1px] border-white my-4 px-6 py-2 rounded-xl hover:bg-white hover:text-palette-2 transition duration-300'>CONTACT US</button>
        </div>
    </div>
);

export default ServiceInfo;