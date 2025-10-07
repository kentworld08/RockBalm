import Testimonials from "@/components/Home/Testimonials";
import CarePlans from "@/components/Plans/CarePlan";
import ComprehensiveCareFeatures from "@/components/Plans/ComprehensiveCareFeatures";
import GeriatricCarePlans from "@/components/Plans/GeriatricCarePlans";
import PersonalizedCarePlan from "@/components/Plans/PersonalizedCarePlan";
import React from "react";

const PlansPage = () => {
  return (
    <main className="bg-white py-[130px] flex flex-col justify-center items-center w-full text-center overflow-hidden">
      <GeriatricCarePlans />
      <ComprehensiveCareFeatures />
      <CarePlans />
      <Testimonials />
      <PersonalizedCarePlan />
    </main>
  );
};

export default PlansPage;
