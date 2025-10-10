"use client";

import { useState } from "react";
import { CiMenuKebab } from "react-icons/ci";
import { TfiReload } from "react-icons/tfi";
import { TbSwitch3 } from "react-icons/tb";
import { useRouter } from "next/navigation";

const orders = [
  {
    id: 1,
    plans: "Rock Steady Care Package",
    amount: "N50,000",
    duration: "3 months",
    exp: "January 1, 2025",
    status: "Active",
    action: <CiMenuKebab />,
  },
];

const Plans = () => {
  const [active, setActive] = useState<boolean>(false);
  const [status, setStatus] = useState<number>(0);
  const [renew, setRenew] = useState<boolean>(false);
  const [switchplan, setSwitchplan] = useState<boolean>(false);
  const [rockguardian, setRockGuardian] = useState<boolean>(false);
  const router = useRouter();

  const handleRenew = () => {
    router.push("/CheckOut");
  };

  return (
    <div>
      <div className="py-11">Geriatric Plan</div>

      <div className="overflow-x-auto mt-6 h-96">
        <table className="min-w-full border border-gray-200 rounded-lg shadow-sm">
          <thead className="bg-white border-[1px] border-black text-gray-700 text-sm">
            <tr>
              <th className="px-6 py-3 text-left">Plans</th>
              <th className="px-6 py-3 text-left">Amount</th>
              <th className="px-6 py-3 text-left">Duration</th>
              <th className="px-6 py-3 text-left">Expiring Date</th>
              <th className="px-6 py-3 text-left">Status</th>
              <th className="px-6 py-3 text-left">Action</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order, index) => (
              <tr
                key={index}
                className="border-t hover:bg-gray-50 transition-all duration-200"
              >
                <td className="px-6 py-3">{order.plans}</td>
                <td className="px-6 py-3">{order.amount}</td>
                <td className="px-6 py-3">{order.duration}</td>
                <td className="px-6 py-3">{order.exp}</td>
                <td
                  onMouseEnter={() => setStatus(order.id)}
                  onMouseLeave={() => setStatus(0)}
                  className={`relative px-6 py-3 font-medium ${
                    order.status === "Active"
                      ? "text-green-600"
                      : order.status === "Pending"
                      ? "text-[#FF9500] border-[#FF9500]"
                      : "text-[#51A993] border-[#51A993]"
                  }`}
                >
                  {order.status}

                  {status === order.id && (
                    <div className="bg-white text-black w-[179px] h-[107px] rounded-2xl absolute -left-10 flex flex-col justify-center items-center">
                      <button
                        onClick={() => setRenew(true)}
                        className="btn bg-transparent border-none shadow-none text-black"
                      >
                        <TfiReload color="#699BF7" className="mr-2" />
                        Renew Plan
                      </button>
                      <button
                        onClick={() => setSwitchplan(true)}
                        className="btn bg-transparent border-none shadow-none text-black"
                      >
                        <TbSwitch3 color="#4B9DA3" className="mr-2" />
                        Switch Plan
                      </button>
                    </div>
                  )}
                </td>
                <td
                  onClick={() => setActive((prev) => !prev)}
                  className="px-6 py-3 cursor-pointer relative"
                >
                  {order.action}
                  {active && (
                    <span className="top-12 py-5 px-4 bg-white flex flex-col absolute -left-37 md:text-[14px] rounded-sm">
                      <p className="">View Prescription Details</p>
                      <p>Delete Prescription</p>
                    </span>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {renew && (
        <div className="w-full bg-black/60 z-50 absolute top-0 right-0 left-0 bottom-0 flex justify-center items-center">
          <div className="bg-white w-[500px] rounded-2xl p-6">
            <div className="flex justify-between">
              <h1>Renew Plan</h1>
              <button
                onClick={() => setRenew(false)}
                className="rounded-full bg-blue-100 border-none w-8 h-8 cursor-pointer"
              >
                x
              </button>
            </div>
            <hr className="mt-8 mb-15" />
            <div>
              <p className="text-black text-center">
                Do you want to renew your plan?
              </p>
              <div className="flex justify-center gap-4 mt-5">
                <button
                  onClick={() => setRenew(false)}
                  className="btn bg-transparent border-secondary shadow-none rounded-full text-secondary"
                >
                  No, Cancel
                </button>
                <button
                  onClick={handleRenew}
                  className="btn bg-secondary border-secondary shadow-none rounded-full text-white"
                >
                  Yes, Renew
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
      {switchplan && (
        <div className="w-full bg-black/60 z-50 absolute top-0 right-0 left-0 bottom-0 flex justify-center items-center">
          <div className="bg-white rounded-2xl p-6">
            <div className="flex justify-between">
              <h1>Switch Plan</h1>
              <button
                onClick={() => setSwitchplan(false)}
                className="rounded-full bg-blue-100 border-none w-8 h-8 cursor-pointer"
              >
                x
              </button>
            </div>
            <hr className="mt-8 mb-15" />
            <div className="flex gap-8 flex-col md:flex-row ">
              <div className="p-4 md:w-[350px] text-sm border-[#E0E0E0] border-[1px] rounded-xl">
                <div className="w-10 h-10 flex justify-center items-center rounded-full bg-blue-100 ">
                  icon
                </div>
                <h1 className="text-secondary">Rock Essential Care Package</h1>
                <h3 className="font-semibold">Duration: 1 Month</h3>
                <p className="text-black">
                  Ideal For: Patients who require routine consultations and
                  basic medication management.
                </p>
                <button className="btn bg-transparent border-secondary rounded-full text-secondary w-full mt-4">
                  Switch
                </button>
              </div>
              <div className="p-4 md:w-[350px] text-sm border-[#E0E0E0] border-[1px] rounded-xl">
                <div className="w-10 h-10 flex justify-center items-center rounded-full bg-blue-100 ">
                  icon
                </div>
                <h1 className="text-secondary">Rock Guardian Care Packag</h1>
                <h3 className="font-semibold">Duration: 6 Month</h3>
                <p className="text-black">
                  Ideal For: Patients with multiple or advanced health
                  conditions requiring intensive, ongoing care.
                </p>
                <button
                  onClick={() => {
                    setSwitchplan(false);
                    setRockGuardian(true);
                  }}
                  className="btn bg-transparent border-secondary rounded-full text-secondary w-full mt-4"
                >
                  Switch
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
      {rockguardian && (
        <div className="w-full bg-black/60 z-50 absolute top-0 right-0 left-0 bottom-0 flex justify-center items-center">
          <div className="bg-white w-[500px] rounded-2xl p-6">
            <p className="text-center justify-self-center md:w-[320px] mt-6">
              You are switching plan to{" "}
              <span className="text-secondary font-semibold">
                Rock Guardian care package
              </span>
            </p>
            <div className="flex justify-center gap-3 my-8">
              <button
                onClick={() => setRockGuardian(false)}
                className="btn bg-transparent border-secondary rounded-full text-secondary"
              >
                Cancel
              </button>
              <button className="btn bg-secondary text-white border-secondary rounded-full">
                Proceed
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
export default Plans;
