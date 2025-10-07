import { IoIosCheckmark } from "react-icons/io";
import { CareplanCardData } from "../Home/Data";

const CarePlans = () => {
  return (
    <section className="bg-[#F9F9F9] flex justify-center items-center p-[84.5px] flex-col gap-[60px]">
      <div className="text-primary text-center px-6">
        <h1 className="font-alfa-slab font-normal md:text-[33px] -tracking-[2px]">
          Choose Your Care Plan
        </h1>
      </div>
      <div className="flex flex-col md:flex-row items-center gap-[18px] flex-wrap justify-center">
        {CareplanCardData.map((item) => (
          <div
            key={item.id}
            className="card w-[321.91px] shadow-sm p-[7.58px] h-[525px]"
          >
            <div
              className={`card-body px-[14.33px] bg-gradient-to-b rounded-[11.8px] ${
                item.id === 2
                  ? "from-[#C5E5FF] to-[#F8F8F8]"
                  : "from-[#F0F0F0] to-[#FBFBFB]"
              }`}
            >
              <div className="w-full text-start md:text-[16px] font-bold font-inter">
                <h2 className="text-primary">Standard Care</h2>
                <p className="font-inter font-medium md:text-[16px] text-[#004F6196]/59">
                  Duration: 3
                </p>
                <p className="text-[#004F6199]/60">
                  N <strong className="text-primary">{item.plan}</strong> /month
                </p>
              </div>
              <div className="mb-[45.78px]">
                <button
                  className={`btn rounded-full text-white font-medium md:text-[13.48px] btn-block ${
                    item.id === 2
                      ? "bg-secondary border-secondary"
                      : "bg-primary border-primary"
                  }`}
                >
                  {item.btn}
                </button>
              </div>

              <ul className="mt-6 flex flex-col gap-2 text-xs">
                {item.list.map((item, index) => (
                  <li key={index} className="flex gap-2 ">
                    <div className="w-2.5 h-2.5 rounded-full bg-secondary items-center flex justify-center">
                      <IoIosCheckmark color="white" />
                    </div>
                    <span className="text-primary text-left">
                      <h1 className="inline-block font-semibold text-[13.48px] text-start">
                        {item.title}
                      </h1>{" "}
                      {item.description}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CarePlans;
