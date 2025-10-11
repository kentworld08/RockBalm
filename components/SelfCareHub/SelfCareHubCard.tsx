import { IoChevronForward } from "react-icons/io5";
import { SelfCareHubCardData } from "../SelfCareHubCardData";
import Link from "next/link";

const SelfCareHubCard = () => {
  return (
    <section className="bg-white flex justify-center items-center px-4 py-12 flex-col gap-[60px]">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center items-center gap-[14.09px]">
        {SelfCareHubCardData.map((item, index) => (
          <div
            key={index}
            className="card w-full max-w-[21.7rem] shadow-sm p-[8.47px] font-inter text-primary mb-[16.88px] mx-auto"
          >
            <div
              className={`bg-gradient-to-b h-[261.58px] rounded-[13.32px] p-[15.54px] pt-[76.49px] text-primary ${item.color}`}
            >
              <h2 className="font-alfa-slab font-normal md:text-[20px]">
                {item.title}
              </h2>
              <p className="font-medium md:text-[12px] mt-[13.03px] mb-[37px] text-[#00000099]">
                {item.description}
              </p>
            </div>
            <div className="mt-[16.88px] text-primary flex justify-between items-center">
              <h2 className="font-bold md:text-[18px]">{item.label}</h2>
              <Link
                href={`/SelfCareHub/${item.id}`}
                className="btn border-none text-primary w-[44.7px] h-[44.7px] rounded-full bg-[#C5E5FF] flex justify-center items-center"
              >
                <IoChevronForward />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SelfCareHubCard;
