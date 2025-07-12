"use client";
import Image from "next/image";
import React from "react";
import HeroBanner from "../../../public/images/home/home-hero-banner.jpg";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="relative w-full h-screen">
      <Image src={HeroBanner} alt="Hero Banner" style={{ objectFit: "cover", objectPosition: "top" }} fill priority />

      <div className="absolute inset-0 bg-charcoalNavy/60 z-10" />

      <div className="px-5 md:px-0 container absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center lg:text-left w-full text-white z-20">
        {/* Title */}
        <motion.div
          className="mt-28 md:mt-0 md:space-y-3 "
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h1 className="text-3xl md:text-5xl font-semibold">Host Quest LLC Bringing</h1>
          <h1 className="text-3xl md:text-5xl font-semibold">Talent and Business</h1>
          <h1 className="text-3xl md:text-5xl font-semibold text-primary-light">Success</h1>
        </motion.div>

        {/* Animated Description */}
        <motion.p
          className="my-5 text-base md:text-xl font-thin container lg:text-left lg:w-[63%] w-full"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
        >
          {" "}
          At Host Quest LLC, we are dedicated to connecting skilled and unskilled professionals with the right career
          opportunities while empowering businesses of all sizes with top-tier talent. As a leading international
          recruitment agency, we provide tailored workforce solutions that streamline hiring, enhance productivity, and
          drive long-term success for both job seekers and employers.
        </motion.p>

        <div className="flex flex-col md:flex-row items-center justify-center lg:justify-start gap-5">
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8, ease: "easeOut" }}
            className="hover:bg-[#78B0B2] hover:text-white btn-primary-42 bg-aeroBlue w-[210px] text-charcoalNavy font-semibold"
          >
            Job Seekers
          </motion.button>
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8, ease: "easeOut" }}
            className="hover:bg-aeroBlue hover:border-transparent hover:text-charcoalNavy btn-primary-42 w-[210px] border border-white font-semibold"
          >
            Employers
          </motion.button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
