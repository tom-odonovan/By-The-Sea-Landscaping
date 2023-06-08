'use client';

import { Header, Footer, BackToTop } from '../components';
import { Hero, About, Services, Explore, WhyChooseUs, Blog, Feedback, FollowUs, GetInTouch } from '../sections';
import { useState } from 'react';
import { useRef } from 'react';


const Page = () => {

  const pageRef = useRef();
  const [overlay, setOverlay] = useState(false);

  return (
    <div className="bg-hero-pattern">
      
      <div className={`${overlay && 'fixed inset-0 z-20 bg-[rgba(0,0,0,0.3)] backdrop-blur-[6px]'} transition duration-500`} />
     
      <div className="text-gray-500 font-sans" ref={pageRef}>
        <Header setOverlay={() => setOverlay(!overlay)}/>
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
