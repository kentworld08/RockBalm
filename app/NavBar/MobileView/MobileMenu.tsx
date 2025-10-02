"use client";

import { BsMinecartLoaded } from "react-icons/bs";
import { IoIosMenu } from "react-icons/io";
import { IoCloseSharp } from "react-icons/io5";
import SideMenu from "./SideMenu";
import { useState } from "react";

const MobileMenu = () => {
  const [isOpen, setisOpen] = useState<boolean>(false);

  const handleMenu = () => {
    setisOpen((prev) => !prev);
  };
  return (
    <div className="md:hidden relative ">
      <div className="flex gap-4 md:hidden">
        <div className="relative">
          <span className="absolute bg-primary rounded-full right-1 top-1 w-3 h-3 font-inter font-medium text-[6.46px] text-white flex items-center justify-center">
            2
          </span>
          <button className="btn bg-transparent border-none shadow-none">
            <BsMinecartLoaded className="text-[#041827] w-3 h-3" />
          </button>
        </div>
        <button onClick={handleMenu} className="cursor-pointer">
          {isOpen ? (
            <IoCloseSharp className="text-[#041827]" />
          ) : (
            <IoIosMenu className="text-[#041827]" />
          )}
        </button>
      </div>
      <div
        className={`absolute top-13 z-50 -right-6 ease-in-out transform transition-transform duration-150 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <SideMenu />
      </div>
    </div>
  );
};

export default MobileMenu;
