import Image from "next/image";
import React from "react";
import HeroBanner from "../../../public/images/home/home-hero-banner.jpg";

const Hero = () => {
  return (
    <section className="relative w-full h-screen">
      {/* Background Image */}
      <Image src={HeroBanner} alt="Hero Banner" style={{ objectFit: "cover", objectPosition: "top" }} fill priority />

      {/* Dark Overlay (Make sure it's absolutely positioned inside relative parent) */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: "#293241",
          opacity: "60%",
          zIndex: 10,
        }}
      />

      {/* Content (Ensures text stays on top) */}
    </section>
  );
};

export default Hero;
