"use client";

import { useState } from "react";
import { CiMenuKebab } from "react-icons/ci";

const orders = [
  {
    plans: "Rock Steady Care Package",
    amount: "N50,000",
    duration: "3 months",
    exp: "January 1, 2025",
    status: "Active",
    action: <CiMenuKebab />,
  },
];

const Plans = () => {
  const [active, setActive] = useState(false);
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
                  className={`px-6 py-3 font-medium ${
                    order.status === "Active"
                      ? "text-green-600"
                      : order.status === "Pending"
                      ? "text-[#FF9500]"
                      : "text-[#51A993] border-[#51A993]"
                  }`}
                >
                  {order.status}
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
    </div>
  );
};
export default Plans;
