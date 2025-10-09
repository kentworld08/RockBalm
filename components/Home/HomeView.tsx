import Blog from "./Blog";
import Consultation from "./Consultation";
import FAQ from "./Faq";
import Hero from "./Hero";
import LabTesting from "./LabTesting";
import Plans from "./Plans";
import SelfCareHub from "./SelfCareHub";
import SeniorsStore from "./SeniorsStore";
import Testimonials from "./Testimonials";
import Offer from "./Offer";

const HomeView = () => {
  return (
    <div>
      <Hero />
      <Offer />
      <Plans />
      <Consultation />
      <SeniorsStore />
      <LabTesting />
      <SelfCareHub />
      <Testimonials />
      <Blog />
      <FAQ />
    </div>
  );
};

export default HomeView;
