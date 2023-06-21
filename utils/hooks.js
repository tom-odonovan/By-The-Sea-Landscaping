import { useState, useEffect } from "react";

// Source: https://www.codemzy.com/blog/react-hook-scroll-direction-event-listener
export function useScrollDirection() {
  const [scrollDirection, setScrollDirection] = useState('up');

  useEffect(() => {
    let initialYOffset = window.pageYOffset;

    const updateScrollDirection = () => {
      const currentYOffset = window.pageYOffset;
      const direction = currentYOffset > initialYOffset ? "down" : "up";
      if (direction !== scrollDirection && (currentYOffset - initialYOffset > 10 || currentYOffset - initialYOffset < -10)) {
        setScrollDirection(direction);
      }
      initialYOffset = currentYOffset > 0 ? currentYOffset : 0;
    };
    window.addEventListener("scroll", updateScrollDirection); // add event listener
    return () => {
      window.removeEventListener("scroll", updateScrollDirection); // clean up
    }
  }, [scrollDirection]);

  return scrollDirection;
};