"use client";
import { IoSettingsOutline } from "react-icons/io5";
import { PiAddressBookTabsLight } from "react-icons/pi";
import { MdHistory } from "react-icons/md";
import { GrPlan } from "react-icons/gr";
import { FaBorderAll } from "react-icons/fa6";
import { RxDashboard } from "react-icons/rx";
import { AiOutlineLogout } from "react-icons/ai";
import { MdOutlineKeyboardBackspace } from "react-icons/md";
interface SidebarProps {
  setActive: React.Dispatch<React.SetStateAction<string>>;
}

const DashboardSidebar: React.FC<SidebarProps> = ({ setActive }) => {
  const DashboardLinks = [
    { icon: <RxDashboard />, title: "Dashboard" },
    { icon: <FaBorderAll />, title: "Order" },
    { icon: <GrPlan />, title: "Plans" },
    { icon: <MdHistory />, title: "History" },
    { icon: <PiAddressBookTabsLight />, title: "Address" },
    { icon: <IoSettingsOutline />, title: "Settings" },
  ];

  return (
    <div className="md:w-[330px] h-screen bg-white border border-[#E0E0E0] shadow-sm flex flex-col">
      <div className="h-[189px] flex justify-center items-center border-b border-[#E0E0E0]">
        <h1 className="text-center text-primary text-xl font-semibold">
          RockBalm
        </h1>
      </div>

      <div className="flex-1 overflow-y-auto px-[29px] py-6">
        <div className="flex flex-col gap-6">
          {DashboardLinks.map((lnk) => (
            <button
              onClick={() => setActive(lnk.title.toLowerCase())}
              key={lnk.title}
              className="flex items-center gap-3 text-[#040D0F] transition-colors font-inter font-normal md:text-[18px] hover:bg-secondary px-[20px] w-full "
            >
              {lnk.icon}
              <span>{lnk.title}</span>
            </button>
          ))}
        </div>
      </div>

      <div className="px-[20px] py-6 border-t border-[#E0E0E0]">
        <button className="btn bg-transparent border-none shadow-none justify-start gap-2 w-full text-left text-red-500 mb-3 hover:underline">
          <AiOutlineLogout />
          Logout
        </button>
        <button className=" btn shadow w-full bg-[#0288D1]/10 border-none text-[#0288D1] rounded-md justify-start text-start gap-2.5">
          <MdOutlineKeyboardBackspace size={24} />
          Back to Home
        </button>
      </div>
    </div>
  );
};

export default DashboardSidebar;
