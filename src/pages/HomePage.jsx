import AboutSection from '../components/AboutSection';
import BlogSection from '../components/BlogSection';
import Feedback from '../components/Feedback';
import Footer from '../components/Footer';
import GoToTop from '../components/GoToTop';
import HeroSection from '../components/HeroSection';
import Navbar from '../components/Nav'; 
import Project from '../components/Project';
import Service from '../components/Service';
import StatisticsSection from '../components/StatisticsSection';
import WhyUsSection from '../components/WhyUsSection';
import WorkingProcess from '../components/WorkingProcess';

const Homepage = () => {
  return (
    <div className="min-h-screen">
      <GoToTop />
      <Navbar />
      <HeroSection/>
      <WorkingProcess />
      <AboutSection />
      <Service />
      <Feedback />
      <StatisticsSection />
      <Project />
      <WhyUsSection />
      <BlogSection />
      <Footer />
    </div>
  );
};

export default Homepage;