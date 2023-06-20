'use client';

const Carousel = ({ items, active }) => (
  <div className="flex flex-row mt-4 gap-20 items-center justify-center">
    <div className="flex flex-row gap-2 items-center justify-center">
      {items.map((item, index) => (
        <div className={`${active === item ? 'bg-gray-500' : 'bg-gray-300'} h-2 w-2 rounded-full transition duration-500`} key={index} />
      ))}
    </div>
  </div>
);

export default Carousel;
