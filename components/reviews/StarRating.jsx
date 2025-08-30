import React from 'react';
import { AiFillStar } from 'react-icons/ai';

const StarRating = ({
  rating,
  size,
  className,
  color,
}) => {
  const stars = [];
  for (let i = 0; i < rating; i += 1) {
    stars.push(<AiFillStar key={i} size={size} className={`${color ? `text-${color}` : 'text-yellow-400'} ${className}`} />);
  }

  return (
    <div className="flex">
      {stars}
    </div>
  );
};

export default StarRating;
