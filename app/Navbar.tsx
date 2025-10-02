import Link from "next/link";

const Navbar = () => {
  const NavLinks = [
    "Home",
    "About Us",
    "Plans",
    "Services",
    "Blog",
    "Self Care Hub",
  ];
  return (
    <header className="bg-white ">
      <nav className="navbar justify-between px-6">
        <Link href="/" className="text-black">
          RockBalm
        </Link>

        <ul className="flex gap-6">
          {NavLinks.map((link, index) => (
            <li key={index} className="font-inter text-primary">
              <Link href={`/${link}`}>{link}</Link>
            </li>
          ))}
        </ul>

        <div>
          <button className="btn">Login</button>
          <button className="btn">Create Account</button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
