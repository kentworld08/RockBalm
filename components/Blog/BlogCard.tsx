import React from "react";

const BlogCard = () => {
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
    <div>
      {" "}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-[14.09px] text-left md:pt-[176px] justify-items-center mt-10">
        {BlogCardData.map((item, index) => (
          <div
            key={index}
            className="card w-[21.7rem] shadow-sm p-[8.47px] font-inter text-primary mb-[16.88px]"
          >
            <div
              className={`bg-gradient-to-b h-[261.58px] rounded-[13.32px] ${item.color}`}
            />
            <div className="mt-[16.88px]">
              <h2 className="font-semibold text-[14px] md:text-[12px] md:w-[200px] text-primary">
                {item.title}
              </h2>
              <p className="font-medium text-[14px] mt-[13.03px] mb-[37px] text-[#3F4647A6]/65">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
      <button className="btn bg-secondary border-secondary rounded-full w-[187px] mt-[40px] md:mt-[76.78px]">
        Learn More
      </button>
    </div>
  );
};

export default BlogCard;
