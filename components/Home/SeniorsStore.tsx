const SeniorsStore = () => {
  const consultationCardData = [
    {
      title: "Blood",
      description: "Pressure Monitor",
      amount: "$15,000",
    },
    {
      title: "Blood",
      description: "Pressure Monitor",
      amount: "$15,000",
    },
    {
      title: "Blood",
      description: "Pressure Monitor",
      amount: "$15,000",
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
            <div className="bg-gradient-to-b from-[#C5E5FF] to-[#F8F8F8]w-[20rem] h-[261.58px] rounded-[13.32px]" />
            <div className="mt-[16.88px] font-inter p-2">
              <h2 className="font-bold md:text-[16px] w-full">{item.title}</h2>
              <div className="font-medium md:text-[14px] mt-[13.03px] mb-[37px] flex justify-between items-center">
                <p>{item.description}</p>
                <p>{item.amount}</p>
              </div>
              <button className="btn bg-secondary rounded-full border-secondary w-full">
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SeniorsStore;
