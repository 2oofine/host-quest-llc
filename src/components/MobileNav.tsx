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
      {/* Hamburger Button - Always visible on mobile */}
      <button
        className="lg:hidden block text-white text-2xl focus:outline-none"
        onClick={toggleMobileNav}
        aria-label="Toggle menu"
      >
        ☰
      </button>

      {/* Mobile Menu Overlay */}
      <div
        className={`lg:hidden fixed inset-0 z-50 bg-black/50 transition-opacity duration-300 ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        {/* Mobile Menu Panel */}
        <div
          className={`fixed top-0 right-0 h-full w-4/5 max-w-xs bg-primary-dark p-5 mobile-nav transition-transform duration-300 ease-in-out ${
            isOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex items-center justify-between mb-8">
            <Link href={"/"} className="flex items-center gap-1" onClick={toggleMobileNav}>
              <Image src={Logo} alt="Host Quest LLC Logo" className="w-[158px] max-w-full h-auto object-contain" />
            </Link>
            <button
              onClick={toggleMobileNav}
              className="text-white text-2xl focus:outline-none"
              aria-label="Close menu"
            >
              &times;
            </button>
          </div>

          <nav aria-label="Mobile Navigation">
            <ul className="flex flex-col space-y-6 text-white">
              <li>
                <Link href={"/"} onClick={toggleMobileNav} className="block py-2 hover:text-aeroBlue">
                  Home
                </Link>
              </li>
              <li>
                <Link href={"/services"} onClick={toggleMobileNav} className="block py-2 hover:text-aeroBlue">
                  Services
                </Link>
              </li>
              <li>
                <Link href={"/about-us"} onClick={toggleMobileNav} className="block py-2 hover:text-aeroBlue">
                  About Us
                </Link>
              </li>
              <li>
                <Link href={"/job-seekers"} onClick={toggleMobileNav} className="block py-2 hover:text-aeroBlue">
                  Job Seekers
                </Link>
              </li>
              <li>
                <Link href={"/employers"} onClick={toggleMobileNav} className="block py-2 hover:text-aeroBlue">
                  Employers
                </Link>
              </li>
              <li className="mt-4">
                <Link
                  href={"/contact-us"}
                  className="btn-primary-42 w-full text-black bg-aeroBlue text-center flex items-center justify-center py-3 rounded hover:bg-[#78B0B2] hover:text-white"
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
