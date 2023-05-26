'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import styles from '../styles';
import { BlogCard, TitleText, TypingText } from '../components';
import { staggerContainer, fadeIn } from '../utils/motion'
import { blog } from '../constants';

const Blog = () => (
  <section className={`${styles.paddings}`}>
    <motion.div
      variants={staggerContainer}
      initial='hidden'
      whileInView='show'
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex flex-col`}
    >
      <TypingText title='| Blog' textStyles='text-center' />
      <TitleText title='Latest Posts' textStyles='text-center' />

      <div className={`mt-[70px] flex flex-col xl:flex-row wrap gap-[30px] max-w-[1000px] mx-auto`}>
        {blog.map((item, index) => (
          <BlogCard 
            key={item.id}
            imgUrl={item.imgUrl}
            date={item.date}
            title={item.title}
            subtitle={item.subtitle}
            sections={item.sections}
            index={index}
          />
        ))}
      </div>
    </motion.div>
  </section>
);

export default Blog;
