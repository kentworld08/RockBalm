"use client";

import ConsultationCard from "@/components/Consultation/ConsultationCard";
import ConsultDoctorForm from "@/components/Consultation/ConsultDoctorForm";
import MedicalConsultation from "@/components/Consultation/MedicalConsultation";
import React from "react";
import { useState } from "react";

const ConsultationPage = () => {
  const [consultation, setConsultation] = useState("");
  return (
    <main className="overflow-hidden relative">
      <MedicalConsultation />
      <ConsultationCard setConsultation={setConsultation} />
      {consultation !== "" && (
        <div className="bg-black bg-opacity-40 absolute inset-0 flex justify-center items-center z-50">
          <div className="bg-white">
            {consultation === "Consult" && (
              <ConsultDoctorForm setConsultation={setConsultation} />
            )}
          </div>
        </div>
      )}
    </main>
  );
};

export default ConsultationPage;
