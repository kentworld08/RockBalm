"use client";

import Image from "next/image";
import { features } from "./Data";
import { useRouter } from "next/navigation";

const Hero = () => {
  const router = useRouter();

  const handleExplore = () => {
    router.push("/CheckOut");
  };
  return (
    <div className="px-6">
      <div className="bg-[url('/hero-bg.png')] bg-cover bg-center w-full h-[902px] rounded-[26px] flex flex-col md:flex-row md:justify-between space-y-10 justify-center items-center p-4 mt-[94px] md:mt-[80px] space-x-10">
        <div className="w-full md:w-[418px] md:mt-[535px] text-primary md:text-start flex flex-col items-center text-center md:items-start justify-center md:ml-[50px]">
          <h1 className="font-normal text-[20px] md:text-[46px] leading-[56px] font-alfa-slab text-wrap">
            <span className="text-white">Complete</span> Geriatric Care:
            Consult, Shop & Thrive
          </h1>
          <p className="w-full font-inter font-medium text-[clamp(14px,_1vw,_22px)] md:w-[300px] mt-[12.02px]">
            We provide accessible, compassionate care for your elder one,
            anywhere they are.
          </p>
          <button
            onClick={handleExplore}
            className="btn bg-tertiary border-tertiary rounded-full text-primary md:w-[257.12px] md:h-[64.5px] py-3 px-[57px] font-inter font-semibold text-[clamp(14px,_0.5vw,_17.37px)] mt-[32.98px] text-nowrap"
          >
            Explore Our Plans
          </button>
        </div>
        <div className="md:mt-[278px] md:w-[344.87px] flex flex-col gap-6 md:mr-[60px]">
          {features.map((feat) => (
            <div
              key={feat.title}
              className="bg-white/20 backdrop-blur-md border border-white/30 rounded-xl shadow-lg flex overflow-hidden h-[152.51px]"
            >
              <div className="mx-[16.49px] my-[20.61px]">
                <button
                  onClick={() => router.push(feat.lnk)}
                  className="btn bg-tertiary rounded-full border-tertiary text-primary font-inter font-bold text-[10px] h-[30.23px] mb-[19.24px]"
                >
                  {feat.title}
                </button>
                <p className="text-white font-semibold text-[10px] font-inter w-[182.74px]">
                  {feat.description}
                </p>
              </div>
              <Image
                src={feat.img || "/default-img.png"}
                alt={feat.title || "Feature image"}
                width={143}
                height={213}
                className="object-cover"
              />
            </div>
          ))}{" "}
        </div>
      </div>
    </div>
  );
};

export default Hero;
