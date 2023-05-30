'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { staggerContainer, fadeIn } from '../../utils/motion'
import styles from '../../styles';
import { TypingText, TitleText } from "../";
import { socials } from '../../constants';

const ContactDetails = () => {

    return (
        <div className='flex flex-row justify-end flex-wrap gap-12 max-w-[700px]'>
            {socials.map((social, index) => (
                <div
                    key={index} 
                    className={`${styles.flexCenter} w-[300px] h-[300px] bg-white shadow-2xl`}>
                    
                    <h3 className='text-[26px] pb-12 font-sans text-palette-3'>{social.name}</h3>
                </div>
            ))}
        </div>
    );
};

export default ContactDetails;