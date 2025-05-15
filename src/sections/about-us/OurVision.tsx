"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import OurVisionImage from "../../../public/images/about-us/ourvision.png";

const OurVision = () => {
  return (
    <section className="relative overflow-hidden">
      <div className="w-full bg-primary-dark z-10">
        <div className="mx-10 pt-[46px] pb-[101px] ">
          {/* Heading Animation */}
          <div className="text-center mx-5 text-white mt-12 lg:mt-24">
            <motion.h1
              initial={{ opacity: 0, x: -50 }}
              // animate={isInView ? { opacity: 1, x: 0 } : {}}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              viewport={{ once: true }}
              className="text-[30px] md:text-[40px] font-semibold"
            >
              Our Vision
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              // animate={isInView ? { opacity: 1 } : {}}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
              className="mt-[3px] text-white"
            >
              We envision a world where talent meets opportunity effortlessly. Our goal is to become a leading
              recruitment agency recognized for excellence, reliability, and innovation in the hiring industry.
            </motion.p>
          </div>

          <div className="mt-16 relative h-[380px] w-full">
            <Image src={OurVisionImage} alt="Our Vision" fill priority className="object-cover w-full h-full" />
            <div className="absolute inset-0 bg-primary-dark bg-opacity-40"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurVision;
