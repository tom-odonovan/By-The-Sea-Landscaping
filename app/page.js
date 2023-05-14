'use client';

import { Navbar } from '../components';
import { Footer } from '../components';
import ProgressCircle from '../components/ProgressCircle';
import { Hero, About, Explore, Feedback } from '../sections';
import Services from '../sections/Services';
import Blog from '../sections/Blog';
import WhyChooseUs from '../sections/WhyChooseUs';
import GetInTouch from '../sections/GetInTouch';

import { useRef } from 'react';


const Page = () => {

  const pageRef = useRef();

  return (
    <div className='bg-[#f8faf0] text-gray-500 font-sans' ref={pageRef}>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <WhyChooseUs />
      <Explore />
      <Blog />
      <Feedback />
      <GetInTouch />
      <ProgressCircle pageRef={pageRef} />
      <Footer />
    </div>
  )
};

export default Page;
