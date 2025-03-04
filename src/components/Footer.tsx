import Link from "next/link";
import React from "react";
import Image from "next/image";
import Logo from "../../public/logos/logo-hql.svg";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="text-charcoalNavy bg-aeroBlue">
      <div className=" pt-16 pb-12 px-5 grid grid-cols-1 md:px-10 lg:px-[155px] sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-y-8 ">
        <div className="flex flex-col items-center md:block">
          <Link href={"/"} className="flex items-center">
            <Image src={Logo} alt="Host Quest LLC Logo" className="w-[138px] max-w-full h-auto" />
          </Link>
          <div className="w-full text-center mt-4 md:w-52 md:text-left md:mt-8">
            To Connect Top Talent With the Right Opportunities, Empowering Businesses And Job Seekers For Long-Term
            Success.
          </div>
        </div>
        <div>
          <p className="footer-text font-semibold">Quick Links</p>
          <nav>
            <ul className="footer-text mt-[15px] space-y-3">
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
        </div>
        <div>
          <p className="footer-text font-semibold">Social Media</p>
          <nav>
            <ul className="footer-text mt-[15px] space-y-3">
              <li>
                <Link href={"/"}>Facebook</Link>
              </li>
              <li>
                <Link href={"/services"}>Instagram</Link>
              </li>
              <li>
                <Link href={"/about"}>Twitter</Link>
              </li>
              <li>
                <Link href={"/job-seekers"}>LinkedIn</Link>
              </li>
            </ul>
          </nav>
        </div>
        <div>
          <p className="footer-text font-semibold">Office Information</p>

          <ul className="footer-text mt-[15px] space-y-3">
            <li>+123 456 789 000</li>
            <li>
              <a href="mailto:info@hostquestllc.com">info@hostquestllc.com</a>
            </li>
            <li>XYZ Hilton Street, Los Angeles, Californa</li>
          </ul>
        </div>
      </div>

      <hr className="bg-black/20 mx-4 md:mx-10 lg:mx-[40px]" />

      <div className="text-center pt-[30px] pb-[44px] mx-4">
        Host Quest LLC - Copyright &copy; {year}. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
