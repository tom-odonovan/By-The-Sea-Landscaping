import { useState, useLayoutEffect } from 'react';
import { BsArrowUp } from 'react-icons/bs';
import { motion, AnimatePresence } from 'framer-motion';
import { animateOnScroll } from '../utils/motion';

const BackToTop = ({ pageRef }) => {
  const diameter = 50;
  const strokeWidth = 2.5;
  const radius = diameter / 2 - strokeWidth / 2;
  const circumference = Math.PI * radius * 2;

  const [progress, setProgress] = useState(0);
  const position = Math.max(1 - progress, 0);

  useLayoutEffect(() => {
    if (typeof window !== 'undefined') {
      const updateHeight = () => {
        if (!pageRef.current) return;
        const { height } = pageRef.current.getBoundingClientRect();
        setProgress(window.scrollY / (height - window.innerHeight));
      };

      updateHeight();

      window.addEventListener('scroll', updateHeight);
      return () => {
        window.removeEventListener('scroll', updateHeight);
      };
    }
  }, []);

  const scrollToTop = () => {
    document.documentElement.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <AnimatePresence>
      {position < 0.98 && (
        <motion.button
          onClick={scrollToTop}
          className="floating-element fixed bottom-[50px] right-[50px] z-10 cursor-pointer"
          {...animateOnScroll}
        >
          <svg
            viewBox="0 0 50 50"
            width="60px"
            height="60px"
            className="relative z-1 -rotate-90"
          >
            <circle
              cx={diameter / 2}
              cy={diameter / 2}
              r={radius}
              stroke="#90C8AC"
              strokeWidth={`${strokeWidth}px`}
              fill="transparent"
              style={{
                strokeDasharray: circumference,
                strokeDashoffset: circumference * position,
              }}
            />
          </svg>
          <div className="absolute bottom-0 right-0 w-full h-full rounded-full border-3 shadow-lg z-[-1] flex items-center justify-center">
            <BsArrowUp size={29} color="#90C8AC" />
          </div>
        </motion.button>
      )}
    </AnimatePresence>
  );
};

export default BackToTop;
