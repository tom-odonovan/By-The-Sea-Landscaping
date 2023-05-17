'use client';

import { Navbar } from '../components';
import { Footer } from '../components';
import BackToTop from '../components/BackToTop';
import { Hero, About, Explore, Feedback } from '../sections';
import Services from '../sections/Services';
import Blog from '../sections/Blog';
import WhyChooseUs from '../sections/WhyChooseUs';
import GetInTouch from '../sections/GetInTouch';
import FollowUs from '../sections/FollowUs';


import { useRef } from 'react';


const Page = () => {

  const pageRef = useRef();

  return (
    <div className="bg-hero-pattern">
      <div className="text-gray-500 font-sans opacity-100" ref={pageRef}>
        <Navbar />
        <Hero />
        <About />
        <Services />
        <WhyChooseUs />
        <Explore />
        <Blog />
        <Feedback />
        <GetInTouch />
        <FollowUs />
        <BackToTop pageRef={pageRef} />
        <Footer />
      </div>
    </div>
  )
};

export default Page;
