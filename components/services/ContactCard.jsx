import { Link } from 'react-scroll';
import { useMediaQuery } from 'react-responsive';
import styles from '../../styles';

const ContactCard = () => {
  const isDesktop = useMediaQuery({ minWidth: 1024 });

  return (
    <div className={`${styles.flexCenter} px-8 absolute top-1/2 lg:top-1/2 -translate-y-1/2 lg:-translate-y-1/2 right-1/2 lg:right-full translate-x-1/2 lg:translate-x-1/2 w-[250px] sm:w-[300px] h-fit py-6 bg-palette-2 rounded-md text-white flex flex-col gap-5 text-center shadow-2xl z-5 transition duration-500`}>
      <img
        src="/icons/leaf-icon.svg"
        alt="Leaf Icon"
        className="w-[70px] h-[70px] object-contain"
      />
      <h3 className="text-[22px] sm:text-[28px] font-sans-bold">Ready To Get Started?</h3>
      <p className="text-[16px]">Get in touch today for a free quote and consultation</p>
      <Link
        activeClass="active"
        to="contact"
        spy
        smooth
        offset={!isDesktop ? 600 : isDesktop ? 0 : -90}
        duration={300}
        href="/#contact"
      >
        <button type="button" className="font-bold border-[1px] border-white px-6 py-2 rounded-xl hover:bg-white hover:text-palette-2 active:scale-95 transition duration-300">CONTACT US</button>
      </Link>
    </div>
  );
};

export default ContactCard;
