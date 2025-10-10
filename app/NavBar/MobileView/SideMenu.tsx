import Link from "next/link";
import { dropdownLink, NavLinks } from "@/Data";

const SideMenu = () => {
  return (
    <div className="bg-white h-screen w-[250px] text-primary pt-10">
      {" "}
      <ul className="font-medium gap-6 justify-center flex flex-col items-center">
        {NavLinks.map((link, index) => (
          <li
            key={index}
            className="font-inter text-primary text-[clamp(14px,_1vw,_16px)]"
          >
            <Link href={`/${link.href}`}>{link.name}</Link>
          </li>
        ))}
        {dropdownLink.map((link, index) => (
          <li
            key={index}
            className="font-inter text-primary text-[clamp(14px,_1vw,_16px)]"
          >
            <Link href={`/${link.href}`}>{link.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SideMenu;
