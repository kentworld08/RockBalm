"use client";

const Password = () => {
  return (
    <div className="py-10">
      <div className="flex justify-between flex-col md:flex-row gap-3 mb-10">
        <div>
          <h1 className="font-bold text-sm text-[#041827]">Profile details</h1>
          <p className="font-light text-[#606060]">
            Update your password & security details
          </p>
        </div>
        <button className="btn bg-secondary border-secondary text-white">
          Update Password
        </button>
      </div>

      <form action="">
        <div className="w-full">
          <label htmlFor="password">Current Password</label>
          <input
            type="password"
            id="password"
            placeholder="Enter Current Password"
            className="placeholder:text-[#EDE8FF] placeholder:text-sm py-[13px] px-[10px] block border-[1px] border-[#EDE8FF] bg-white text-black w-full mt-3"
          />
        </div>
        <div className="w-full mt-5">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            placeholder="Enter new  password"
            className="placeholder:text-[#EDE8FF] placeholder:text-sm py-[13px] px-[10px] block border-[1px] border-[#EDE8FF] bg-white text-black w-full mt-3"
          />
        </div>
        <div className="w-full mt-5">
          <label htmlFor="password">Confirm Password</label>
          <input
            type="password"
            id="password"
            placeholder="Confirm new Password"
            className="placeholder:text-[#EDE8FF] placeholder:text-sm py-[13px] px-[10px] block border-[1px] border-[#EDE8FF] bg-white text-black w-full mt-3"
          />
        </div>
      </form>
    </div>
  );
};

export default Password;
