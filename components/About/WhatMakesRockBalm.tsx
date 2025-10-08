import { BiHealth } from "react-icons/bi";

const WhatMakesRockBalm = () => {
  const data = [
    {
      icon: <BiHealth />,
      title: "Flexible Care Plans",
      description:
        "Choose from subscription tiers tailored to your needs and budget.",
      color: "#C5E5FF",
    },
    {
      icon: <BiHealth />,
      title: "Elders Store",
      description:
        "Shop medications, supplements, and senior-friendly health products in one trusted place.",
      color: "#D6FAD5",
    },
    {
      icon: <BiHealth />,
      title: "Wellness Tools",
      description:
        "Use our free calculators and guides to track BMI, monitor health, and stay informed. This is open to all",
      color: "#F1F0FC",
    },
    {
      icon: <BiHealth />,
      title: "Home-Visit Consultations",
      description:
        "Get care from doctors, pharmacists, nutritionists, and physiotherapists at home.",
      color: "#FFEFDF",
    },
  ];
  return (
    <div className="text-primary p-6 bg-[#F8F8F8] w-full text-center items-center justify-center flex flex-col md:p-[84.5px]">
      <h1 className="font-alfa-slab font-normal md:text-4xl md:w-[450px]">
        What Makes Rockbalm Health Different
      </h1>
      <p className="md:w-[776px] font-inter md:text-[22px] font-medium mt-4">
        Unlike traditional clinics, Rockbalm Health offers:
      </p>
      <div className="grid md:grid-cols-2 gap-4 mt-10">
        {data.map((item) => (
          <div
            key={item.title}
            className="card md:w-96 text-left text-[#041827]"
            style={{ backgroundColor: item.color }}
          >
            <div className="card-body md:w-[300px]">
              <div className="card-title">{item.icon}</div>
              <h1 className="font-bold">{item.title}</h1>
              <p>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
      <p className="mt-10">
        We make managing senior health easier for caregivers, families, and
        seniors themselves.
      </p>
    </div>
  );
};
export default WhatMakesRockBalm;
