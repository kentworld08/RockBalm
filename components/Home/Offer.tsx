import Image from "next/image";

const offer = [
  {
    title: "Geriatric Care plans",
    description: "Easily search, order, and manage your medications.",
    img: "/Geriatric.png",
  },
  {
    title: "Medical Consultation",
    description:
      "Connect your elder ones with doctors, pharmacists, and nutritionists from the comfort of your home.",
    img: "/Medical.png",
  },
  {
    title: "Lab Testing",
    description:
      "Schedule lab tests with trusted local labs quickly and securely.",
    img: "/Lab.png",
  },
  {
    title: "Seniors Store",
    description:
      "Shop from our curated marketplace for health products and supplies for your parents.",
    img: "/Seniors.png",
  },
];

const Offer = () => {
  return (
    <main className="flex flex-col items-center">
      <div>
        <h1 className="font-alfa-slab md:text-[39px] font-normal -tracking-2 text-rockbalm-mid text-center">
          What we Offer
        </h1>
        <p className="text-center text-rockbalm-mid font-inter font-medium md:text-[22px]">
          We provide everything you need to monitor, manage, and improve your
          elder’s health in one platform.
        </p>
      </div>
      <div className="grid md:grid-cols-2 gap-[40px] md:w-[1178px]">
        {offer.map((item) => (
          <div
            key={item.title}
            className="bg-[#F1F0FC] md:w-[569px] relative rounded-[20px] p-[42px]"
          >
            <h2 className="font-inter font-extrabold text-[33px] w-[189px] text-primary leading-[40px]">
              {item.title}
            </h2>
            <figure className="absolute top-[85px] left-[289px]">
              <Image
                src={item.img}
                alt="Geriatric care plans"
                height={207}
                width={207}
                className="object-contain w-[207px] h-[207px]"
              />
            </figure>
            <p className="mt-[199px] text-primary font-semibold font-inter">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </main>
  );
};

export default Offer;
