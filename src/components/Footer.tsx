import Link from "next/link";
import React from "react";
import Image from "next/image";
import Logo from "../../public/logos/logo-hql-white.svg";
import Facebook from "../../public/icons/home/facebook.svg";
import Instagram from "../../public/icons/home/instagram.svg";
import WhatsApp from "../../public/icons/home/whatsapp.svg";
import LinkedIn from "../../public/icons/home/linkedin.svg";
import { CompanyInfo } from "@/constants/company-info";

const Footer = () => {
  const year = new Date().getFullYear();
  const { email, name, whatsApp, address } = CompanyInfo;
  return (
    <footer className="text-secondary-light bg-primary-dark">
      <div className="container mx-auto pt-16 pb-12 px-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-y-8 gap-x-24 ">
        <div className="flex flex-col items-center md:block">
          <Link href={"/"} className="flex items-center">
            <Image src={Logo} alt="Host Quest LLC Logo" priority className="w-[138px] max-w-full h-auto" />
          </Link>
          <div className="w-full text-center mt-4 md:text-left md:mt-8">
            To Connect Top Talent With the Right Opportunities, Empowering Businesses And Job Seekers For Long-Term
            Success.
          </div>
          <div className="flex items-center gap-3 mt-4">
            <Link href="/">
              <Image src={Facebook} alt="facebook" width={30} height={30} className="w-[30px] h-[30px]" />
            </Link>
            <Link href="/">
              <Image src={Instagram} alt="instagram" width={30} height={30} className="w-[30px] h-[30px]" />
            </Link>
            <Link href="/">
              <Image src={WhatsApp} alt="whatsapp" width={30} height={30} className="w-[30px] h-[30px]" />
            </Link>
            <Link href="/">
              <Image src={LinkedIn} alt="linkedin" width={30} height={30} className="w-[30px] h-[30px]" />
            </Link>
          </div>
        </div>
        <div>
          <p className="footer-text font-semibold text-primary-light">Quick Links</p>
          <nav>
            <ul className="footer-text mt-[15px] gap-2 text-secondary-light/50 grid grid-cols-1 md:grid-cols-2 w-fit">
              <div className="space-y-3">
                <li>
                  <Link href={"/"}>Home</Link>
                </li>
                <li>
                  <Link href={"/services"}>Services</Link>
                </li>
                <li>
                  <Link href={"/about-us"}>About Us</Link>
                </li>
              </div>
              <div className="space-y-3">
                <li>
                  <Link href={"/job-seekers"}>Job Seekers</Link>
                </li>
                <li>
                  <Link href={"/employers"}>Employers</Link>
                </li>
                <li>
                  <Link href={"/employers"}>Contact Us</Link>
                </li>
              </div>
            </ul>
          </nav>
        </div>
        <div>
          <p className="footer-text font-semibold text-primary-light">Office Information</p>

          <ul className="footer-text mt-[15px] space-y-3 text-secondary-light">
            <li>
              <span className="font-semibold text-primary-light">Name: </span> {name}
            </li>
            <li>
              <span className="font-semibold text-primary-light">WhatsApp: </span>
              {whatsApp}
            </li>
            <li>
              <span className="font-semibold text-primary-light">Email: </span>
              <a href="mailto:info@hostquestllc.com">{email}</a>
            </li>
            <li>
              <span className="font-semibold text-primary-light">Address: </span>
              {address}
            </li>
          </ul>
        </div>
      </div>

      <hr
        className="w-full h-[1px] border-0"
        style={{
          background: "linear-gradient(to right, transparent, #07C6D0, transparent)",
        }}
      />

      <div className="text-center pt-[30px] pb-[44px] mx-4">
        Host Quest LLC - Copyright &copy; {year}. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
