import React from "react";
import Dots from "../../../public/icons/home/dots.svg";
import Empower from "../../../public/images/home/home-empowering-job-seekers.jpg";
import Support from "../../../public/images/home/home-supporting-businesses-with-top-talent.jpg";
import Globe from "../../../public/icons/home/globe.svg";
import ListBoard from "../../../public/icons/home/listboard.svg";
import Connection from "../../../public/icons/home/connection.svg";
import Image from "next/image";
import LongCard from "@/components/LongCard";

const EmpowerAndSupport = () => {
  return (
    <div className="relative overflow-hidden">
      <div className="container mx-auto absolute inset-0 ">
        {/* Top Left */}
        <Image
          src={Dots}
          alt="Dots"
          className="block absolute left-0 top-[2%] transform -translate-x-1/2 -translate-y-2/2 2xl:-translate-x-0"
        />
        {/* Top Right */}
        <Image
          src={Dots}
          alt="Dots"
          className="block absolute right-0 top-[44%] translate-x-1/2 -translate-y-1/3 2xl:-translate-x-0"
        />
        {/* Bottom Left */}
        <Image
          src={Dots}
          alt="Dots"
          className="block absolute left-0 bottom-[40%] -translate-x-1/2 translate-y-1/3 2xl:-translate-x-0"
        />
        {/* Bottom Right */}
        <Image
          src={Dots}
          alt="Dots"
          className="block absolute right-0 bottom-[8%] translate-x-1/2 translate-y-1/3 2xl:-translate-x-0"
        />
      </div>
      <div className="container mx-auto px-5 relative my-8 lg:my-24 lg:space-y-28 space-y-10">
        <div className="container mx-auto flex flex-col-reverse lg:flex-row max-w-full w-[1132px] items-center justify-center gap-x-5">
          {/* Left Content */}
          <div className="text-center lg:text-left w-full lg:w-[555px]">
            <h1 className="hidden lg:block text-[32px] lg:text-[40px]">Empowering Job Seekers</h1>
            <p className="mt-6 text-[16px] lg:text-[18px]">
              We understand that finding the right job is more than just securing employment—it’s about building a
              meaningful career. Our services include:
            </p>
            <ul className="flex flex-col items-center mt-6 space-y-4">
              <li className="w-full">
                <LongCard
                  icon={Globe}
                  iconName="globe"
                  text="Access to global job opportunities across multiple industries."
                />
              </li>
              <li className="w-full">
                <LongCard
                  icon={ListBoard}
                  iconName="listboard"
                  text="Personalized career support, including resume enhancement and interview preparation."
                />
              </li>
              <li className="w-full">
                <LongCard
                  icon={Connection}
                  iconName="connection"
                  text="A seamless application process connecting you directly with reputable employers."
                />
              </li>
            </ul>
          </div>

          {/* Right Image */}
          <div className="relative w-full lg:w-[555px] h-auto lg:h-[555px] max-w-full flex items-center">
            <h1 className="absolute inset-0 flex items-center text-center justify-center text-white text-[32px] font-semibold bg-charcoalNavy/60 p-4 rounded-lg lg:hidden">
              Empowering Job Seekers
            </h1>
            <Image src={Empower} alt="Empowering Job Seekers" className="w-full h-full object-cover rounded-lg" />
          </div>
        </div>

        {/* Section 2: Businesses */}
        <div className="container mx-auto flex flex-col-reverse lg:flex-row-reverse max-w-full w-[1132px] items-center justify-center gap-x-5">
          {/* Right Content */}
          <div className="text-center lg:text-left w-full lg:w-[555px]">
            <h1 className="hidden lg:block text-[32px] lg:text-[40px] font-semibold">
              Supporting Businesses With Top Talent
            </h1>
            <p className="mt-6 text-[16px] lg:text-[18px]">
              The strength of any business lies in its people. We help organizations identify, attract, and retain top
              talent through:
            </p>
            <ul className="flex flex-col items-center mt-6 space-y-4">
              <li className="w-full">
                <LongCard
                  icon={Globe}
                  iconName="globe"
                  text="Comprehensive talent acquisition strategies tailored to business needs."
                />
              </li>
              <li className="w-full">
                <LongCard
                  icon={ListBoard}
                  iconName="listboard"
                  text="A diverse and qualified talent pool, ranging from entry-level to highly specialized professionals."
                />
              </li>
              <li className="w-full">
                <LongCard
                  icon={Connection}
                  iconName="connection"
                  text="Efficient recruitment solutions that save time, reduce costs, and ensure the perfect hire."
                />
              </li>
            </ul>
          </div>
          {/* Left Image */}
          <div className="relative w-full lg:w-[555px] h-auto lg:h-[555px] max-w-full flex items-center">
            <h1 className="absolute inset-0 flex items-center text-center justify-center text-white text-[32px] font-semibold bg-charcoalNavy/60 p-4 rounded-lg lg:hidden">
              Supporting Businesses With Top Talent
            </h1>
            <Image
              src={Support}
              alt="Supporting Businesses With Top Talent"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmpowerAndSupport;
