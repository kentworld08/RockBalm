import { IoChevronForward } from "react-icons/io5";

const SelfCareHub = () => {
  const consultationCardData = [
    {
      title: "Body Mass Index (BMI)",
      description:
        "The Body Mass Index (BMI) Checker is a quick tool that helps you determine your body weight category based on your height and weight.",
      label: "Calculate my BMI",
      color: "from-[#C5E5FF] to-[#F8F8F8]",
    },
    {
      title: "Calorie",
      description:
        "Our Calorie Checker helps you keep track of your daily calorie intake by providing personalized recommendations based on your age, gender, weight, height, and activity level.",
      label: "Calculate my Calorie",
      color: "from-[#FEFDC4] to-[#F8F8F8]",
    },

    {
      title: "Ovulation Checker",
      description:
        "The Ovulation Checker is designed to help you predict your most fertile days by tracking your menstrual cycle.",
      label: "Calculate my BMI",
      color: "from-[#F1F0FC] to-[#F8F8F8]",
    },
  ];

  return (
    <section className="bg-white flex justify-center items-center p-[84.5px] flex-col gap-[60px]">
      <div className="text-primary text-center px-6">
        <h1 className="font-alfa-slab font-normal text-[33px] -tracking-[2px]">
          Self Care Hub
        </h1>
        <p className="font-medium font-inter md:text-[22px] leading-[32px] md:w-[560px] w-[350px]">
          Take charge of your well-being with our Self Care Hub. Access tools,
          calculators, and resources to stay informed.
        </p>
      </div>
      <div className="flex flex-col md:flex-row gap-[14.09px]">
        {consultationCardData.map((item, index) => (
          <div
            key={index}
            className="card w-[21.7rem] shadow-sm p-[8.47px] font-inter text-primary mb-[16.88px]"
          >
            <div
              className={`bg-gradient-to-b h-[261.58px] rounded-[13.32px] p-[15.54px] pt-[76.49px] text-primary ${item.color}`}
            >
              <h2 className="font-alfa-slab font-normal md:text-[20px]">
                {" "}
                {item.title}
              </h2>
              <p className="font-medium md:text-[12px] mt-[13.03px] mb-[37px] text-[#00000099]">
                {item.description}
              </p>
            </div>
            <div className="mt-[16.88px] text-primary flex justify-between items-center">
              <h2 className="font-bold md:text-[18px] w-full">{item.label}</h2>
              <button className="btn border-none text-primary w-[44.7px] h-[44.7px] rounded-full bg-[#C5E5FF] flex justify-center items-center">
                <IoChevronForward />
              </button>
            </div>
          </div>
        ))}
      </div>
      <button className="bg-secondary border-secondary text-white rounded-full btn font-inter font-semibold md:text-[14px]">
        View All Calculators
      </button>
    </section>
  );
};

export default SelfCareHub;
