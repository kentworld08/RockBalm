import React from "react";

const WhoWeAre = () => {
  return (
    <div className="md:p-[84px] p-6 flex flex-col gap-4">
      <div className="text-primary font-inter">
        <h1 className="font-bold md:text-[40px]">Who we are</h1>
        <p className="text-[#272635] font-normal">
          Rockbalm Grace Clinic is a non-profit initiative providing monthly
          free medications to those in need.
        </p>
      </div>
      <div className="text-primary font-inter">
        <h1 className="font-bold md:text-[40px]">Our Inspiration</h1>
        <p className="text-[#272635] font-normal">
          Inspired by our faith in Jesus Christ, we believe in God's power to
          heal and His desire for His children to live in good health. While He
          provides healing, He also calls us to care for our bodies, including
          through proper nutrition and, when necessary, medication. This
          initiative is an expression of our faith in His love and healing
          power.
        </p>
      </div>
      <div className="flex flex-col md:flex-row justify-center items-center">
        <div className="flex flex-col md:flex-row justify-between gap-6 ">
          <div className="card w-full md:w-[35rem] bg-[#EBEBEB] card-lg shadow-sm">
            <div className="card-body">
              <h2 className="card-title">Large Card</h2>
              <p>
                A card component has a figure, a body part, and inside body
                there are title and actions parts
              </p>
            </div>
          </div>
          <div>
            <div className="card w-full md:w-[30rem] bg-[#EBEBEB] card-md shadow-sm mb-5">
              <div className="card-body">
                <h2 className="card-title">Medium Card</h2>
                <p>
                  A card component has a figure, a body part, and inside body
                  there are title and actions parts
                </p>
              </div>
            </div>
            <div className="card w-full md:w-[30rem] bg-[#EBEBEB] card-md shadow-sm">
              <div className="card-body">
                <h2 className="card-title">Medium Card</h2>
                <p>
                  A card component has a figure, a body part, and inside body
                  there are title and actions parts
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="text-primary font-inter">
        <h1 className="font-bold md:text-[40px]">WHAT WE HOPE TO ACHIEVE</h1>
        <p className="text-[#272635] font-normal">
          We aim to ease the financial burden of healthcare by delivering free
          medications monthly to individuals with health challenges, directly to
          their homes. Rockbalm Free Clinic seeks not only to support physical
          health but also to share the love and truth of Jesus Christ.
        </p>
      </div>
    </div>
  );
};

export default WhoWeAre;
