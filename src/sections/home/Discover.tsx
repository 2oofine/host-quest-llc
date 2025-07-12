"use client";

import { motion } from "framer-motion";
import { SquareArrowOutUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import Briefcase from "../../../public/icons/home/briefcase.svg";
import Search from "../../../public/icons/home/search.svg";
import AdvanceCareer from "../../../public/images/home/home-discover-advance-your-career.jpg";
import StrongWorkforce from "../../../public/images/employers/employersbanner.png";

const Discover = () => {
  return (
    <section className="relative overflow-hidden">
      <div className="w-full bg-secondary-light z-10">
        {/*<div className="container mx-auto absolute inset-0 -z-10">
        
          <Image
            src={Arch1}
            alt="Arch"
            className="block absolute left-[6.6%] 2xl:left-[8.2%] top-0 transform -translate-x-1/2 -translate-y-2/2"
          />
          <Image
            src={Arch2}
            alt="Arch"
            className="block absolute right-[3.2%] top-[15%] translate-x-1/2 -translate-y-1/3"
          />
          <Image
            src={Arch3}
            alt="Arch"
            className="block absolute left-[3.2%] bottom-[23%] -translate-x-1/2 translate-y-1/3"
          />
          <Image
            src={Arch4}
            alt="Arch"
            className="block absolute right-[6.6%] 2xl:right-[8.2%] bottom-[4.8%] translate-x-1/2 translate-y-1/3"
          />
        </div></section> */}
        <div className="container mx-auto pt-[50px] pb-[101px]">
          {/* Title */}
          <motion.div
            initial={{ opacity: 0 }}
            // animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center text-primary-dark px-5 lg:px-0"
          >
            <h1 className="text-[30px] md:text-[40px] font-semibold leading-none">Discover How We Can Help You</h1>
            <p className="mt-[9px]">
              Explore our specialized services below and let Host Quest LLC help you achieve your workforce and career
              goals.
            </p>
          </motion.div>

          <div className="flex flex-col lg:flex-row items-center justify-center gap-5 mt-[40px]">
            {/* Card 1 */}
            <motion.div
              initial={{ opacity: 0 }}
              // animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
              className="bg-primary-dark max-w-full w-[555px] h-[596px] flex flex-col"
            >
              {/* Text Section */}
              <div className="px-5 py-6 lg:px-[41px] lg:py-10 flex flex-col flex-grow min-h-0 justify-center lg:justify-normal">
                <div className="w-12 shrink-0 flex items-center justify-center">
                  <Image src={Briefcase} alt="Briefcase" className="w-[50px] h-[50px] lg:w-[60px] lg:h-[60px] " />
                </div>
                <h2 className="font-semibold text-[22px] lg:text-[28px] mt-[16px] lg:mt-[24px] truncate text-primary-light">
                  Build a Strong Workforce
                </h2>
                <p className="mt-1 text-[18px] lg:text-[18px] overflow-hidden text-ellipsis">
                  Gain access to a diverse and skilled workforce through our strategic recruitment and talent management
                  solutions.
                </p>
              </div>

              {/* Image Section */}
              <Link
                href="/job-seekers" // add url here.
                className="relative w-full h-[305px] flex items-center overflow-hidden group"
              >
                {/* Image */}
                <Image
                  src={StrongWorkforce}
                  alt="Build A Strong Workforce"
                  className="w-full h-full object-cover transform transition-transform duration-300 group-hover:scale-110"
                />

                {/* Overlay (Dim Background) */}
                <div className="absolute inset-0 bg-black/50 opacity-0 transition-opacity duration-300 group-hover:opacity-100 flex items-center justify-center">
                  {/* See More Button */}
                  <div className="flex items-center justify-center gap-x-1 px-4 py-2 text-white rounded-lg transition-transform duration-300 hover:scale-105">
                    See More
                    <SquareArrowOutUpRight size={20} />
                  </div>
                </div>
              </Link>
            </motion.div>

            {/* Card 2 */}
            <motion.div
              initial={{ opacity: 0 }}
              // animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.8 }}
              className="bg-primary-dark max-w-full w-[555px] h-[596px] flex flex-col"
            >
              {/* Text Section */}
              <div className="px-5 py-6 lg:px-[41px] lg:py-10 flex flex-col flex-grow min-h-0 justify-center lg:justify-normal">
                <div className="w-12 shrink-0 flex items-center justify-center">
                  <Image
                    src={Search}
                    alt="Search"
                    width={50}
                    height={50}
                    className="w-auto h-auto lg:w-[60px] lg:h-[60px]"
                  />
                </div>
                <h2 className="font-semibold text-[22px] lg:text-[28px] mt-[16px] lg:mt-[24px] truncate text-primary-light">
                  Advance Your Career
                </h2>
                <p className="mt-1 text-[18px] lg:text-[18px] overflow-hidden text-ellipsis">
                  Find meaningful employment with the support of our career guidance and placement services.
                </p>
              </div>

              {/* Image Section */}
              <Link href="/employers" className="relative w-full h-[305px] flex items-center overflow-hidden group">
                {/* Image */}
                <Image
                  src={AdvanceCareer}
                  alt="Advance Your Career"
                  className="w-full h-full object-cover transform transition-transform duration-300 group-hover:scale-110"
                />

                {/* Overlay (Dim Background) */}
                <div className="absolute inset-0 bg-black/50 opacity-0 transition-opacity duration-300 group-hover:opacity-100 flex items-center justify-center">
                  {/* See More Button */}
                  <div className="flex items-center justify-center gap-x-1 px-4 py-2 text-white rounded-lg transition-transform duration-300 hover:scale-105">
                    See More
                    <SquareArrowOutUpRight size={20} />
                  </div>
                </div>
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Discover;
