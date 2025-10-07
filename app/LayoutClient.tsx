"use client";

import { usePathname } from "next/navigation";
import Navbar from "./NavBar/Navbar";
import Footer from "./Footer/footer";

export default function LayoutClient({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();

  // Only show Navbar and Footer on the home page
  const showLayout = pathname !== "/Dashboard";

  return (
    <>
      {showLayout && <Navbar />}
      <main>{children}</main>
      {showLayout && <Footer />}
    </>
  );
}
