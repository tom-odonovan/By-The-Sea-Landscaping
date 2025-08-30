import React, { useState, useRef, useEffect } from 'react';
import { FiChevronDown } from 'react-icons/fi';
import Card from '../Containers/Card/Card';
import StarRating from './StarRating';

const ReviewCard = ({
  active,
  name,
  date,
  content,
  rating,
}) => {
  const [showFullReview, setShowFullReview] = useState(true);
  const [checkContentHeight, setCheckContentHeight] = useState(false);
  const [showReadMore, setShowReadMore] = useState(false);
  const contentRef = useRef(null);

  // Only show read more button if content is more than 5 lines
  useEffect(() => {
    if (!checkContentHeight) {
      const contentHeight = contentRef.current.clientHeight;
      const lineHeight = parseInt(getComputedStyle(contentRef.current).lineHeight, 10);
      const maxLines = 5;
      if (contentHeight > lineHeight * maxLines) {
        setShowFullReview(false);
        setShowReadMore(true);
      } else {
        setShowReadMore(false);
      }
      setCheckContentHeight(true);
    }
  }, [content, checkContentHeight]);

  useEffect(() => {
    setShowFullReview(false); // Close review on slide change
  }, [active]);

  return (
    <Card
      className="mb-6 flex flex-col gap-6 pt-0 pb-6 text-palette-5"
    >
      <div className="flex justify-center items-center gap-2 text-[0.8rem]">
        <div>
          <h3 className="font-bold text-[1.2rem] text-center">
            {name}
          </h3>
          <p className="text-center">{date}</p>
        </div>
      </div>
      <div className="flex justify-center">
        <StarRating rating={rating} size={18} color="palette-5" />
      </div>
      <div className="relative">
        <p
          ref={contentRef}
          className="transition-all duration-500 ease overflow-hidden text-xl text-center italic leading-[2.2rem]"
          style={{ maxHeight: showFullReview ? '750px' : '140px' }}
        >
          {content}
        </p>
        {!showFullReview
         && showReadMore
         && <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-palette-1" />}
      </div>
      {showReadMore && (
        <button
          type="button"
          className="text-sm opacity-[60%] hover:opacity-[90%] transition duration-200 ease-in-out"
          onClick={() => setShowFullReview(!showFullReview)}
        >
          <span className="flex justify-center items-center pl-3">
            {showFullReview ? 'Read Less' : 'Read More'}
            <FiChevronDown size={20} className={`ml-1 transition-transform duration-300 ${showFullReview ? 'rotate-180' : ''}`} />
          </span>
        </button>
      )}

    </Card>
  );
};

export default ReviewCard;
