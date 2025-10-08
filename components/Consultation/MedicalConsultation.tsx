import { IoIosCheckmark } from "react-icons/io";

const MedicalConsultation = () => {
  return (
    <section className="bg-white flex justify-center items-center p-[84.5px] flex-col gap-[60px]">
      <div className="text-primary text-center px-6 mt-7">
        <h1 className="font-alfa-slab font-normal md:text-[33px] -tracking-[2px]">
          Medical Consultation
        </h1>
        <p className="font-medium font-inter md:text-[22px] leading-[32px] md:w-[560px] w-[350px]">
          Get medication & supplement recommendations, health advice and our
          unwavering support.
        </p>
      </div>
      <div className="flex gap-4 md:gap-16 flex-col md:flex-row w-[300px] md:w-full">
        <div className="flex gap-2 text-primary md:text-[18px]">
          <div className="w-6 h-6 rounded-full bg-[#00AEEE7D]/49 flex justify-center items-center">
            {" "}
            <IoIosCheckmark color="black" size={20} />
          </div>
          Save your loved one the stress of traffic, long waiting times and
          rigorous demands on frequent hospital visits.
        </div>
        <div className="flex md:text-[18px] gap-2 text-primary">
          <div className="w-6 h-6 rounded-full bg-[#00AEEE7D]/49 flex justify-center items-center">
            {" "}
            <IoIosCheckmark color="black" size={20} />
          </div>
          Get them a consultation with a doctor, pharmacist & other healthcare
          specialists from the comfort of their home.
        </div>
      </div>
      <div className="flex gap-2 text-primary md:text-[18px]">
        <div className="w-6 h-6 rounded-full bg-[#00AEEE7D]/49 flex justify-center items-center">
          {" "}
          <IoIosCheckmark color="black" size={20} />
        </div>
        Start optimizing their health journey.
      </div>
    </section>
  );
};

export default MedicalConsultation;
