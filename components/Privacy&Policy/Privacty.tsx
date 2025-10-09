import React from "react";

const Privacy = () => {
  const data = [
    {
      id: 1,
      title: "Introduction",
      description:
        "To revolutionie healthcare accessibility and redefine the pharmacy experience by leveraging technology to provide personalied, reliable and high quality healthcare solutions to every individual. Commitment to making healthcare accessible, easy to navigate and efficient online experience.",
    },
    {
      id: 2,
      title: "Introduction",
      description:
        "To revolutionie healthcare accessibility and redefine the pharmacy experience by leveraging technology to provide personalied, reliable and high quality healthcare solutions to every individual. Commitment to making healthcare accessible, easy to navigate and efficient online experience.",
    },
    {
      id: 3,
      title: "Introduction",
      description:
        "To revolutionie healthcare accessibility and redefine the pharmacy experience by leveraging technology to provide personalied, reliable and high quality healthcare solutions to every individual. Commitment to making healthcare accessible, easy to navigate and efficient online experience.",
    },
  ];

  return (
    <section className="bg-white flex justify-center items-center flex-col gap-[60px]">
      <div className="text-primary text-center px-6 pt-[120px]">
        <h1 className="font-alfa-slab font-normal md:text-[33px] -tracking-[2px]">
          Privacy Policy
        </h1>
        <p className="font-medium font-inter md:text-[22px] leading-[32px] md:w-[620px] w-[350px]">
          To revolutionie healthcare accessibility and redefine the pharmacy
          experience by leveraging technology to provide personalied, reliable
          and high quality healthcare solutions to every individual. Commitment
          to making healthcare accessible, easy to navigate and efficient online
          experience.
        </p>
      </div>
      <div className="bg-[#F8F8F8]  w-full p-6 md:p-[234px] text-primary">
        {data.map((item) => (
          <div key={item.id}>
            <h1 className="font-inter font-bold md:text-[36px]">
              {item.title}
            </h1>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Privacy;
