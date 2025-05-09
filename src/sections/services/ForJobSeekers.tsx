"use client";
import FiveCardLayout from "@/components/FiveCardLayout";
import { ForJobSeekersData } from "@/constants/services";
import { motion } from "framer-motion";
import React from "react";

const ForJobSeekers = () => {
  return (
    <section className="relative overflow-hidden ">
      <div className="w-full bg-secondary-light z-10">
        <div className="mx-10 pt-[46px] pb-[101px] ">
          {/* Heading Animation */}
          <div className="text-center mx-5 text-primary-dark mt-12 lg:mt-24">
            <motion.h1
              initial={{ opacity: 0, x: -50 }}
              // animate={isInView ? { opacity: 1, x: 0 } : {}}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              viewport={{ once: true }}
              className="text-[30px] md:text-[40px] font-semibold"
            >
              For Job Seekers
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              // animate={isInView ? { opacity: 1 } : {}}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
              className="mt-[3px]"
            >
              We provide job seekers with the tools and support they need to succeed in their careers.
            </motion.p>
          </div>

          <div className="mt-16">
            <motion.div
              initial={{ opacity: 0 }}
              // animate={isInView ? { opacity: 1 } : {}}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              viewport={{ once: true }}
            >
              <FiveCardLayout light={false} cardItems={ForJobSeekersData} />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ForJobSeekers;
