const Consultation = () => {
  const consultationCardData = [
    {
      title: "Scheduled Consultations",
      description: "set a meeting date and time that suits you",
    },
    {
      title: "Expert Counselling",
      description: "Speak with licenced doctors, pharmacists, nutritionist",
    },
    {
      title: "Optimise health journey",
      description:
        "Regular check-ins and vital monitoring to track health status.",
    },
  ];

  return (
    <section className="bg-white flex justify-center items-center p-[84.5px] flex-col gap-[60px]">
      <div className="text-primary text-center px-6">
        <h1 className="font-alfa-slab font-normal text-[33px] -tracking-[2px]">
          Consultation
        </h1>
        <p className="font-medium font-inter md:text-[22px] leading-[32px] md:w-[560px] w-[350px]">
          Get access to a wide range of expert medical professionals for health
          management
        </p>
      </div>

      <div className="flex flex-col md:flex-row gap-[14.09px]">
        {consultationCardData.map((item, index) => (
          <div
            key={index}
            className="card w-[21.7rem] shadow-sm p-[8.47px] font-inter text-primary mb-[16.88px]"
          >
            <div className="bg-gradient-to-b from-[#C5E5FF] to-[#F8F8F8] h-[261.58px] rounded-[13.32px]" />
            <div className="mt-[16.88px]">
              <h2 className="font-semibold md:text-[24px] w-full">
                {item.title}
              </h2>
              <p className="font-medium md:text-[14px] mt-[13.03px] mb-[37px]">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
      <button className="btn bg-secondary rounded-full border-secondary">
        Book a test
      </button>
    </section>
  );
};

export default Consultation;
