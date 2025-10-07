import Image from "next/image";

const cardData = [
  {
    title: "Family Coordination",
    description:
      "Keep family members informed and involved in the process with regular updates and easy communication channel",
    image: "/care.jpg",
    bg: "#C5E5FF",
  },
  {
    title: "Medication Management",
    description:
      "Reminders and tracking for medications to ensure proper adherence and minimize the risk of adverse interactions.",
    image: "/care.jpg",
    bg: "#D6FAD5",
  },
  {
    title: "Health Monitoring",
    description:
      "Regular check-ins and vital monitoring to track health status and quickly identify any concerning changes.",
    image: "/care.jpg",
    bg: "#F1F0FC",
  },
  {
    title: "Cognitive Assessments",
    description:
      "Keep family members informed and involved in the care process with regular updates and easy communication channel",
    image: "/care.jpg",
    bg: "#FFEFDF",
  },
  {
    title: "Specialist Coordination",
    description:
      "Reminders and tracking for medications to ensure proper adherence and minimize the risk of adverse interactions.",
    image: "/care.jpg",
    bg: "#F8F8F8",
  },
  {
    title: "Personalized Care Plans",
    description: "Easily search, order, and manage your medications.",
    image: "/care.jpg",
    bg: "#FEFDC4",
  },
];

const ComprehensiveCareFeatures = () => {
  return (
    <section className="bg-white flex justify-center items-center p-[84.5px] flex-col gap-[60px]">
      <div className="text-primary text-center px-6">
        <h1 className="font-alfa-slab font-normal md:text-[33px] -tracking-[2px] md:w-[300px]">
          Comprehensive Care Features
        </h1>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {cardData.map((card, index) => (
          <div
            key={index}
            className="rounded-2xl shadow-sm p-4 md:p-6 text-left transition-transform duration-300 hover:-translate-y-1 md:w-[340px]"
            style={{ backgroundColor: card.bg }}
          >
            <h2 className="text-lg md:text-xl font-semibold text-primary md:w-[120px]">
              {card.title}
            </h2>

            <div className="flex justify-end">
              <Image
                src={card.image}
                alt={card.title}
                width={150}
                height={100}
                className="rounded-lg object-cover mix-blend-multiply"
              />
            </div>

            <p className="text-sm text-[#555] leading-relaxed">
              {card.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ComprehensiveCareFeatures;
