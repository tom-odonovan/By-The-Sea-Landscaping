'use client';

import styles from '../styles';

const ServiceInfo = ({ img, alt, title, text, active, handleClick }) => (
    <div>
        <div className='bg-white w-2/3'>
            <h3 className='text-[28px] font-sans-bold'>{title}</h3>
            <p></p>
        </div>
        <img
            src="/poolside-01.jpeg"
            alt='Poolside'
            className='w-1/3 object-cover'
        />
    </div>
);

export default ServiceInfo;