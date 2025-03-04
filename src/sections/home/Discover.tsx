import React from "react";
import StrongWorkforce from "../../../public/images/home/home-discover-strong-workforce.jpg";
import AdvanceCareer from "../../../public/images/home/home-discover-advance-your-career.jpg";
import Briefcase from "../../../public/icons/home/briefcase.svg";
import Search from "../../../public/icons/home/search.svg";
import Arch1 from "../../../public/icons/home/arch1.svg";
import Arch2 from "../../../public/icons/home/arch2.svg";
import Arch3 from "../../../public/icons/home/arch3.svg";
import Arch4 from "../../../public/icons/home/arch4.svg";
import Image from "next/image";

const Discover = () => {
  return (
    <div className="relative overflow-hidden">
      <div className="mx-10 2xl:container 2xl:mx-auto bg-aeroBlue relative overflow-hidden z-10">
        <div className="container mx-auto absolute inset-0 -z-10">
          {/* Top Left */}
          <Image
            src={Arch1}
            alt="Arch"
            className="block absolute left-[6.6%] 2xl:left-[8.2%] top-0 transform -translate-x-1/2 -translate-y-2/2"
          />
          {/* Top Right */}
          <Image
            src={Arch2}
            alt="Arch"
            className="block absolute right-[3.2%] top-[15%] translate-x-1/2 -translate-y-1/3"
          />
          {/* Bottom Left */}
          <Image
            src={Arch3}
            alt="Arch"
            className="block absolute left-[3.2%] bottom-[23%] -translate-x-1/2 translate-y-1/3"
          />
          {/* Bottom Right */}
          <Image
            src={Arch4}
            alt="Arch"
            className="block absolute right-[6.6%] 2xl:right-[8.2%] bottom-[4.8%] translate-x-1/2 translate-y-1/3"
          />
        </div>
        <div className="container mx-auto pt-[50px] pb-[101px]">
          {/* Title */}
          <div className="text-center">
            <h1 className="text-[30px] md:text-[40px] font-semibold leading-none">Discover How We Can Help You</h1>
            <p className="mt-[9px]">
              Explore our specialized services below and let Host Quest LLC help you achieve your workforce and career
              goals.
            </p>
          </div>

          <div className="flex flex-col lg:flex-row items-center justify-center gap-5 mt-[40px]">
            {/* Card 1 */}
            <div className="bg-white max-w-full w-[555px] h-[596px] flex flex-col">
              {/* Text Section */}
              <div className="px-5 py-6 lg:px-[41px] lg:py-10 flex flex-col flex-grow min-h-0 justify-center lg:justify-normal">
                <div className="w-12 shrink-0 flex items-center justify-center">
                  <Image src={Briefcase} alt="Briefcase" className="w-[50px] h-[50px] lg:w-[60px] lg:h-[60px]" />
                </div>
                <h2 className="font-semibold text-[22px] lg:text-[28px] mt-[16px] lg:mt-[24px] truncate">
                  Build a Strong Workforce
                </h2>
                <p className="mt-1 text-[18px] lg:text-[18px] overflow-hidden text-ellipsis">
                  Gain access to a diverse and skilled workforce through our strategic recruitment and talent management
                  solutions.
                </p>
              </div>

              {/* Image Section */}
              <div className="relative w-full h-[305px] flex items-center overflow-hidden">
                <Image src={StrongWorkforce} alt="Build a Strong Workforce" className="w-full h-full object-cover" />
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-white max-w-full w-[555px] h-[596px] flex flex-col">
              {/* Text Section */}
              <div className="px-5 py-6 lg:px-[41px] lg:py-10 flex flex-col flex-grow min-h-0 justify-center lg:justify-normal">
                <div className="w-12 shrink-0 flex items-center justify-center">
                  <Image src={Search} alt="Search" className="w-[50px] h-[50px] lg:w-[60px] lg:h-[60px]" />
                </div>
                <h2 className="font-semibold text-[22px] lg:text-[28px] mt-[16px] lg:mt-[24px] truncate">
                  Advance Your Career
                </h2>
                <p className="mt-1 text-[18px] lg:text-[18px] overflow-hidden text-ellipsis">
                  Find meaningful employment with the support of our career guidance and placement services.
                </p>
              </div>

              {/* Image Section */}
              <div className="relative w-full h-[305px] flex items-center overflow-hidden">
                <Image src={AdvanceCareer} alt="Advance Your Career" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Discover;
