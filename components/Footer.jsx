'use client';

import { motion } from 'framer-motion';
import { socials, navbar, services, contact } from '../constants';
import styles from '../styles';
import { footerVariants } from '../utils/motion';
import { Link } from 'react-scroll';
import { IoIosArrowForward } from 'react-icons/io';


const Footer = () => (
  <footer className={`p-8 relative bg-palette-1 bg-hero-pattern z-5 opacity-90`} >
    <motion.div 
      variants={footerVariants}
      initial='hidden'
      whileInView='show'
      className={`max-w-[1700px] mx-auto flex flex-col gap-8 items-center justify-between`}>
      
      <div className='flex flex-row flex-wrap py-[100px] gap-[50px]'>
        <div className='flex flex-row items-center pr-[30px]'>
          <img
            src='/Logos/Logo-dark.png'
            alt='logo'
            className='w-[200px] object-contain'
          />
        </div>

        <div className='flex flex-col gap-8 max-w-[400px]'>
          <h3 className={`${styles.footerHeading}`}>About</h3>
          <p className='text-white font-lato leading-7 text-palette-5 text-[12px] sm:text-[14px]'>Transforming landscapes with precision and care, By The Sea Landscaping is proud to offer comprehensive lawn care and garden maintenance services for your garden. Discover the difference of personalized service and unbeatable prices, get in touch today.</p>
          <div className='flex gap-4'>
            {socials.map(({ name, icon, href }) => {
              const SocialIcon = icon;

              return (
                <a href={href} key={name}>
                  <div className={`${styles.flexCenter} w-[40px] h-[40px] rounded-full bg-palette-1 border-[1px] border-palette-3 cursor-pointer hover:bg-palette-3 transition duration-300 group`}>
                    <SocialIcon size={20} className='text-palette-3 group-hover:text-palette-1' />
                  </div>
                </a>
              )
            })}
          </div>
        </div>

        <div className='flex flex-col gap-8 pr-[50px]'>
          <h3 className={`${styles.footerHeading}`}>Explore</h3>
          <nav>
            <ul className='flex flex-col gap-4'>
              {navbar.map(({ name, path }) => (
                <li key={name} className='flex flex-row items-center gap-2'>
                  <IoIosArrowForward size={15} className='text-palette-3' />
                  <Link
                    activeClass='active'
                    to={path}
                    spy={true}
                    smooth={true}
                    offset={path === 'contact' ? 0 : -150}
                    duration={300}
                    key={name}
                    className='relative transition duration-300 cursor-pointer text-palette-5 text-[12px] xl:text-[14px] font-sans group'
                  >
                    {name}
                    <div className='absolute -bottom-[3px] left-1/2 transform -translate-x-1/2 w-0 h-[2px] bg-white transition-all duration-300 group-hover:w-full'></div>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className='flex flex-col gap-5'>
          <h3 className={`${styles.footerHeading}`}>Our Services</h3>
          <div className='flex flex-col gap-4'>
            {services.map(({ icon, img, alt, title }) => (
              <div className='flex flex-row items-center gap-4'>
                <img
                  src={icon.img}
                  alt={icon.alt}
                  className={`w-[45px] h-[45px] object-contain text-palette-3`}
                />
                <Link
                  activeClass='active'
                  to='services'
                  spy={true}
                  smooth={true}
                  offset={-150}
                  duration={300}
                  key={title}
                  className='cursor-pointer text-palette-5 text-[12px] xl:text-[14px] font-sans'
                >
                  {title}
                </Link>
              </div>
            ))}
          </div>
        </div>

        <div className='flex flex-col gap-6'>
          <h3 className={`${styles.footerHeading}`}>Get In Touch</h3>
          <div className='flex flex-col justify-center gap-4'>
            {contact.map(({ name, icon, content, url }) => {
              const ContactIcon = icon;

              return (
                <a key={name} href={url} className='cursor-pointer group'>
                  <div className='flex flex-row items-center gap-4'>
                    <div className='border-[1px] border-palette-3 bg-palette-1 rounded-full p-2 group-hover:border-palette-3 group-hover:bg-palette-3 transition duration-300'>
                      <ContactIcon size={20} className='text-palette-3 group-hover:text-palette-1 text-center w-[20px]' />
                    </div>
                    <p className='text-palette-5 text-[12px] sm:text-[14px] font-bold'>{content}</p>
                  </div>
                </a>
              )
            })
            }
          </div>
        </div>

      </div>

      <div className='h-[1px] w-full bg-white opacity-50' />

      <p className='text-white text-[14px] text-center'>
        © Copyright By The Sea Landscaping 2023 | Website by 
        <a href='mailto:tom.odonovan01@gmail.com' className='font-bold px-1 cursor-pointer'>
          Tom O'Donovan
        </a>
      </p>
    </motion.div>
  </footer>
);

export default Footer;
