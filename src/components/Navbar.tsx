import Image from "next/image";
import React from "react";
import Logo from "../../public/logos/logo-hql-white.svg";
import Link from "next/link";
import MobileNav from "./MobileNav";

const Navbar = () => {
  return (
    <header className="fixed top-0 left-0 w-full z-50">
      <div className="flex items-center justify-between px-5 lg:px-[40px] py-[15px] bg-primary-dark">
        <Link href={"/"} className="flex items-center gap-1">
          <Image src={Logo} alt="Host Quest LLC Logo" className="w-[158px] max-w-full h-auto object-contain" />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex justify-center" aria-label="Main Navigation">
          <ul className="flex items-center space-x-8 text-white">
            <li className="hover:bg-slate-400 hover:rounded-3xl hover:py-1 hover:px-3">
              <Link href={"/"}>Home</Link>
            </li>
            <li className="hover:bg-slate-400 hover:rounded-3xl hover:py-1 hover:px-3">
              <Link href={"/services"}>Services</Link>
            </li>
            <li className="hover:bg-slate-400 hover:rounded-3xl hover:py-1 hover:px-3">
              <Link href={"/about-us"}>About Us</Link>
            </li>
            <li className="hover:bg-slate-400 hover:rounded-3xl hover:py-1 hover:px-3">
              <Link href={"/job-seekers"}>Job Seekers</Link>
            </li>
            <li className="hover:bg-slate-400 hover:rounded-3xl hover:py-1 hover:px-3">
              <Link href={"/employers"}>Employers</Link>
            </li>
            <li className="h-full flex items-center">
              <Link
                className="hover:bg-[#78B0B2] hover:text-white btn-primary-42 w-[163px] text-black bg-aeroBlue"
                href={"/contact-us"}
              >
                Contact Us
              </Link>
            </li>
          </ul>
        </nav>

        {/* Mobile Navigation Toggle */}
        <MobileNav />
      </div>
    </header>
  );
};

export default Navbar;
