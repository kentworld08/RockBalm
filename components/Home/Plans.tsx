import { IoIosCheckmark } from "react-icons/io";
import { planCardData } from "./Data";

const Plans = () => {
  return (
    <main className="bg-white flex justify-center items-center p-[84.5px] flex-col gap-[60px]">
      <div className="text-primary text-center ">
        <h1 className="font-alfa-slab font-normal text-[33px] -tracking-[2px]">
          Plans
        </h1>
        <p className="font-medium font-inter md:text-[22px] leading-[32px] md:w-[560px] w-[350px]">
          We offer a range of subscriptions with convenient pricing for you to
          choose from.
        </p>
      </div>
      <div className="flex flex-col md:flex-row items-center gap-[18px]">
        {planCardData.map((item) => (
          <div
            key={item.id}
            className={`card w-[321.91px] shadow-sm p-[7.58px] ${
              item.id === 2 ? "md:h-[602px]" : "h-[525px]"
            }`}
          >
            <div
              className={`card-body pt-[117px] px-[14.33px] bg-gradient-to-b rounded-[11.8px] ${
                item.id === 2
                  ? "from-[#C5E5FF] to-[#F8F8F8]"
                  : "from-[#F0F0F0] to-[#FBFBFB]"
              }`}
            >
              <div className="mb-[45.78px]">
                <button className="btn bg-rockbalm-mid rounded-full text-white font-medium md:text-[13.48px] btn-block">
                  {item.btn}
                </button>
              </div>

              <ul className="mt-6 flex flex-col gap-2 text-xs">
                {item.list.map((item, index) => (
                  <li key={index} className="flex gap-2 ">
                    <div className="w-2.5 h-2.5 rounded-full bg-secondary items-center flex justify-center">
                      <IoIosCheckmark color="white" />
                    </div>
                    <span className="text-primary">
                      <h1 className="inline-block font-semibold text-[13.48px]">
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
      <button className="btn bg-secondary border-secondary rounded-full">
        View All Plans
      </button>
    </main>
  );
};

export default Plans;
