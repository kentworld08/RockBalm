import Image from "next/image";
import { IoIosCheckmark } from "react-icons/io";

const OurValue = () => {
  const Data = [
    {
      title: "Compensation:",
      description:
        "Every senior is treated like family. This is the forefront of our values",
    },
    {
      title: "Access:",
      description:
        "We bring licensed doctors, pharmacists, nutritionists, and physiotherapists to your doorstep.",
    },
    {
      title: "Excellence:",
      description:
        "We work only with vetted healthcare professionals and provide high-quality products and services.",
    },
    {
      title: "Innovation:",
      description:
        "We use technology to simplify health management, from booking consultations to ordering medications.",
    },
    {
      title: "Trust:",
      description:
        "For us relationship matters. We pride ourselves in being reliable and trustworthy.",
    },
  ];

  return (
    <div className="bg-[#F9F9F9] p-6 text-primary md:p-[84.5px] ">
      <h1 className="font-alfa-slab font-normal md:text-[39px]">Our Value</h1>
      <div className="flex flex-col md:flex-row md:gap-[49px] justify-between py-[82px] w-full p-6 gap-7">
        <figure className="rounded-xl">
          <Image
            src="/default-img.png"
            alt="Our story"
            height={456}
            width={548}
            className="object-contain rounded-xl"
          />
        </figure>
        <div className="flex flex-col gap-8">
          {Data.map((item) => (
            <ul key={item.title} className="flex gap-2">
              <div className="w-[20px] h-[20px] rounded-full bg-secondary flex items-center justify-center">
                <IoIosCheckmark color="white" size={20} />
              </div>
              <li className="text-left">
                <strong>{item.title} </strong> {item.description}
              </li>
            </ul>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurValue;
