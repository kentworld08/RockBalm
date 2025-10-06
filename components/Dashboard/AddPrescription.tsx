"use client";

import { MdOutlineAttachFile } from "react-icons/md";
import { Dispatch, SetStateAction, useRef } from "react";
interface Props {
  setaddprescription: Dispatch<SetStateAction<boolean>>;
}

const AddPrescription: React.FC<Props> = ({ setaddprescription }) => {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleUploadClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      console.log("File selected:", file.name);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-[90vh] bg-[#f9fafb] rounded-2xl">
      <div className="bg-white px-6 py-6 rounded-xl w-full max-w-[34rem] shadow-lg">
        <div className="text-black flex justify-between items-center mb-4">
          <h1 className="text-lg font-semibold">Add Prescription</h1>
          <button
            onClick={() => setaddprescription(false)}
            className="bg-[#92D9FD]/20 text-black rounded-full border-none px-3 py-1 hover:bg-[#92D9FD]/40 text-sm"
          >
            x
          </button>
        </div>

        <div className="flex flex-col gap-4">
          <p className="text-sm">Search or upload prescription</p>

          <label className="flex items-center gap-2 bg-[#92D9FD]/20 rounded-full border border-[#E0E0E0] w-full h-11">
            <svg
              className="h-[1.1em] opacity-50 ml-3"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <g
                strokeLinejoin="round"
                strokeLinecap="round"
                strokeWidth="2.5"
                fill="none"
                stroke="#0288d1"
              >
                <circle cx="11" cy="11" r="8"></circle>
                <path d="m21 21-4.3-4.3"></path>
              </g>
            </svg>

            <input
              type="search"
              required
              placeholder="Search item..."
              className="flex-1 bg-transparent border-none outline-none text-sm placeholder:text-sm px-2"
            />

            <input
              type="file"
              ref={fileInputRef}
              onChange={handleFileChange}
              className="hidden"
            />

            <button
              onClick={handleUploadClick}
              className="btn bg-secondary text-white rounded-full md:px-7 py-1.5 text-[12px] flex items-center gap-1 border-none"
            >
              <MdOutlineAttachFile size={13} /> Upload
            </button>
          </label>

          <p className="text-[12px] text-gray-700 leading-snug mt-1">
            This medication is used to treat heavy bleeding during your
            menstrual period. Texanexamic acid works by slowing the breakdown of
            blood clots, which helps to prevent prolonged bleeding. it belongs
            to a class of drugs known as antifibrinolytics.{" "}
            <button className="text-secondary bg-transparent border-none font-semibold text-[12px]">
              Show Image
            </button>
          </p>

          <form
            action=""
            className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-3"
          >
            <div>
              <label htmlFor="brand" className="text-sm font-medium">
                Medication Brand
              </label>
              <input
                type="text"
                placeholder="Prexam Tranexamic Acid "
                className="w-full border border-black rounded-sm py-2.5 px-3 mt-1 placeholder:text-sm text-sm"
              />
            </div>

            <div>
              <label htmlFor="strength" className="text-sm font-medium">
                Medication Strength
              </label>
              <input
                type="text"
                placeholder="500mg"
                className="w-full border border-black rounded-sm py-2.5 px-3 mt-1 placeholder:text-sm text-sm"
              />
            </div>

            <div>
              <label htmlFor="form" className="text-sm font-medium">
                Dosage Form
              </label>
              <input
                type="text"
                placeholder="Tablet"
                className="w-full border border-black rounded-sm py-2.5 px-3 mt-1 placeholder:text-sm text-sm"
              />
            </div>

            <div>
              <label htmlFor="price" className="text-sm font-medium">
                Price
              </label>
              <input
                type="text"
                placeholder="N10,000"
                className="w-full border border-black rounded-sm py-2.5 px-3 mt-1 placeholder:text-sm text-sm"
              />
            </div>

            <div className="md:col-span-2">
              <label htmlFor="quantity" className="text-sm font-medium">
                How many do you want ?
              </label>
              <input
                type="number"
                placeholder="1"
                className="w-full border border-black rounded-sm py-2.5 px-3 mt-1 placeholder:text-sm text-sm"
              />
            </div>

            <div className="md:col-span-2 flex justify-end mt-2">
              <button className="btn border-secondary bg-secondary text-white text-sm px-5 py-2.5 font-medium rounded-full">
                Add Prescription
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddPrescription;
