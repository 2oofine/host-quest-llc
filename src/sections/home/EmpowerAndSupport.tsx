"use client";

import Image from "next/image";
import { motion, useInView } from "framer-motion";
import React, { useRef } from "react";
import Empower from "../../../public/images/home/home-empowering-job-seekers.jpg";
import Support from "../../../public/images/home/home-supporting-businesses-with-top-talent.jpg";
import LongCard from "../../components/LongCard";
import Globe from "../../../public/icons/home/globe.svg";
import ListBoard from "../../../public/icons/home/listboard.svg";
import Connection from "../../../public/icons/home/connection.svg";

const EmpowerAndSupport = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px 0px" });

  // Variants for the first section (left to center)
  const listVariantsLeft = {
    hidden: { opacity: 0, x: -100 },
    visible: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.2, // Staggered delay
        duration: 0.5,
        ease: "easeOut",
      },
    }),
  };

  // Variants for the second section (right to center)
  const listVariantsRight = {
    hidden: { opacity: 0, x: 100 },
    visible: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.2, // Staggered delay
        duration: 0.5,
        ease: "easeOut",
      },
    }),
  };

  return (
    <section ref={sectionRef} className="relative overflow-hidden">
      {/* Animated Dots */}
      <div className="container mx-auto absolute inset-0">
        {/* Top Left */}
        <motion.img
          src={"/icons/home/dots.svg"}
          alt="Dots"
          initial={{ x: -100, opacity: 0 }}
          animate={isInView ? { x: 0, opacity: 1 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="block absolute left-0 top-[2%] transform -translate-x-1/2 -translate-y-2/2 2xl:-translate-x-0"
        />
        {/* Top Right */}
        <motion.img
          src={"/icons/home/dots.svg"}
          alt="Dots"
          initial={{ x: 100, opacity: 0 }}
          animate={isInView ? { x: 0, opacity: 1 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="block absolute right-0 top-[44%] translate-x-1/2 -translate-y-1/3 2xl:-translate-x-0"
        />
        {/* Bottom Left */}
        <motion.img
          src={"/icons/home/dots.svg"}
          alt="Dots"
          initial={{ x: -100, opacity: 0 }}
          animate={isInView ? { x: 0, opacity: 1 } : {}}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="block absolute left-0 bottom-[40%] -translate-x-1/2 translate-y-1/3 2xl:-translate-x-0"
        />
        {/* Bottom Right */}
        <motion.img
          src={"/icons/home/dots.svg"}
          alt="Dots"
          initial={{ x: 100, opacity: 0 }}
          animate={isInView ? { x: 0, opacity: 1 } : {}}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="block absolute right-0 bottom-[8%] translate-x-1/2 translate-y-1/3 2xl:-translate-x-0"
        />
      </div>

      <div className="container mx-auto px-5 relative my-8 lg:my-24 lg:space-y-28 space-y-10">
        {/* Section 1: Empowering Job Seekers */}
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={isInView ? { x: 0, opacity: 1 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="container mx-auto flex flex-col-reverse lg:flex-row max-w-full w-[1132px] items-center justify-center gap-x-5"
        >
          {/* Left Content */}
          <div className="text-center lg:text-left w-full lg:w-[555px]">
            <h1 className="hidden lg:block font-semibold text-[32px] lg:text-[40px]">Empowering Job Seekers</h1>
            <p className="mt-6 text-[16px] lg:text-[18px]">
              We understand that finding the right job is more than just securing employment—it’s about building a
              meaningful career. Our services include:
            </p>
            <ul className="flex flex-col items-center mt-6 space-y-4">
              {[
                {
                  icon: Globe,
                  iconName: "globe",
                  text: "Access to global job opportunities across multiple industries.",
                },
                {
                  icon: ListBoard,
                  iconName: "listboard",
                  text: "Personalized career support, including resume enhancement and interview preparation.",
                },
                {
                  icon: Connection,
                  iconName: "connection",
                  text: "A seamless application process connecting you directly with reputable employers.",
                },
              ].map((item, index) => (
                <motion.li
                  key={index}
                  className="w-full"
                  variants={listVariantsLeft}
                  initial="hidden"
                  animate={isInView ? "visible" : "hidden"}
                  custom={index}
                  whileHover={{ scale: 1.05 }}
                >
                  <LongCard icon={item.icon} iconName={item.iconName} text={item.text} />
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Right Image */}
          <motion.div
            className="relative w-full lg:w-[555px] h-auto lg:h-[555px] max-w-full flex items-center"
            whileHover={{ rotateZ: 2 }}
            transition={{ duration: 0.2 }} // Quick transition
          >
            <h1 className="absolute inset-0 flex items-center text-center justify-center text-white text-[32px] font-semibold bg-charcoalNavy/60 p-4 rounded-lg lg:hidden">
              Empowering Job Seekers
            </h1>
            <Image src={Empower} alt="Empowering Job Seekers" className="w-full h-full object-cover rounded-lg" />
          </motion.div>
        </motion.div>

        {/* Section 2: Supporting Businesses */}
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          animate={isInView ? { x: 0, opacity: 1 } : {}}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="container mx-auto flex flex-col-reverse lg:flex-row-reverse max-w-full w-[1132px] items-center justify-center gap-x-5"
        >
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
              {[
                {
                  icon: Globe,
                  iconName: "globe",
                  text: "Comprehensive talent acquisition strategies tailored to business needs.",
                },
                {
                  icon: ListBoard,
                  iconName: "listboard",
                  text: "A diverse and qualified talent pool, ranging from entry-level to highly specialized professionals.",
                },
                {
                  icon: Connection,
                  iconName: "connection",
                  text: "Efficient recruitment solutions that save time, reduce costs, and ensure the perfect hire.",
                },
              ].map((item, index) => (
                <motion.li
                  key={index}
                  className="w-full"
                  variants={listVariantsRight}
                  initial="hidden"
                  animate={isInView ? "visible" : "hidden"}
                  custom={index} // Delay index
                  whileHover={{ scale: 1.05 }}
                >
                  <LongCard icon={item.icon} iconName={item.iconName} text={item.text} />
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Left Image */}
          <motion.div
            className="relative w-full lg:w-[555px] h-auto lg:h-[555px] max-w-full flex items-center"
            whileHover={{ rotateZ: -2 }}
            transition={{ duration: 0.2 }} // Quick transition
          >
            <h1 className="absolute inset-0 flex items-center text-center justify-center text-white text-[32px] font-semibold bg-charcoalNavy/60 p-4 rounded-lg lg:hidden">
              Supporting Businesses With Top Talent
            </h1>
            <Image
              src={Support}
              alt="Supporting Businesses With Top Talent"
              className="w-full h-full object-cover rounded-lg"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default EmpowerAndSupport;
