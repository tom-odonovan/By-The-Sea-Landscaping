'use client'

import { motion } from 'framer-motion';
import { fadeIn } from '../utils/motion';
import styles from '../styles';


const BlogCard = ({ imgUrl, date, title, subtitle, sections, index }) => {

    function calculateReadTime(content) {
        const wordsPerMinute = 200;

        // Calculate the total number of words in the sections array
        const totalWords = content.reduce((count, section) => {
            const words = section.content.split(' ').length;
            return count + words;
        }, 0);

        // Calculate the estimated read time
        const readTimeMinutes = Math.ceil(totalWords / wordsPerMinute);

        return readTimeMinutes;
    }

    console.log(calculateReadTime(sections))

    return (
    <motion.div
        variants={fadeIn('up', 'spring', index * 0.4, 1.5)}
        className='flex md:flex-row flex-col gap-4 bg-white shadow-2xl rounded-lg hover:scale-125'
    >
        <img 
            src={imgUrl}
            alt={title}
            className='md:w-[270px] w-full h-[250px] object-cover rounded-t-lg md:rounded-l-lg'
        />
        <div className='w-full flex justify-between items-center'>
            <div className={`p-4 flex-1  ml-2 lg:ml-12 flex flex-col max-w-[650px]`}>
                <p className='opacity-60'>{date}</p>
                <h4 className='font-normal xl:text-[32px] text-[26px] text-palette-1'>{title}</h4>
                <p className='mt-[16px] font-normal lg:text-[20px] text-[14px]'>{subtitle}</p>
                <p className='mt-8 opacity-60'>{calculateReadTime(sections)} min read</p>
            </div>
                <div className='hidden lg:flex items-center justify-center w-[70px] h-[70px] rounded-full bg-transparent border-[1px] border-[#E0E0E0] cursor-pointer mx-8'>
                <img 
                    src='/icons/arrow.svg'
                    alt='arrow'
                    className='w-[30%] h-[30%] object-contain'
                />
            </div>
        </div>
    </motion.div>
    );
};

export default BlogCard;