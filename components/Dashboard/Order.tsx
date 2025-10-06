"use client";

import { CiMenuKebab } from "react-icons/ci";

import { Dispatch, SetStateAction } from "react";

interface Props {
  setaddprescription: Dispatch<SetStateAction<boolean>>;
}

const Order: React.FC<Props> = ({ setaddprescription }) => {
  const orders = [
    {
      prescription: "Kirkland Aspirin 81mg Tabs",
      amount: "N10,000",
      quantity: 1,
      Action: <CiMenuKebab />,
    },
    {
      prescription: "Vitasport Protein Synthesis Chocolate 2.3...",
      amount: "N20,000",
      quantity: 2,
      Action: <CiMenuKebab />,
    },
    {
      prescription: "Kirkland Aspirin 81mg Tabs",
      amount: "N10,000",
      quantity: 1,
      Action: <CiMenuKebab />,
    },
    {
      prescription: "Vitasport Protein Synthesis Chocolate 2.3...",
      amount: "N20,000",
      quantity: 2,
      Action: <CiMenuKebab />,
    },
    {
      prescription: "Kirkland Aspirin 81mg Tabs",
      amount: "N10,000",
      quantity: 2,
      Action: <CiMenuKebab />,
    },
    {
      prescription: "Vitasport Protein Synthesis Chocolate 2.3...",
      amount: "N20,000",
      quantity: 2,
      Action: <CiMenuKebab />,
    },
  ];
  return (
    <div>
      <div className="flex justify-end w-full pt-[53px]">
        <button className="btn bg-secondary rounded-full border-secondary mr-[11px]">
          Update Prescription
        </button>
        <button
          onClick={() => setaddprescription(true)}
          className="btn bg-transparent text-black rounded-full border-black"
        >
          Add New Prescription
        </button>
      </div>
      <div className="overflow-x-auto mt-6">
        <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow-sm">
          <thead className="bg-gray-100 text-gray-700">
            <tr>
              <th className="px-6 py-3 text-left">Prescription</th>
              <th className="px-6 py-3 text-left">Amount</th>
              <th className="px-6 py-3 text-left">Quantity</th>
              <th className="px-6 py-3 text-left">Action</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order, index) => (
              <tr
                key={index}
                className="border-t hover:bg-gray-50 transition-all duration-200"
              >
                <td className="px-6 py-3">{order.prescription}</td>
                <td className="px-6 py-3">{order.amount}</td>
                <td className="px-6 py-3">
                  <button className="mr-2 rounded-full border-secondary border-[1px] text-black w-6 h-6">
                    -
                  </button>
                  {order.quantity}
                  <button className="ml-2 rounded-full border-secondary text-white w-6 h-6 bg-secondary">
                    +
                  </button>
                </td>

                <td className="px-6 py-3 font-medium text-gray-700 ">
                  {order.Action}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Order;
