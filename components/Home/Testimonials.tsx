import Image from "next/image";
import { IoIosStar } from "react-icons/io";
import { IoChevronForwardOutline } from "react-icons/io5";
const Testimonials = () => {
  const TestimonialsCardData = [
    {
      icon: <IoIosStar color="#0288D1" />,
      name: "Emily R",
      description:
        "The lab testing service saved me so much time. I got my results quickly and the doctor was able to explain everything clearly during our vitual consultation.",
      img: "/default-img.png",
    },
    {
      icon: <IoIosStar color="#0288D1" />,
      name: "Emily R",
      description:
        "The lab testing service saved me so much time. I got my results quickly and the doctor was able to explain everything clearly during our vitual consultation.",
      img: "/default-img.png",
    },
    {
      icon: <IoIosStar color="#0288D1" />,
      name: "Emily R",
      description:
        "The lab testing service saved me so much time. I got my results quickly and the doctor was able to explain everything clearly during our vitual consultation.",
      img: "/default-img.png",
    },
  ];

  return (
    <section className="bg-white flex justify-center items-center p-[84.5px] flex-col gap-[60px]">
      <div className="text-primary text-center px-6">
        <h1 className="font-alfa-slab font-normal md:text-[33px] -tracking-[2px]">
          What Our Users Say
        </h1>
        <p className="font-medium font-inter md:text-[22px] leading-[32px] md:w-[560px] w-[350px]">
          Hear from people who have transformed their health journey with our
          platform
        </p>
      </div>
      <div className="flex flex-col md:flex-row gap-[14.09px]">
        {TestimonialsCardData.map((item, index) => (
          <div
            key={index}
            className="card w-[20.2rem] shadow-sm p-[8.47px] font-inter bg-gradient-to-b from-[#F1F0FC] to-[#F8F8F8] text-primary mb-[16.88px]"
          >
            <div className="mt-[16.88px]">
              <div className="flex gap-[3.5px]">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="w-[18px] h-[18px]">
                    {item.icon}
                  </span>
                ))}
              </div>
              <p className="font-medium md:text-[14px] mt-[13.03px] mb-[37px]">
                {item.description}
              </p>
            </div>
            <div className="flex justify-self-start items-center">
              <Image
                src={item.img}
                alt={item.name}
                height={10}
                width={10}
                className="object-contain w-[47px] h-[47px] rounded-full inline mr-[12px]"
              />

              <span className="font-inter font-bold text-[12px] text-primary">
                {item.name}
              </span>
            </div>
          </div>
        ))}
      </div>
      <div>
        <button className="btn w-[47px] h-[47px] bg-secondary rounded-full border-none mr-2">
          <IoChevronForwardOutline className="rotate-180" />
        </button>
        <button className="btn w-[47px] h-[47px] bg-secondary rounded-full border-none">
          <IoChevronForwardOutline />
        </button>
      </div>
    </section>
  );
};

export default Testimonials;
