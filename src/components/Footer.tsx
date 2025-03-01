import Link from "next/link";
import React from "react";
import Image from "next/image";
import Logo from "../../public/logos/logo-hql.svg";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="text-charcoalNavy">
      <div className="mt-[91px] mb-[47px] mx-[155px] grid grid-cols-4">
        <div>
          <Link href={"/"} className="flex items-center gap-1">
            <Image src={Logo} alt="Host Quest LLC Logo" width={137} height={60} />
            {/* <p className="text-primary text-xl uppercase leading-none font-semibold">
              <span className="block">Host</span>
              <span className="block">Quest</span>
              <span className="block">LLC</span>
            </p> */}
          </Link>
          <div className="w-52 mt-8">
            To Connect Top Talent With the Right Opportunities, Empowering Businesses And Job Seekers For Long-Term
            Success.
          </div>
        </div>
        <div>Column 2</div>
        <div>Column 3</div>
        <div>Column 4</div>
      </div>

      <hr className="bg-black/20 mx-[40px]" />
      <div className="text-center mt-[30px] mb-[44px]">
        Host Quest LLC - Copyright &copy; {year}. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
