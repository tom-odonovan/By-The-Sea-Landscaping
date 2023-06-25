import { useSwipeable } from 'react-swipeable';

const Carousel = (props) => {
  const { items, activeItem, activeIndex, handleChange, containerStyles } = props;
  const handlers = useSwipeable({
    onSwipedLeft: () => handleChange('right'),
    onSwipedRight: () => handleChange('left'),
  });

  return (
    <div className="flex flex-col gap-8 items-center justify-center">
      <div {...handlers} className={`${containerStyles} overflow-hidden`}>
        <div className="h-auto flex flex-row">
          {items.map((item, i) => (
            // carousel item
            <div
              key={i}
              style={{ transform: `translateX(calc(-1 * ${activeIndex} * 100%))` }}
              className="flex flex-col justify-center min-w-[90vw] sm:min-w-[80vw] lg:min-w-[550px] xl:min-w-[700px] 2xl:min-w-[800px] px-2 gap-8 px-0 lg:px-16 transition duration-500"
            >
              <div className="flex small-mobile:flex-row items-center w-full">
                <img
                  src={item.icon.img}
                  alt={item.icon.alt}
                  className="w-[70px] h-[70px] object-contain"
                />
                <div className="flex flex-col ml-4">
                  <h3 className="font-bold text-palette-2">{item.subtitle}</h3>
                  <h4 className="font-bold text-[22px] mobile:text-[28px]">{item.title}</h4>
                </div>
              </div>
              <div className="flex flex-col gap-4">
                {item.text.split('\n').map((p, index) => (
                  <p className=" text-[16px] leading-7" key={index}>{p}</p>
                ))}
              </div>
              <div className="hidden md:flex flex-wrap justify-center gap-4">
                {item.tags.map((tag, index) => (
                  <div className="py-2 px-4 text-[14px] text-palette-2 font-bold border-1 border-palette-2 rounded-full" key={index}>{tag}</div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="lg:hidden flex flex-row mt-4 gap-2 items-center justify-center">
        {items.map((item, index) => (
          <div className={`${activeItem === item ? 'bg-gray-500' : 'bg-gray-300'} h-2 w-2 rounded-full transition duration-500`} key={index} />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
