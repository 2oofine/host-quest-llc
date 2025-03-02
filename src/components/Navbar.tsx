import Image from "next/image";
import React from "react";
import Logo from "../../public/logos/logo-hql-white.svg";
import Link from "next/link";

const Navbar = () => {
  return (
    <header className="fixed top-0 left-0 w-full z-50">
      <div className="flex items-center justify-between px-5 my-[25px] md:mx-[40px] md:px-[20px] py-[15px] bg-black/30 backdrop-blur-[50px] md:rounded-[8px]">
        <Link href={"/"} className="flex items-center gap-1">
          <Image src={Logo} alt="Host Quest LLC Logo" className="w-[158px] max-w-full h-auto object-contain" />
        </Link>

        <nav className="hidden lg:flex justify-center" aria-label="Main Navigation">
          <ul className="hidden lg:flex items-center space-x-8 md:font-medium text-white">
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

        <div className="hidden lg:flex h-full items-center">
          <Link className="btn-primary-42 w-[163px] text-black bg-aeroBlue" href={"/contact"}>
            Contact Us
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
