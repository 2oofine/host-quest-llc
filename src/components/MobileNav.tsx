"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import Logo from "../../public/logos/logo-hql-white.svg";

const MobileNav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMobileNav = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const mobileNav = document.querySelector(".mobile-nav");
      if (mobileNav && !mobileNav.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("click", handleClickOutside);
    }

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [isOpen]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isOpen]);

  return (
    <>
      <button className="lg:hidden text-white text-2xl" onClick={toggleMobileNav}>
        &#9776;
      </button>

      <div
        className={`fixed inset-0 z-50 bg-black/50 backdrop-blur-[50px] transition-opacity duration-300 ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        <div
          className={`fixed top-0 right-0 h-screen w-64 bg-black/70 backdrop-blur-[50px] p-5 mobile-nav transition-transform duration-300 ${
            isOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex items-center justify-between mb-8">
            <Link href={"/"} className="flex items-center gap-1">
              <Image src={Logo} alt="Host Quest LLC Logo" className="w-[158px] max-w-full h-auto object-contain" />
            </Link>
            <button onClick={toggleMobileNav} className="text-white text-2xl">
              &times;
            </button>
          </div>

          <nav aria-label="Mobile Navigation">
            <ul className="flex flex-col space-y-4 text-white">
              <li>
                <Link href={"/"} onClick={toggleMobileNav}>
                  Home
                </Link>
              </li>
              <li>
                <Link href={"/services"} onClick={toggleMobileNav}>
                  Services
                </Link>
              </li>
              <li>
                <Link href={"/about"} onClick={toggleMobileNav}>
                  About
                </Link>
              </li>
              <li>
                <Link href={"/job-seekers"} onClick={toggleMobileNav}>
                  Job Seekers
                </Link>
              </li>
              <li>
                <Link href={"/employers"} onClick={toggleMobileNav}>
                  Employers
                </Link>
              </li>
              <li>
                <Link
                  href={"/contact"}
                  className="btn-primary-42 w-full text-black bg-aeroBlue text-center flex items-center justify-center py-2 rounded "
                  onClick={toggleMobileNav}
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
};

export default MobileNav;
