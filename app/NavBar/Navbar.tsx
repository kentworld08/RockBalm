import MobileMenu from "@/app/NavBar/MobileView/MobileMenu";
import Link from "next/link";
import { NavLinks } from "@/Data";
import Actionbtn from "./actionbtn";

const Navbar = () => {
  return (
    <header className="bg-white fixed top-0 left-0 right-0 z-50 w-full">
      <nav className="navbar justify-between px-6 py-4">
        <Link href="/" className="text-black">
          RockBalm
        </Link>

        <ul className="font-medium gap-6 hidden md:flex">
          {NavLinks.map((link, index) => (
            <li
              key={index}
              className="font-inter text-primary text-[clamp(14px,_1vw,_16px)]"
            >
              <Link href={`/${link}`}>{link}</Link>
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
