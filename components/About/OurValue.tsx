import Image from "next/image";
import { IoIosCheckmark } from "react-icons/io";

const OurValue = () => {
  const Data = [
    {
      title: "Compensation:",
      description: "Covers lab diagnostics and common medications",
    },
    {
      title: "Access to Partner Hospitals:",
      description: "Treatment available at top hospitals",
    },
    {
      title: "Medication & Lab Tests:",
      description: "Covers lab diagnostics and common medications",
    },
    {
      title: "24/7 Emergency Service:",
      description: "Emergency services available round the clock",
    },
    {
      title: "Telemedicine Support:",
      description: "Virtual doctor consultation at your convenience.",
    },
  ];

  return (
    <div className="bg-[#F9F9F9] p-6 text-primary md:p-[84.5px]">
      <h1 className="font-alfa-slab font-normal md:text-[39px]">Our Value</h1>
      <div className="flex flex-col md:flex-row md:px-[146px] md:gap-[229px] justify-between py-[82px] w-full p-6 gap-7">
        <figure className="rounded-xl">
          <Image
            src="/default-img.png"
            alt="Our story"
            height={456}
            width={548}
            className="object-contain rounded-xl"
          />
        </figure>
        <div>
          {Data.map((item) => (
            <ul key={item.title} className="flex gap-2">
              <div className="w-[20px] h-[20px] rounded-full bg-secondary flex items-center justify-center">
                <IoIosCheckmark color="white" size={20} />
              </div>
              <li className="text-left">
                <strong>{item.title}</strong>
                <p>{item.description}</p>
              </li>
            </ul>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurValue;
