"use client";

import Image from "next/image";
import { FaGoogle } from "react-icons/fa";
import { FaApple } from "react-icons/fa";

const LoginForm = () => {
  return (
    <div className="flex h-screen flex-col md:flex-row w-full bg-white ">
      <div className="relative hidden md:block md:w-2/5 h-full">
        <Image
          src="/med-img.jpg"
          alt="Medical background"
          fill
          className="object-cover"
        />
      </div>
      <aside className="bg-[#F8F8F8] flex-1 ">
        <div className="bg-white w-4/6 justify-self-center py-[34px] px-6 rounded-2xl mt-[30px]">
          <div className="bg-[#F4F4F4] rounded-full flex mb-[34px] justify-between">
            <button className="btn text-black rounded-full bg-transparent border-none md:w-[220px] shadow-none">
              Sign up
            </button>
            <button className="btn bg-secondary rounded-full border-secondary md:w-[220px]">
              Sign in
            </button>
          </div>
          <div className="text-[#034F81]">
            <h1 className="font-inter font-bold md:text-[28px]">Sign in</h1>
            <p>
              Enter your email address and password to securely log in to
              RockBalm Admin portal
            </p>
          </div>
          <form action="">
            <div className="mt-3">
              <label htmlFor="email" className="text-[#034F81]">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="what is your email address?"
                className="placeholder:text-[#040D0F] border-[1px] border-[#EDE8FF] block w-full py-[13px] px-[18px]"
              />
            </div>
          </form>
          <div className="flex items-center my-6">
            <hr className="flex-grow border-gray-300" />
            <span className="px-4 text-gray-500 font-medium">OR</span>
            <hr className="flex-grow border-gray-300" />
          </div>
          <div>
            <button
              type="button"
              className="flex btn py-[15px] bg-transparent items-center justify-center gap-2 border border-gray-300 rounded-md px-4 w-full hover:bg-gray-100 transition"
              onClick={() => console.log("Google sign-in clicked")}
            >
              <FaGoogle />
              <span className="font-medium text-gray-700">
                Sign in with Google
              </span>
            </button>
            {/* Apple */}
            <button
              type="button"
              className="flex btn py-[15px] bg-transparent items-center justify-center gap-2 border border-gray-300 rounded-md px-4 w-full hover:bg-gray-100 transition"
              onClick={() => console.log("Apple sign-in clicked")}
            >
              <FaApple />

              <span className="font-medium text-gray-700">
                Sign in with Apple
              </span>
            </button>
          </div>
        </div>
      </aside>
    </div>
  );
};

export default LoginForm;
