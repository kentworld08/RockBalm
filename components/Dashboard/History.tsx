import Image from "next/image";

const orders = [
  {
    prescription: "Vitasport Protein Synthesis C....",
    TranscationID: "#vhgyur83945",
    amount: "N10,000",
    quantity: 1,
    orderDate: "June 20, 2024",
    status: "Completed",
  },
  {
    prescription: "Kirkland Aspirin 81mg Tabs",
    amount: "N20,000",
    TranscationID: "#KLgyur83945",
    quantity: 2,
    orderDate: "2025-10-05",
    status: "Pending",
  },
  {
    prescription: "Vitasport Protein Synthesis C....",
    amount: "N10,000",
    TranscationID: "#67gyur83945",
    quantity: 1,
    orderDate: "2025-10-04",
    status: "Completed",
  },
  {
    prescription: "Kirkland Aspirin 81mg Tabs",
    amount: "N20,000",
    TranscationID: "#234gyur83945",
    quantity: 2,
    orderDate: "2025-10-04",
    status: "Pending",
  },
];

export const History = () => {
  return (
    <div className="py-6">
      <div className="py-11">Last Orders</div>
      {orders.length > 0 ? (
        <div className="overflow-x-auto mt-6">
          <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow-sm">
            <thead className="bg-gray-100 text-gray-700 text-sm">
              <tr>
                <th className="px-6 py-3 text-left">Prescription</th>
                <th className="px-6 py-3 text-left">Transcation ID</th>
                <th className="px-6 py-3 text-left">Amount</th>
                <th className="px-6 py-3 text-left">Quantity</th>
                <th className="px-6 py-3 text-left">Order Date</th>
                <th className="px-6 py-3 text-left">Status</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order, index) => (
                <tr
                  key={index}
                  className="border-t hover:bg-gray-50 transition-all duration-200 text-sm"
                >
                  <td className="px-6 py-3">{order.prescription}</td>
                  <td className="px-6 py-3">{order.TranscationID}</td>
                  <td className="px-6 py-3">{order.amount}</td>
                  <td className="px-6 py-3">{order.quantity}</td>
                  <td className="px-6 py-3">{order.orderDate}</td>
                  <td
                    className={`px-6 py-3 font-medium ${
                      order.status === "Delivered"
                        ? "text-green-600"
                        : order.status === "Pending"
                        ? "text-[#FF9500]"
                        : "text-[#51A993] border-[#51A993]"
                    }`}
                  >
                    {order.status}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center gap-[16px] mt-16">
          <Image
            src="/orderBag.png"
            alt="Order Bag"
            height={109.6}
            width={81.65}
          />
          <h1>Empty</h1>
          <p>You havent order for any medication yet</p>
          <button className="btn bg-secondary rounded-full border-secondary md:w-[235px]">
            Order Now
          </button>
        </div>
      )}
    </div>
  );
};
