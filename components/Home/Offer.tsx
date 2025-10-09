import Image from "next/image";

const cardData = [
  {
    title: "Geriatric Care plans",
    description: "Easily search, order, and manage your medications.",
    image: "/Geriatric.png",
    bg: "#C5E5FF",
  },
  {
    title: "Medical Consultation",
    description:
      "Connect your elder ones with doctors, pharmacists, and nutritionists from the comfort of your home.",
    image: "/Medical.png",
    bg: "#D6FAD5",
  },
  {
    title: "Lab Testing",
    description:
      "Schedule lab tests with trusted local labs quickly and securely.",
    image: "/Seniors.png",
    bg: "#F1F0FC",
  },
  {
    title: "Seniors Store",
    description:
      "Shop from our curated marketplace for health products and supplies for your parents.",
    image: "/care.jpg",
    bg: "#FFEFDF",
  },
];

const Offer = () => {
  return (
    <section className="bg-white flex justify-center items-center p-[84.5px] flex-col gap-[60px]">
      <div className="text-primary text-center px-6 flex flex-col items-center justify-center">
        <h1 className="font-alfa-slab font-normal md:text-[33px] -tracking-[2px] md:w-[300px]">
          What we Offer{" "}
        </h1>
        <p className="w-[300px] md:w-[600px] font-inter font-medium md:text-[22px]">
          We provide everything you need to monitor, manage, and improve your
          elder’s health in one platform.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 gap-4">
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

export default Offer;
