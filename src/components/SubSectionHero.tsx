"use client";
import { motion } from "framer-motion";
import React from "react";
import Image, { StaticImageData } from "next/image";

interface Props {
  heroImage: StaticImageData;
  title: string;
  subtitle: string;
  imagePosition?: string;
}

const SubSectionHero = (props: Props) => {
  const { heroImage, title, subtitle, imagePosition = "center" } = props;
  return (
    <section className="relative w-full min-h-[80vh] flex items-center pt-32 pb-20 md:pt-0 md:pb-0">
      {/* Background Image */}
      <Image
        src={heroImage}
        alt="Hero Banner"
        style={{ objectFit: "cover", objectPosition: imagePosition }}
        fill
        priority
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-primary-dark/60 z-10" />

      {/* Content */}
      <div className="container mx-auto px-5 md:px-0 text-center text-white z-20">
        {/* Title */}
        <motion.div
          className="space-y-3 mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h1 className="text-3xl md:text-5xl font-semibold">{title}</h1>
        </motion.div>

        {/* Description */}
        <motion.p
          className="text-[16px] md:text-xl max-w-[836px] font-thin mb-6 text-center mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
        >
          {subtitle}
        </motion.p>
      </div>
    </section>
  );
};

export default SubSectionHero;
