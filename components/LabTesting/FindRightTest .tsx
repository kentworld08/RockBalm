import PlayingProgressBar from "@/app/LabTesting/ProgressBar ";
import LabTestCard from "./LabTestCard";

const FindRightTest = () => {
  const category = [
    "Flu medications",
    "Nutrition & Wellness",
    "Chronic Care",
    "Mobility & Daily Living",
    "Monitoring Devices",
  ];
  return (
    <div className="text-primary bg-[#F8F8F8] p-6 pt-[124px] pb-16">
      <div className="flex justify-center items-center flex-col">
        <h1 className="text-center md:text-4xl font-alfa-slab mb-2.5">
          Find the Right Test for You
        </h1>
        <p className="font-inter font-medium md:text-[18px] md:w-[625px] text-center">
          Browse our comprehensive range of lab tests and health screenings
        </p>
        <div className="relative mt-9">
          <input
            type="text"
            id="search"
            placeholder="Search Product"
            className="bg-white px-10 text-black py-4 md:w-[460px] w-full border border-[#00000038]/22 md:text-[14px] font-inter rounded-full text-center placeholder:text-gray-500"
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-5 h-5 absolute left-4 top-1/2 -translate-y-1/2 text-gray-500"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 104.5 4.5a7.5 7.5 0 0012.15 12.15z"
            />
          </svg>
        </div>
      </div>
      <div className="flex gap-[131px] flex-col md:flex-row mt-15">
        <div className="w-full md:w-[319px]">
          <h1 className="font-bold">Filter Options</h1>
          <hr className="my-[17px]" />
          <h3 className="font-bold">Categories</h3>
          <ul>
            {category.map((cat, index) => (
              <li
                key={index}
                className="text-primary justify-between px-4 w-full flex items-center"
              >
                {cat}{" "}
                <button className="btn bg-transparent border-none text-primary shadow-none">
                  +
                </button>
              </li>
            ))}
          </ul>
          <hr className="my-[17px]" />
          <h2 className="font-bold">Price Page</h2>
          <div className="w-full max-w-[220px] mt-5">
            <PlayingProgressBar progress={60} />
            <div className="mt-5 flex items-center gap-2">
              <div className="relative w-full">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 text-sm">
                  ₦
                </span>
                <input
                  type="number"
                  name="minAmount"
                  id="minAmount"
                  placeholder="0"
                  className="py-[7.33px] border border-[#8B8B8B] rounded-full w-full pl-7 pr-2 focus:outline-none"
                />
              </div>
              <span className="text-gray-600">-</span>
              <div className="relative w-full">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 text-sm">
                  ₦
                </span>
                <input
                  type="number"
                  name="maxAmount"
                  id="maxAmount"
                  placeholder="1,000 000"
                  className="py-[7.33px] border border-[#8B8B8B] rounded-full w-full pl-7 pr-2 focus:outline-none"
                />
              </div>
            </div>
          </div>
          <hr className="my-[17px]" />
          <p className="text-[#1AB3FF] cursor-pointer">Clear Filter</p>
        </div>
        <div>
          <h1 className="font-bold font-inter md:text-[30px] text-primary">
            Lab Test(2)
          </h1>
          <LabTestCard />
        </div>
      </div>
    </div>
  );
};

export default FindRightTest;
