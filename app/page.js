'use client';

import { Navbar } from '../components';
import { Footer } from '../components';
import ProgressCircle from '../components/ProgressCircle';
import { Hero, About, Explore, Feedback, WhatsNew, World } from '../sections';
import Blog from '../sections/Blog';
import WhyChooseUs from '../sections/WhyChooseUs';
import GetInTouch from '../sections/GetInTouch';

import { useRef } from 'react';


const Page = () => {

  const pageRef = useRef();

  return (
    <div className='bg-primary-white overflow-hidden font-sans' ref={pageRef}>
      <Navbar />
      <Hero />
      <div className='relative'>
        <About />
        <WhyChooseUs />
      </div>
      <div className='relative'>
        <Explore />
        <WhatsNew />
      </div>
      <div className='relative'>
        <Blog />
        <Feedback />
        <GetInTouch />
      </div>
      <ProgressCircle pageRef={pageRef} />
      <Footer />
    </div>
  )
};

export default Page;
