import { Footer, Navbar } from '../components';
import { Hero, About, Explore, WhatsNew, World, Feedback } from '../sections';
import Services from '../sections/Services';
import Blog from '../sections/Blog';
import GetInTouch from '../sections/GetInTouch';


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
