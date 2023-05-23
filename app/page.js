'use client';

import { Header, Footer, BackToTop } from '../components';
import { Hero, About, Services, Explore, WhyChooseUs, Blog, Feedback, FollowUs, GetInTouch } from '../sections';

import { useRef } from 'react';


const Page = () => {

  const pageRef = useRef();

  return (
    <div className="bg-hero-pattern">
      <div className="text-gray-500 font-sans opacity-100" ref={pageRef}>
        <Header />
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
