import ConsultationCard from "@/components/Consultation/ConsultationCard";
import MedicalConsultation from "@/components/Consultation/MedicalConsultation";
import React from "react";

const ConsultationPage = () => {
  return (
    <main className="overflow-hidden">
      <MedicalConsultation />
      <ConsultationCard />
    </main>
  );
};

export default ConsultationPage;
