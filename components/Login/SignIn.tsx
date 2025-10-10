"use client";

import { FaGoogle, FaApple } from "react-icons/fa";
import React from "react";

type FormStatus = "signin" | "signup" | "reset" | "";

interface SignInProps {
  reset: React.Dispatch<React.SetStateAction<FormStatus>>;
}

const SignIn = ({ reset }: SignInProps) => {
  return (
    <div>
      <div className="text-[#034F81]">
        <h1 className="font-inter font-bold md:text-[28px]">Sign in</h1>
        <p className="text-sm">
          Enter your email address and password to securely log in to RockBalm
          Admin portal
        </p>
      </div>

      <form action="">
        <div className="mt-2">
          <label htmlFor="email" className="text-[#034F81]">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="What is your email address?"
            className="placeholder:text-[#040D0F] border border-[#EDE8FF] block w-full py-[13px] px-[18px] placeholder:text-sm"
          />
        </div>

        <div className="mt-2">
          <label htmlFor="password" className="text-[#034F81]">
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Enter your password"
            className="placeholder:text-[#040D0F] border border-[#EDE8FF] block w-full py-[13px] px-[18px] placeholder:text-sm"
          />
        </div>

        <button
          type="submit"
          className="mt-2 btn bg-secondary border-secondary w-full text-white rounded-full"
        >
          Proceed to Dashboard
        </button>

        <p className="text-black justify-self-center mt-3">
          Forgot your password?{" "}
          <button
            type="button"
            onClick={() => reset("reset")}
            className="text-secondary bg-none border-none shadow-none cursor-pointer"
          >
            Reset Now!
          </button>
        </p>
      </form>

      <div className="flex items-center my-3">
        <hr className="flex-grow border-gray-300" />
        <span className="px-4 text-gray-500 font-medium">OR</span>
        <hr className="flex-grow border-gray-300" />
      </div>

      <div className="flex justify-center flex-col items-center gap-2">
        {/* Google */}
        <button
          type="button"
          className="flex btn py-[15px] bg-transparent items-center justify-center gap-2 border border-gray-300 shadow-none px-4 w-full hover:bg-gray-100 transition md:w-[300px] rounded-full"
          onClick={() => console.log("Google sign-in clicked")}
        >
          <FaGoogle color="black" />
          <span className="font-medium text-gray-700">Sign in with Google</span>
        </button>

        {/* Apple */}
        <button
          type="button"
          className="flex btn py-[15px] bg-transparent items-center justify-center gap-2 border border-gray-300 shadow-none px-4 w-full hover:bg-gray-100 transition md:w-[300px] rounded-full"
          onClick={() => console.log("Apple sign-in clicked")}
        >
          <FaApple color="black" />
          <span className="font-medium text-gray-700">Sign in with Apple</span>
        </button>
      </div>
    </div>
  );
};

export default SignIn;
