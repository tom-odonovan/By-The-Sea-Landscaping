'use client';

import { motion } from 'framer-motion';
import { fadeIn } from '../utils/motion';

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

  return (
    <motion.div variants={fadeIn('up', 'spring', index * 0.4, 1.5)}>
      <div className="flex md:flex-row xl:flex-col flex-col gap-4 hover:scale-105 transition duration-500 bg-white shadow-2xl p-0 md:p-4 xl:p-0 rounded-lg">
        <img
          src={imgUrl}
          alt={title}
          className="md:w-[270px] xl:w-full w-full h-[250px] object-cover rounded-t-lg md:rounded-l-lg"
        />
        <div className="w-full xl:w-[350px] flex justify-between items-center">
          <div className="p-4 flex-1 m-0 lg:ml-12 xl:m-0 flex flex-col max-w-[650px] gap-4">
            <p className="opacity-60">{date}</p>
            <h4 className="font-sans font-light text-[20px] lg:text-[26px] xl:text-[20px] text-palette-1">{title}</h4>
            <p className="font-normal lg:text-[20px] xl:text-[14px] text-[14px]">{subtitle}</p>
            <p className="opacity-60">{calculateReadTime(sections)} min read</p>
          </div>
          <div className="hidden lg:flex xl:hidden items-center justify-center w-[70px] h-[70px] rounded-full bg-transparent border-[1px] border-[#E0E0E0] cursor-pointer mx-8">
            <img
              src="/icons/arrow.svg"
              alt="arrow"
              className="w-[30%] h-[30%] object-contain"
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default BlogCard;
