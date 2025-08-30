'use client';

import { useState, useRef } from 'react';
import { Analytics } from '@vercel/analytics/react';
import { Hero, About, Services, Explore, WhyChooseUs, Reviews, GetInTouch } from '../sections';
import { Header, Footer, BackToTop } from '../components';

const Page = () => {
  const pageRef = useRef();
  const [overlay, setOverlay] = useState(false);

  return (
    <div className="bg-palette-5 w-full">

      <div className={`${overlay && 'fixed inset-0 z-20 bg-[rgba(0,0,0,0.3)] backdrop-blur-[2px]'} transition duration-500`} />

      <div className="text-gray-500 font-sans" ref={pageRef}>
        <Header setOverlay={() => setOverlay(!overlay)} />
        <Hero />
        <About />
        <Services />
        <WhyChooseUs />
        <Explore />
        {/* <Blog /> */}
        <Reviews />
        <GetInTouch />
        {/* <FollowUs /> */}
        <BackToTop pageRef={pageRef} />
        <Footer />
        <Analytics />
      </div>
    </div>
  );
};

export default Page;
