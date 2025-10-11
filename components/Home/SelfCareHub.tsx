"use client";

import { IoChevronForward } from "react-icons/io5";
import { SelfCareHubCardData } from "../SelfCareHubCardData";
import { useState } from "react";
import Link from "next/link";

const SelfCareHub = () => {
  const [count, setCount] = useState(3);
  const data = SelfCareHubCardData.slice(0, count);

  return (
    <section className="bg-white flex flex-col items-center gap-12 px-4 py-12 md:px-[84.5px] md:py-[84.5px]">
      <div className="text-primary text-center px-6 max-w-3xl">
        <h1 className="font-alfa-slab font-normal text-[33px] -tracking-[2px]">
          Self Care Hub
        </h1>
        <p className="font-medium font-inter md:text-[22px] leading-[32px]">
          Take charge of your well-being with our Self Care Hub. Access tools,
          calculators, and resources to stay informed.
        </p>
      </div>

      <div className="w-full max-w-[1200px]">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[14.09px] w-full justify-items-stretch">
          {data.map((item, index) => (
            <div
              key={index}
              className="card w-full shadow-sm p-[8.47px] font-inter text-primary"
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
      </div>

      <button
        onClick={() => {
          if (count < SelfCareHubCardData.length) setCount((p) => p + 2);
          else setCount(3);
        }}
        className="bg-secondary border-secondary text-white rounded-full btn font-inter font-semibold md:text-[14px]"
      >
        {count >= SelfCareHubCardData.length
          ? "View less"
          : "View more Calculators"}
      </button>
    </section>
  );
};

export default SelfCareHub;
