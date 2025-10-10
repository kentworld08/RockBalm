"use client";
import { MdDelete } from "react-icons/md";

import { useState } from "react";

const ShoppingCart = () => {
  const [count, setCount] = useState(0);

  const handleDecrement = () => {
    setCount((prev) => prev - 1);
  };

  const handleIncrement = () => {
    setCount((prev) => prev + 1);
  };

  return (
    <div className="text-primary mt-[122px] md:mt-0">
      <h1>Shopping Cart ( 1 items )</h1>
      <div className="flex flex-col md:flex-row gap-[30px]">
        <div className="bg-white py-3 px-8 flex-1 h-fit">
          <p>Vitamin B 15,000</p>
          <div className="flex items-center gap-0.5">
            <div className="border-[1px] border-[#F4F4F4]">
              <button
                onClick={handleDecrement}
                disabled={count === 0}
                className="btn bg-transparent shadow-none border-none text-primary"
              >
                -
              </button>{" "}
              {count}{" "}
              <button
                onClick={handleIncrement}
                className="btn text-primary bg-transparent shadow-none border-none"
              >
                +
              </button>
            </div>
            <MdDelete color="red" />
          </div>
        </div>
        <div className="text-primary md:w-[455px] w-full bg-white rounded-2xl p-6 flex flex-col gap-4">
          <h1>Order Summary</h1>
          <hr />
          <div className="flex justify-between">
            <p>Total</p>
            <p>15,000</p>
          </div>
          <button className="btn bg-secondary border-secondary text-white rounded-full w-full">
            Proceed Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default ShoppingCart;
