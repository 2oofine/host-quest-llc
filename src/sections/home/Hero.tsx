import Image from "next/image";
import React from "react";
import HeroBanner from "../../../public/images/home/home-hero-banner.jpg";

const Hero = () => {
  return (
    <section className="relative w-full h-screen">
      <Image src={HeroBanner} alt="Hero Banner" style={{ objectFit: "cover", objectPosition: "top" }} fill priority />

      <div className="absolute inset-0 bg-charcoalNavy/60 z-10" />

      <div className="px-5 md:px-0 container absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center w-full text-white z-20">
        <div className="mt-28 md:mt-0 md:space-y-3">
          <h1 className="text-3xl md:text-5xl font-semibold">Host Quest LLC</h1>
          <h1 className="text-3xl md:text-5xl font-semibold">Bringing Talent and Business Success</h1>
        </div>

        <p className="my-5 text-[16px] md:text-xl mx-auto max-w-full w-[1164px] font-thin">
          At Host Quest LLC, we are dedicated to connecting skilled and unskilled professionals with the right career
          opportunities while empowering businesses of all sizes with toptier talent. As a leading international
          recruitment agency, we provide tailored workforce solutions that streamline hiring, enhance productivity, and
          drive long-term success for both job seekers and employers.
        </p>

        <div className="flex flex-col md:flex-row items-center justify-center gap-5">
          <button className="btn-primary-42 bg-aeroBlue w-[210px] text-charcoalNavy font-semibold">Job Seekers</button>
          <button className="btn-primary-42  w-[210px] border border-white font-semibold">Employers</button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
