import React from "react";

const ConsultationCard = () => {
  const BlogCardData = [
    {
      title: "Consult with a doctor today",
      description:
        "Get personalized medical advice from qualified doctors, tailored to your health needs.",
      btn: "Consult A Doctor",
      color: "#0288D1",
    },
    {
      title: "Talk to a pharmacist",
      description:
        "Talk with a pharmacist to receive expert guidance on medications, dosages, and managing prescriptions.",
      btn: "Talk to a pharmacist",
      color: "#0288D1",
    },
    {
      title: "Speak to a Dermatologist",
      description:
        "Speak to a skin expert to get right products for all for your Skin Health Needs",
      btn: "Coming Soon",
      color: "#fffff",
    },
    {
      title: "Speak to a Nutritionist",
      description:
        "Get tailored dietary advice to support your health and wellness goals from a certified nutritionist.",
      btn: "Coming Soon",
      color: "#fffff",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-[20px] justify-items-center items-center bg-[#F8F8F8] pt-10 md:py-[176px] md:px-[192px]">
      {BlogCardData.map((item, index) => (
        <div key={index} className="card w-[400px] shadow-sm bg-white">
          <div className="card-body">
            <div className="bg-[rgb(146,217,253)] w-[112px] h-[112px] rounded-lg" />
            <h2 className="card-title text-black">{item.title}</h2>
            <p className="text-black">{item.description}</p>
            <div className="card-actions">
              <button
                style={{ backgroundColor: item.color, border: item.color }}
                className={`w-full rounded-full py-2 font-medium btn ${
                  item.btn === "Coming Soon"
                    ? "border-[#0288D1] text-[#0288D1] bg-white"
                    : "hover:opacity-90"
                }`}
              >
                {item.btn}
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ConsultationCard;
