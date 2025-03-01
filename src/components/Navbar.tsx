import Image from "next/image";
import React from "react";
import Logo from "../../public/logos/logo-hql-white.svg";
import Link from "next/link";

const Navbar = () => {
  return (
    <header className="fixed top-0 left-0 w-full z-50">
      <div className="flex items-center justify-between my-[25px] mx-[40px] px-[20px] py-[15px] bg-white/30 backdrop-blur-[50px] rounded-[8px]">
        <Link href={"/"} className="flex items-center gap-1">
          <Image src={Logo} alt="Host Quest LLC Logo" width={158} height={60} />
          {/* <p className="text-white text-xl uppercase leading-none">
            <span className="block">Host</span>
            <span className="block">Quest</span>
            <span className="block">LLC</span>
          </p> */}
        </Link>

        <nav className="hidden md:flex justify-center" aria-label="Main Navigation">
          <ul className="hidden md:flex items-center space-x-8 font-medium text-white">
            <li>
              <Link href={"/"}>Home</Link>
            </li>
            <li>
              <Link href={"/services"}>Services</Link>
            </li>
            <li>
              <Link href={"/about"}>About</Link>
            </li>
            <li>
              <Link href={"/job-seekers"}>Job Seekers</Link>
            </li>
            <li>
              <Link href={"/employers"}>Employers</Link>
            </li>
          </ul>
        </nav>

        <div className="hidden md:flex h-full items-center">
          <Link className="btn-primary-60 text-black bg-[#E0FBFC]" href={"/contact"}>
            Contact Us
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
