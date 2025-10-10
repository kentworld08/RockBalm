"use client";

import { useState } from "react";
import ProfileDetails from "./ProfileDetails";
import Password from "./Password";

const Settings = () => {
  const [status, setStatus] = useState("Profile");

  return (
    <div>
      <div className="mt-6">
        <button
          onClick={() => setStatus("profile")}
          className={`btn bg-transparent  ${
            status === "profile"
              ? "border-t-0 border-x-0 text-secondary border-b-2 border-b-secondary"
              : "border-0 shadow-none  text-[#A5A5A5]"
          }`}
        >
          Profile Details
        </button>
        <button
          onClick={() => setStatus("password")}
          className={`btn bg-transparent  ${
            status === "password"
              ? "border-t-0 border-x-0 text-secondary border-b-2 border-b-secondary"
              : "border-0 shadow-none  text-[#A5A5A5]"
          }`}
        >
          Password & Security
        </button>
      </div>
      <div className="mt-[60px]">
        {status === "profile" && <ProfileDetails />}
        {status === "password" && <Password />}
      </div>
    </div>
  );
};

export default Settings;
