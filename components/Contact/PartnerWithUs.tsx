import { AiOutlineCheck } from "react-icons/ai";

const PartnerWithUs = () => {
  return (
    <section className="bg-white flex justify-center items-center pt-[84.5px] flex-col gap-[60px] w-full ">
      <div className="text-primary text-center px-6">
        <h1 className="font-alfa-slab font-normal md:text-[33px] -tracking-[2px]">
          Partner with Us
        </h1>
      </div>
      <div className="bg-[#F8F8F8] md:p-[84px] w-full">
        <div className="bg-[#041827] md:p-[78px] p-3 rounded-xl flex flex-col md:flex-row gap-16">
          <div className="md:h-[700px] flex flex-col justify-between gap-10 ">
            <div className="md:w-96 w-full">
              <h1>Partnership</h1>
              <p>
                At Rockbalm believe that collaboration drives success and
                innovation. We are always looking for like minded partners who
                share to excellence and a passion fro improving health and well
                being.
              </p>
            </div>
            <div className="card bg-base-100 md:w-96 shadow-sm w-full">
              <div className="card-body">
                <h2 className="card-title">How to partner with us</h2>
                <p className="flex gap-2">
                  <AiOutlineCheck color="#FFC872" size={16} />
                  Reach out to our partnership team through the contact form.
                  Kindly fill the medication fulfillment
                </p>
                <div className="flex gap-2">
                  <AiOutlineCheck color="#FFC872" />
                  <p>
                    Contact us directly at{" "}
                    <span className="text-[#FFC872]">
                      Rockbalmhealth@gmail.com
                    </span>
                  </p>
                </div>
                <p className="flex gap-2">
                  <AiOutlineCheck color="#FFC872" />
                  Telephone <span className="text-[#FFC872]">+23413762039</span>
                </p>
              </div>
            </div>
          </div>
          <div className="bg-white md:w-[690px] md:p-[42px] rounded-lg p-4">
            <form action="" className="text-black flex flex-col gap-7">
              <div>
                <label htmlFor="fullName">Full Name</label>
                <input
                  type="text"
                  placeholder="John Doe"
                  className="border-[1px] mt-2.5 w-full border-[#EDE8FF] py-[13px] px-[18px] block"
                />
              </div>
              <div>
                <label htmlFor="fullName">Roel</label>
                <input
                  type="text"
                  placeholder="John Doe"
                  className="border-[1px] mt-2.5 w-full border-[#EDE8FF] py-[13px] px-[18px] block"
                />
              </div>
              <div>
                <label htmlFor="fullName">Organization name</label>
                <input
                  type="text"
                  placeholder="eg.medtech"
                  className="border-[1px] mt-2.5 w-full border-[#EDE8FF] py-[13px] px-[18px] block"
                />
              </div>
              <div>
                <label htmlFor="fullName">Organization Type</label>
                <input
                  type="text"
                  placeholder="eg.medtech"
                  className="border-[1px] mt-2.5 w-full border-[#EDE8FF] py-[13px] px-[18px] block"
                />
              </div>
              <div>
                <label htmlFor="fullName">Description</label>
                <input
                  type="text"
                  placeholder="eg.medtech"
                  className="border-[1px] mt-2.5 w-full border-[#EDE8FF] py-[13px] px-[18px] block"
                />
              </div>
              <button className="btn bg-secondary rounded-full w-full">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnerWithUs;
