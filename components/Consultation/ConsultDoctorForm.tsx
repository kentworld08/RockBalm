import React, { useRef, useState } from "react";

type ConsultDoctorFormProps = {
  setConsultation: React.Dispatch<React.SetStateAction<string>>;
};

const ConsultDoctorForm: React.FC<ConsultDoctorFormProps> = ({
  setConsultation,
}) => {
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const [fileName, setFileName] = useState<string>("");

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setFileName(file.name);
    }
  };

  const handleClick = () => {
    fileInputRef.current?.click();
  };

  return (
    <div className="flex justify-center items-center bg-[#f9fafb] rounded-2xl">
      <div className="bg-white px-6 py-6 rounded-xl w-full max-w-[34rem] shadow-lg">
        <div className="text-black flex justify-between items-center mb-4">
          <h1 className="text-lg font-semibold">Consult a Doctor</h1>
          <button
            onClick={() => setConsultation("")}
            className="bg-[#92D9FD]/20 text-black rounded-full border-none px-3 py-1 hover:bg-[#92D9FD]/40 text-sm"
          >
            x
          </button>
        </div>

        <form className="flex flex-col text-black gap-4 mt-3">
          <div>
            <label className="text-sm font-medium">
              Reason For Consultation
            </label>
            <input
              type="text"
              placeholder="write..."
              className="w-full border border-black rounded-sm py-2.5 px-3 mt-1 placeholder:text-sm text-sm"
            />
          </div>

          <div>
            <label className="text-sm font-medium">Consultation Type</label>
            <input
              type="text"
              placeholder="virtual"
              className="w-full border border-black rounded-sm py-2.5 px-3 mt-1 placeholder:text-sm text-sm"
            />
          </div>

          <div className="flex gap-4">
            <div className="w-full">
              <label className="text-sm font-medium">Date</label>
              <input
                type="date"
                className="border border-black rounded-sm py-2.5 px-3 mt-1 text-sm block w-full"
              />
            </div>
            <div className="w-full">
              <label className="text-sm font-medium">Time</label>
              <input
                type="time"
                className="border border-black rounded-sm py-2.5 px-3 mt-1 text-sm block w-full"
              />
            </div>
          </div>

          <div>
            <label className="text-sm font-medium">
              Upload Picture (Optional)
            </label>

            <div
              onClick={handleClick}
              className="mt-1 border-2 border-dashed border-blue-400 rounded-md py-8 px-4 flex flex-col items-center justify-center text-center cursor-pointer hover:bg-blue-50 transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 text-blue-500 mb-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1.5}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 4v16m8-8H4"
                />
              </svg>

              <p className="text-sm text-gray-700 font-medium">
                Click here to upload your file or drag and drop
              </p>
              <p className="text-xs text-gray-500 mt-1">
                (only .png, .jpg, .jpeg & .pdf are allowed)
              </p>

              {fileName && (
                <p className="text-xs text-green-600 mt-2">
                  ✅ {fileName} uploaded
                </p>
              )}

              <input
                ref={fileInputRef}
                type="file"
                accept=".png,.jpg,.jpeg,.pdf"
                className="hidden"
                onChange={handleFileChange}
              />
            </div>
          </div>

          <div className="flex justify-end mt-2">
            <button
              type="submit"
              className="btn border-secondary bg-secondary text-white text-sm px-5 py-2.5 font-medium"
            >
              Conduct A Doctor
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ConsultDoctorForm;
