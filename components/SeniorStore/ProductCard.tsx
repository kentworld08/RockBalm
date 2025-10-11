import React from "react";

const ProductCard = () => {
  const LabTestCardData = [
    {
      title: "Blood Pressure Monitors",
      amount: "N 15,000",
      color: "from-[#C5E5FF] to-[#F8F8F8]",
    },
    {
      title: "Blood Pressure Monitors",
      amount: "N 15,000",
      color: "from-[#C5E5FF] to-[#F8F8F8]",
    },
  ];

  return (
    <div>
      {" "}
      <div className="flex flex-col md:flex-row gap-5 md:gap-[14.09px] text-left justify-items-center">
        {LabTestCardData.map((item, index) => (
          <div
            key={index}
            className="card w-[20rem] shadow-sm p-[8.47px] font-inter text-primary"
          >
            <div
              className={`bg-gradient-to-b h-[261.58px] rounded-[13.32px] ${item.color}`}
            />
            <div className="mt-[16.88px] flex items-center justify-between text-[#595959]">
              <h2 className="font-semibold text-[14px] md:text-[12px] md:w-[130px]">
                {item.title}
              </h2>
              <p className="font-medium text-[14px]">{item.amount}</p>
            </div>
            <button className="btn bg-secondary rounded-full w-full border-secondary mt-5">
              View Details
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductCard;
