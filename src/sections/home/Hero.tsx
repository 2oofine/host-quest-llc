"use client";
import Image from "next/image";
import React from "react";
import HeroBanner from "../../../public/images/home/home-hero-banner.jpg";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="relative w-full min-h-screen flex items-center pt-32 pb-20 md:pt-0 md:pb-0">
      {/* Background Image */}
      <Image src={HeroBanner} alt="Hero Banner" style={{ objectFit: "cover", objectPosition: "top" }} fill priority />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-primary-dark/60 z-10" />

      {/* Content */}
      <div className="container mx-auto px-5 md:px-0 text-left text-white z-20">
        {/* Title */}
        <motion.div
          className="space-y-3 mb-6"
          initial={false}
          animate={{ opacity: 1 }}
          // transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h1 className="text-3xl md:text-5xl font-semibold">Host Quest LLC Bridging</h1>
          <h1 className="text-3xl md:text-5xl font-semibold">
            Talent and Business <br />
            <span className="text-primary-light">Success</span>
          </h1>
        </motion.div>

        {/* Description */}
        <motion.p
          className="text-[16px] md:text-xl max-w-[836px] font-thin mb-6"
          initial={false}
          animate={{ opacity: 1 }}
          // transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
        >
          At Host Quest LLC, we are dedicated to connecting skilled and unskilled professionals with the right career
          opportunities while empowering businesses of all sizes with top-tier talent. As a leading international
          recruitment agency, we provide tailored workforce solutions that streamline hiring, enhance productivity, and
          drive long-term success for both job seekers and employers.
        </motion.p>

        {/* Buttons */}
        <div className="flex flex-col md:flex-row items-center gap-4">
          <motion.button
            initial={false}
            animate={{ opacity: 1 }}
            // transition={{ duration: 1, delay: 0.8, ease: "easeOut" }}
            className="hover:bg-[#78B0B2] hover:text-white btn-primary-42 bg-aeroBlue w-[210px] text-charcoalNavy font-semibold"
          >
            Job Seekers
          </motion.button>
          <motion.button
            initial={false}
            animate={{ opacity: 1 }}
            // transition={{ duration: 1, delay: 0.8, ease: "easeOut" }}
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
