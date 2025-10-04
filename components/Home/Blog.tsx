const Blog = () => {
  const BlogCardData = [
    {
      title: "Why Regular Health Checkups Matter for Elders",
      description:
        "See how regular checkups prevent health risks and bring families peace of mind.",
      color: "from-[#C5E5FF] to-[#F8F8F8]",
    },
    {
      title: "Why Regular Health Checkups Matter for Elders",
      description:
        "See how regular checkups prevent health risks and bring families peace of mind.",
      color: "from-[#FEFDC4] to-[#F8F8F8]",
    },
    {
      title: "Why Regular Health Checkups Matter for Elders",
      description:
        "See how regular checkups prevent health risks and bring families peace of mind.",
      color: "from-[#F1F0FC] to-[#F8F8F8]",
    },
  ];

  return (
    <section className="bg-white flex justify-center items-center p-[84.5px] flex-col gap-[60px]">
      <div className="text-primary text-center px-6">
        <h1 className="font-alfa-slab font-normal text-[33px] -tracking-[2px]">
          Blog
        </h1>
        <p className="font-medium font-inter md:text-[22px] leading-[32px] md:w-[560px] w-[350px]">
          Tips, insights, and expert advice to help seniors live healthier,
          fuller lives.
        </p>
      </div>
      <div className="flex flex-col md:flex-row gap-[14.09px]">
        {BlogCardData.map((item, index) => (
          <div
            key={index}
            className="card w-[21.7rem] shadow-sm p-[8.47px] font-inter text-primary mb-[16.88px]"
          >
            <div
              className={`bg-gradient-to-b h-[261.58px] rounded-[13.32px] ${item.color}`}
            />
            <div className="mt-[16.88px]">
              <h2 className="font-bold md:text-[16px] md:w-[242px] font-inter">
                {item.title}
              </h2>
              <p className="font-medium md:text-[14px] mt-[13.03px] mb-[37px]">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
      <button className="bg-secondary border-secondary text-white rounded-full btn">
        Read More On Our Blog
      </button>
    </section>
  );
};

export default Blog;
