import Consultation from "./Consultation";
import Hero from "./Hero";
import Plans from "./Plans";
// import Offer from "./Offer";

const HomeView = () => {
  return (
    <div>
      <Hero />
      {/* <Offer /> */}
      <Plans />
      <Consultation />
    </div>
  );
};

export default HomeView;
