import { motion } from 'framer-motion';
import { BsArrowRightCircle } from 'react-icons/bs';
import { fadeIn } from '../../utils/motion';
import styles from '../../styles';

const ServicesCard = ({ index, service, active, handleClick }) => (
  <motion.div
    variants={fadeIn('right', 'spring', index * 0.5, 1)}
  >

    <button
      type="button"
      onClick={() => handleClick(service)}
      className={`${styles.flexCenter} flex-row custom-lg:flex-col px-4 gap-5 cursor-pointer sm:rounded-md border-1 ${active === service ? 'bg-palette-1 text-white border-palette-1' : 'bg-white text-grey-900 border-gray-200'} shadow-md w-screen sm:w-[48vw] custom-lg:w-[250px] sm:mx-0 h-[100px] custom-lg:h-[200px] font-bold text-[18px] active:scale-95 transition duration-300`}
    >
      <div className="flex flex-row items-center justify-start custom-lg:flex-col w-[250px] gap-5">
        <img
          src={service.icon.img}
          alt={service.icon.alt}
          className="w-[70px] h-[70px] object-contain"
          loading="lazy"
        />
        <p className="min-w-[160px]">{service.title}</p>

      </div>
      <BsArrowRightCircle size={40} className={` ${active === service ? 'text-palette-2' : 'text-gray-200 opacity-30'} opacity-80 hover:scale-110 ${active === service ? 'rotate-90' : ''} transition duration-500`} />
    </button>
  </motion.div>
);

export default ServicesCard;
