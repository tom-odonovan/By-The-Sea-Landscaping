'use client';

import { useSwipeable } from 'react-swipeable';
import Carousel from './Carousel';
import ContactCard from './ContactCard';
import { services } from '../../constants';

const ServiceInfo = ({ active, handleChange }) => {
  const handlers = useSwipeable({
    onSwipedLeft: () => handleChange('right'),
    onSwipedRight: () => handleChange('left'),
  });

  const activeIndex = services.indexOf(active);

  return (
    <div className="relative z-1 flex flex-col lg:flex-row w-[100vw] h-full lg:h-auto">
      <div className="bg-white bg-hero-pattern w-full lg:w-2/3 flex flex-col items-center justify-center lg:items-end">
        <div className="flex flex-col gap-8 justify-start items-center py-12 lg:pr-[150px]">
          <div className="flex flex-row justify-center items-center mt-12">
            <div className="hidden xl:block h-full w-[1px] bg-palette-2" />
            <div {...handlers} className="w-[90vw] sm:w-[80vw] lg:max-w-[550px] xl:max-w-[700px] 2xl:max-w-[800px] h-full overflow-hidden">
              <div className="h-auto flex flex-row">
                {services.map((item, i) => (
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
          </div>
          <Carousel
            items={services}
            active={active}
          />
        </div>
      </div>
      <div className="relative w-full lg:w-1/3 h-[600px] lg:h-auto">
        <img
          src={active.img}
          alt={active.alt}
          className="object-cover w-full h-full brightness-60"
        />
        <ContactCard />
      </div>
    </div>
  );
};

export default ServiceInfo;
