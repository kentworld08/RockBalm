"use client";

import Image from "next/image";
import { IoCloudUploadOutline } from "react-icons/io5";

import React, { ChangeEvent, useState } from "react";

const ProfileDetails = () => {
  const [fileName, setFileName] = useState<string | null>(null);

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      console.log("File selected:", file);
      setFileName(file.name);
    }
  };
  return (
    <div className="py-10">
      <div className="flex justify-between flex-col md:flex-row gap-3">
        <div>
          <h1 className="font-bold text-sm text-[#041827]">Profile details</h1>
          <p className="font-light text-[#606060]">
            Update your personal information here
          </p>
        </div>
        <button className="btn bg-secondary border-secondary text-white">
          Update Profile
        </button>
      </div>
      <div className="my-6 flex gap-4 items-center">
        <div className="avatar avatar-">
          <div className="w-24 rounded-full">
            <Image
              src="/default-img.png"
              alt="profile avatar"
              height={96}
              width={96}
            />
          </div>
        </div>
        <div>
          <input
            id="avatarUpload"
            type="file"
            accept="image/*"
            className="hidden"
            onChange={handleFileChange}
          />

          <label
            htmlFor="avatarUpload"
            className="btn bg-transparent border-secondary text-secondary inline-flex items-center gap-2 cursor-pointer"
          >
            <IoCloudUploadOutline />
            upload avatar
          </label>

          {fileName && <p className="mt-2 text-sm">{fileName} selected</p>}
        </div>
      </div>
      <form action="">
        <div className="flex flex-col md:flex-row gap-5">
          <div className="w-full">
            <label htmlFor="firstname">First Name</label>
            <input
              type="text"
              id="firstname"
              placeholder="First Name"
              className="placeholder:text-[#EDE8FF] placeholder:text-sm py-[13px] px-[10px] block border-[1px] border-[#EDE8FF] bg-white text-black w-full mt-3"
            />
          </div>
          <div className="w-full">
            <label htmlFor="lastname">Last Name</label>
            <input
              type="text"
              id="lastname"
              placeholder="Last Name"
              className="placeholder:text-[#EDE8FF] placeholder:text-sm py-[13px] px-[10px] block border-[1px] border-[#EDE8FF] bg-white text-black w-full mt-3"
            />
          </div>
        </div>
        <div className="flex flex-col md:flex-row gap-5 mt-5">
          <div className="w-full">
            <label htmlFor="gender">Gender</label>
            <input
              type="text"
              id="gender"
              placeholder="Male/Female "
              className="placeholder:text-[#EDE8FF] placeholder:text-sm py-[13px] px-[10px] block border-[1px] border-[#EDE8FF] bg-white text-black w-full mt-3"
            />
          </div>
          <div className="w-full">
            <label htmlFor="date">Date of Birth</label>
            <input
              type="date"
              id="date"
              placeholder="08/18/1997"
              className="placeholder:text-[#EDE8FF] placeholder:text-sm py-[13px] px-[10px] block border-[1px] border-[#EDE8FF] bg-white text-black w-full mt-3"
            />
          </div>
        </div>
        <div className="flex flex-col md:flex-row gap-5 mt-5">
          <div className="w-full">
            <label htmlFor="tel">Phone Number</label>
            <input
              type="tel"
              id="tel"
              placeholder="08052113083 "
              className="placeholder:text-[#EDE8FF] placeholder:text-sm py-[13px] px-[10px] block border-[1px] border-[#EDE8FF] bg-white text-black w-full mt-3"
            />
          </div>
          <div className="w-full">
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              id="email"
              placeholder="kent93226@gmail.com"
              className="placeholder:text-[#EDE8FF] placeholder:text-sm py-[13px] px-[10px] block border-[1px] border-[#EDE8FF] bg-white text-black w-full mt-3"
            />
          </div>
        </div>
        <div className="flex flex-col md:flex-row gap-5 mt-5">
          <div className="w-full">
            <label htmlFor="location">Location</label>
            <input
              type="text"
              id="location"
              placeholder="Lagos "
              className="placeholder:text-[#EDE8FF] placeholder:text-sm py-[13px] px-[10px] block border-[1px] border-[#EDE8FF] bg-white text-black w-full mt-3"
            />
          </div>
          <div className="w-full">
            <label htmlFor="city">City</label>
            <input
              type="text"
              id="city"
              placeholder="Ikeja"
              className="placeholder:text-[#EDE8FF] placeholder:text-sm py-[13px] px-[10px] block border-[1px] border-[#EDE8FF] bg-white text-black w-full mt-3"
            />
          </div>
        </div>
        <div className="w-full">
          <label htmlFor="street">Street</label>
          <input
            type="text"
            id="street"
            placeholder="No 5 lorem ipusm Street"
            className="placeholder:text-[#EDE8FF] placeholder:text-sm py-[13px] px-[10px] block border-[1px] border-[#EDE8FF] bg-white text-black w-full mt-3"
          />
        </div>
      </form>
    </div>
  );
};

export default ProfileDetails;
