import Consultation from "./Consultation";
import Hero from "./Hero";
import LabTesting from "./LabTesting";
import Plans from "./Plans";
import SeniorsStore from "./SeniorsStore";
// import Offer from "./Offer";

const HomeView = () => {
  return (
    <div>
      <Hero />
      {/* <Offer /> */}
      <Plans />
      <Consultation />
      <SeniorsStore />
      <LabTesting />
    </div>
  );
};

export default HomeView;
