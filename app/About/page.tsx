import OurMission from "@/components/About/OurMission";
import OurStory from "@/components/About/OurStory";
import OurValue from "@/components/About/OurValue";
import PartnerGeriatricHealth from "@/components/About/PartnerGeriatricHealth";

const AboutPage = () => {
  return (
    <main className="bg-[#F9F9F9] py-[130px] flex flex-col justify-center items-center w-full text-center overflow-hidden">
      <PartnerGeriatricHealth />
      <OurStory />
      <OurMission />
      <OurValue />
    </main>
  );
};

export default AboutPage;
