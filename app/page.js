import { Footer, Navbar } from '../components';
import { Hero, About, Explore, Services, WhatsNew, World, Blog, Feedback, GetInTouch } from '../sections';


const Page = () => (
  <div className='bg-primary-white overflow-hidden'>
    <Navbar />
    <Hero />
    <div className='relative'>
      <About />
      <Explore />
    </div>
    <div className='relative'>
      <Services />
      <WhatsNew />
    </div>
    <World />
    <div className='relative'>
      <Blog />
      <Feedback />
      <GetInTouch />
    </div>
    <Footer />
  </div>
);

export default Page;
