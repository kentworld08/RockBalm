"use client";

import Image from "next/image";
import { useState } from "react";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import Reset from "./reset";

type FormStatus = "signin" | "signup" | "reset" | "";

const LoginForm = () => {
  const [formStatus, setformStatus] = useState<FormStatus>("");

  return (
    <div className="flex h-screen flex-col md:flex-row w-full bg-white">
      <div className="relative hidden md:block md:w-2/5 h-full">
        <Image
          src="/med-img.jpg"
          alt="Medical background"
          fill
          className="object-cover"
        />
      </div>

      <aside className="bg-[#F8F8F8] flex-1">
        <div className="bg-white w-4/6 justify-self-center py-[10px] px-6 rounded-2xl mt-[20px]">
          {formStatus !== "reset" && (
            <div className="bg-[#F4F4F4] rounded-full flex mb-[10px] justify-between">
              <button
                onClick={() => setformStatus("signup")}
                className={`btn rounded-full border-none md:w-[220px] shadow-none ${
                  formStatus === "signup"
                    ? "bg-secondary text-white"
                    : "bg-transparent text-black"
                }`}
              >
                Sign up
              </button>
              <button
                onClick={() => setformStatus("signin")}
                className={`btn rounded-full border-none md:w-[220px] shadow-none ${
                  formStatus === "signin"
                    ? "bg-secondary text-white"
                    : "bg-transparent text-black"
                }`}
              >
                Sign in
              </button>
            </div>
          )}
          {formStatus === "signin" && <SignIn reset={setformStatus} />}
          {formStatus === "signup" && <SignUp />}
          {formStatus === "reset" && <Reset reset={setformStatus} />}
        </div>
      </aside>
    </div>
  );
};

export default LoginForm;
