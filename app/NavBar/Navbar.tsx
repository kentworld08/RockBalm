import { useState } from "react";
import MobileMenu from "@/app/NavBar/MobileView/MobileMenu";
import Link from "next/link";
import { NavLinks } from "@/Data";
import Actionbtn from "./actionbtn";
import DropdownLink from "./DropdownLink";

const Navbar = () => {
  const [isHovering, setIsHovering] = useState(false);

  return (
    <header className="bg-white fixed top-0 left-0 right-0 z-50 w-full">
      <nav className="navbar justify-between px-6 py-4 relative">
        <Link href="/" className="text-black">
          RockBalm
        </Link>

        <ul className="font-medium gap-6 hidden md:flex">
          {NavLinks.map((link, index) => (
            <li
              key={index}
              className="font-inter hover:text-secondary text-primary text-[clamp(14px,_1vw,_16px)] relative"
              onMouseEnter={() => link === "Services" && setIsHovering(true)}
              onMouseLeave={() => link === "Services" && setIsHovering(false)}
            >
              <Link href={`/${link}`}>{link}</Link>

              {/* Show dropdown only on hover */}
              {link === "Services" && isHovering && <DropdownLink />}
            </li>
          ))}
        </ul>

        <Actionbtn />
        <MobileMenu />
      </nav>
    </header>
  );
};

export default Navbar;
