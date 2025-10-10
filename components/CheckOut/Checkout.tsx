"use client";

const CheckOut = () => {
  return (
    <div className="text-primary mt-[122px] md:mt-[50px]">
      <h1 className="font-bold">Checkout</h1>
      <div className="flex items-center w-full my-6">
        <div>
          <div className="w-[54px] h-[54px] rounded-full bg-secondary flex items-center justify-center text-white">
            1
          </div>
          <p>Shipping</p>
        </div>

        <hr className="flex-1 border-t-2 border-gray-300 mx-4" />
        <div>
          <div className="w-[54px] h-[54px] rounded-full bg-secondary flex items-center justify-center text-white">
            2
          </div>
          <p>Payment</p>
        </div>
        <hr className="flex-1 border-t-2 border-gray-300 mx-4" />
        <div>
          <div className="w-[54px] h-[54px] rounded-full bg-secondary flex items-center justify-center text-white">
            3
          </div>
          <p>Review</p>
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-[30px]">
        <div className="bg-white py-3 px-8 flex-1 h-fit flex justify-end">
          <button className="btn bg-secondary text-white rounded-full border-secondary md:w-[177px]">
            Continue
          </button>
        </div>
        <div className="text-primary md:w-[455px] w-full bg-white rounded-2xl p-6 flex flex-col gap-4">
          <h1 className="font-bold">Order Summary</h1>

          <div className="flex justify-between">
            <p>Vitaamin B</p>
            <p>45,000</p>
          </div>
          <hr />
          <div className="flex justify-between">
            <p>Subtotal</p>
            <p>45,000</p>
          </div>
          <div className="flex justify-between">
            <p>Shipping</p>
            <p>0</p>
          </div>
          <div className="flex justify-between">
            <p>Taxl</p>
            <p>0</p>
          </div>
          <hr />
          <div className="flex justify-between">
            <p>Total</p>
            <p>45,000</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckOut;
