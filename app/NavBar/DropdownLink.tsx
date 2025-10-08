import { dropdownLink } from "@/Data";
import Link from "next/link";
import React from "react";

const DropdownLink = () => {
  return (
    <div className="hidden w-[185px] md:flex flex-col gap-3 justify-center items-center bg-white rounded-lg text-primary absolute">
      {dropdownLink.map((lnk) => (
        <Link key={lnk} href={`/${lnk}`}>
          {lnk}
        </Link>
      ))}
    </div>
  );
};

export default DropdownLink;
