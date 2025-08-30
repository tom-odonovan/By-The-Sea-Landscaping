import { useState } from 'react';
import { motion } from 'framer-motion';
import { TypingText, TitleText, ReviewsCarousel, ReviewCard } from '../components';
import { staggerContainer } from '../utils/motion';
import { formatRelativeTime } from '../utils/dateTime';
import { reviews } from '../constants';
import styles from '../styles';

const Reviews = () => {
  const [active, setActive] = useState(0)

  return (
    <section className={`${styles.paddings} !pt-16 !pb-0 bg-palette-1 bg-hero-pattern z-5 opacity-90`} id='reviews'>
      <motion.div
        variants={staggerContainer}
        initial='hidden'
        whileInView='show'
        viewport={{ once: false, amount: 0.25 }}
        className={`w-${innerWidth} h-fit mx-auto flex flex-col`}
      >
        <TypingText title='| Testimonials' textStyles='text-center text-palette-5' />
        <TitleText title='What Our Clients Say' textStyles='text-center text-palette-5' />
        <ReviewsCarousel
          className='my-16'
          loop
          autoPlay
          showIndicators
          showArrows
          maxWidth={1420}
          onSlideChange={(swiper) => setActive(swiper.realIndex)}
          breakpoints={{
            850: {
              slidesPerView: 1,
              spaceBetween: 20,
              slidesPerGroup: 1,
            },
            1024: {
              slidesPerView: 1,
              spaceBetween: 30,
              slidesPerGroup: 1,
            },
          }}
        >
          {reviews.map((review, index) => (
            <ReviewCard
              key={index}
              active={active}
              avatar={review.avatar}
              name={review.name}
              date={formatRelativeTime(review.date)}
              content={review.content}
              rating={review.rating}
            />
          ))} 
        </ReviewsCarousel>
      </motion.div>
    </section>
  );
};

export default Reviews;
