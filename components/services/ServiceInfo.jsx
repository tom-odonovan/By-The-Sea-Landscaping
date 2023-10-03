import Carousel from './Carousel';
import ContactCard from './ContactCard';
import Picture from '../Picture';
import { services } from '../../constants';

const ServiceInfo = ({ active, handleChange }) => {
  const activeIndex = services.indexOf(active);

  return (
    <div className="relative z-1 flex flex-col lg:flex-row w-[100vw] h-full max-h-[800px] lg:h-auto">
      <div className="bg-white bg-hero-pattern w-full lg:w-2/3 flex flex-col items-center justify-center lg:items-end">
        <div className="flex flex-row py-12 lg:pr-[150px] mt-12">
          <div className="hidden xl:block h-full w-[1px] bg-palette-2" />
          <Carousel
            items={services}
            activeItem={active}
            activeIndex={activeIndex}
            handleChange={handleChange}
            containerStyles="w-[90vw] sm:w-[80vw] lg:max-w-[550px] xl:max-w-[700px] 2xl:max-w-[800px] h-full"
          />
        </div>
      </div>
      <div className="relative w-full lg:w-1/3 h-[600px] lg:h-auto">
        <Picture
          webp={`${active.img}.webp`}
          src={`${active.img}.jpg`}
          alt={active.alt}
          className="object-cover w-full h-full brightness-60"
        />
        <ContactCard />
      </div>
    </div>
  );
};

export default ServiceInfo;
