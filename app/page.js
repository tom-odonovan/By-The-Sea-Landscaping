import { Footer, Navbar } from '../components';
import { Hero, About, Explore, Feedback, WhatsNew, World } from '../sections';
import Blog from '../sections/Blog';
import WhyChooseUs from '../sections/WhyChooseUs';
import GetInTouch from '../sections/GetInTouch';



const Page = () => (
  <div className='bg-primary-white overflow-hidden font-sans'>
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
    <Footer />
  </div>
);

export default Page;
