"use client";
import FiveCardLayout from "@/components/FiveCardLayout";
import { ForEmployersData } from "@/constants/services";
import { motion } from "framer-motion";

const ForEmployers = () => {
  return (
    <section className="relative overflow-hidden">
      <div className="w-full bg-primary-dark z-10">
        <div className="mx-10 pt-[46px] pb-[101px]">
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
              For Employers
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              // animate={isInView ? { opacity: 1 } : {}}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
              className="mt-[3px] text-white"
            >
              We help businesses streamline their hiring processes and find the right talent for their teams.
            </motion.p>
          </div>

          <div className="mt-16">
            <motion.div
              initial={{ opacity: 0 }}
              // animate={isInView ? { opacity: 1 } : {}}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              viewport={{ once: true }}
              className="container mx-auto flex flex-col-reverse lg:flex-row-reverse max-w-full w-[1920px] items-center justify-end gap-x-5"
            >
              <FiveCardLayout cardItems={ForEmployersData} />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ForEmployers;
