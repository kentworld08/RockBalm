import { IoMdCheckmarkCircleOutline } from "react-icons/io";

const Success = () => {
  return (
    <div className="w-full h-full flex justify-center items-center">
      <div className="bg-white md:w-[541px] rounded-xl p-6 flex items-center justify-center flex-col text-primary">
        <IoMdCheckmarkCircleOutline
          color="#0288D1"
          className="w-[52.8125px] h-[52.8125px]"
        />
        <h1 className="font-inter font-bold md:text-[23px] text-primary">
          Payment Successful
        </h1>
        <p className="text-center md:w-[300px]">
          Your transaction has been processed Successfully. A confirmation email
          has been sent to your inbox
        </p>
        <div className="bg-[#F3F5F7] w-full rounded-xl p-6 my-[30px]">
          <div className="flex justify-between mb-2">
            <p>Reference</p>
            <p>ehfycyjudhs</p>
          </div>
          <div className="flex justify-between">
            <p>Status</p>
            <p className="text-secondary font-semibold">SUCCESS</p>
          </div>
        </div>
        <div className="flex gap-4">
          <button className="btn bg-secondary border-secondary rounded-full md:w-[177px] text-white">
            View Orders
          </button>
          <button className="btn bg-transparent border-primary text-primary rounded-full md:w-[177px]">
            View Orders
          </button>
        </div>
      </div>
    </div>
  );
};

export default Success;
