/* eslint-disable import/no-unresolved */
import React, { useState, useRef } from 'react';
import { Navigation, Pagination, A11y, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { FaCircleChevronLeft, FaCircleChevronRight } from 'react-icons/fa6';
import { classNames } from '../../utils/helpers';

const ReviewsCarousel = ({
  className,
  showIndicators,
  indicatiorPosition,
  showArrows,
  autoPlay,
  swipeable,
  children,
  loop,
  breakpoints,
  maxWidth,
  id,
  initialSlide,
  onSlideChange,
}) => {
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);
  const swiperRef = useRef(null);
  let resizeTimer = null;

  // useEffect(() => {
  //   const swiper = swiperRef.current?.swiper;
  //   if (!swiper) return;

  //   const onAutoplay = () => {
  //     swiper.params.speed = 2000; // Slow speed for autoplay transitions
  //   };

  //   const onTouchEnd = () => {
  //     swiper.params.speed = 300; // Fast speed for manual swipes
  //     if (swiper.autoplay.running) {
  //       swiper.autoplay.stop();
  //       setTimeout(() => swiper.autoplay.start(), 300); // Adjust delay as needed
  //     }
  //   };

  //   // Listen for events
  //   swiper.on('autoplayStart', onAutoplay);
  //   swiper.on('touchEnd', onTouchEnd);

  //   // Cleanup event listeners on component unmount
  //   return () => {
  //     swiper.off('autoplayStart', onAutoplay);
  //     swiper.off('touchEnd', onTouchEnd);
  // };
  // }, []);

  return (
    <div
      id={id}
      className={classNames([
        'swiper-carousel mx-auto w-full lg:w-[1000px] relative',
        className || '',
        indicatiorPosition === 'top' ? 'swiper-carousel-bullet-top' : '',
        !showIndicators || (isBeginning && isEnd) ? 'swiper-carousel-bullet-hidden' : '',
      ])}
      style={maxWidth ? { maxWidth: `${maxWidth}px` } : {}}
    >
      <Swiper
        modules={[Navigation, Pagination, Autoplay, A11y]}
        spaceBetween={20}
        slidesPerView={1}
        loop={loop}
        pagination={showIndicators ? { clickable: true } : false}
        allowTouchMove={swipeable}
        initialSlide={initialSlide || 0}
        watchOverflow
        autoplay={autoPlay && {
          delay: 10000,
        }}
        onInit={(swiper) => {
          setIsBeginning(swiper.isBeginning);
          setIsEnd(swiper.isEnd);
        }}
        onResize={(swiper) => {
          if (resizeTimer) clearTimeout(resizeTimer);
          resizeTimer = setTimeout(() => {
            setIsBeginning(swiper.isBeginning);
            setIsEnd(swiper.isEnd);
          }, 250);
        }}
        onSlideChange={(swiper) => {
          setIsBeginning(swiper.isBeginning);
          setIsEnd(swiper.isEnd);
          if (onSlideChange) {
            onSlideChange(swiper);
          }
        }}
        breakpoints={breakpoints}
        ref={swiperRef}
      >
        {React.Children.map(children, (child) => (
          <SwiperSlide key={child.key} className="h-auto">
            {child}
          </SwiperSlide>
        ))}
      </Swiper>
      {showArrows && (
        <>
          <button
            type="button"
            className="hidden sm:flex absolute -left-16 top-[40%] -translate-y-1/2 z-10 rounded-full text-palette-2 opacity-60 hover:opacity-100 hover:shadow-lg transition duration-300"
            onClick={() => swiperRef.current?.swiper?.slidePrev()}
          >
            <FaCircleChevronLeft size={45} />
          </button>
          <button
            type="button"
            className="hidden sm:flex absolute -right-16 top-[40%] -translate-y-1/2 z-10 rounded-full text-palette-2 opacity-60 hover:opacity-100 hover:shadow-lg transition duration-300"
            onClick={() => swiperRef.current?.swiper?.slideNext()}
          >
            <FaCircleChevronRight size={45} />
          </button>
        </>
      )}
    </div>
  );
};

export default ReviewsCarousel;
