import JoinUs from "@/components/About/JoinUs";
import OurMission from "@/components/About/OurMission";
import OurStory from "@/components/About/OurStory";
import OurTeam from "@/components/About/OurTeam";
import OurValue from "@/components/About/OurValue";
import PartnerGeriatricHealth from "@/components/About/PartnerGeriatricHealth";
import WhatMakesRockBalm from "@/components/About/WhatMakesRockBalm";

const AboutPage = () => {
  return (
    <main className="bg-[#F9F9F9] py-[130px] flex flex-col justify-center items-center w-full text-center overflow-hidden">
      <PartnerGeriatricHealth />
      <OurStory />
      <OurMission />
      <OurValue />
      <WhatMakesRockBalm />
      <OurTeam />
      <JoinUs />
    </main>
  );
};

export default AboutPage;
