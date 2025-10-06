import { BsMinecartLoaded } from "react-icons/bs";
import { CiBellOn } from "react-icons/ci";
const DashboardNav = () => {
  return (
    <div className="h-[189px] items-center flex px-6">
      <div className="flex items-center justify-between w-full">
        <div className="">
          <h1 className="font-inter font-normal md:text-[28px]">
            Hey there, Christain
          </h1>
          <p className="font-light md:text-[18px] text-[#000000B2]/70">
            Your health is personal, so your experience should be too
          </p>
        </div>
        <div className="relative ">
          <div className="flex gap-4 ">
            <button className="btn bg-transparent rounded-full border-[1px] w-[50px] h-[50px] border-[#EEEEEE] shadow-none text-black">
              <CiBellOn />
            </button>
            <div className="relative">
              <span className="absolute bg-primary rounded-full right-1 top-1 w-3 h-3 font-inter font-medium text-[6.46px] text-white flex items-center justify-center">
                2
              </span>
              <button className="btn bg-transparent rounded-full border-[1px] w-[50px] h-[50px] border-[#EEEEEE] shadow-none">
                <BsMinecartLoaded className="text-[#041827] w-3 h-3" />
              </button>
            </div>

            <button className="btn bg-black rounded-full border-[1px] w-[50px] h-[50px] border-[#EEEEEE] shadow-none text-white">
              C
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardNav;
