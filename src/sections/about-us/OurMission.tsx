"use client";
import SimpleCard from "@/components/SimpleCard";
import { OurMissionData } from "@/constants/about-us";
import { motion } from "framer-motion";

const OurMission = () => {
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
              Our Mission
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              // animate={isInView ? { opacity: 1 } : {}}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              // viewport={{ once: true }}
              className="mt-[3px]"
            >
              At Host Quest LLC, our mission is to empower individuals and businesses by providing seamless recruitment
              services that drive career growth and business success.
            </motion.p>
          </div>

          <div className="mt-16">
            {/* Cards Grid Animation */}
            <motion.ul
              initial={{ opacity: 0, y: 40 }}
              // animate={isInView ? { opacity: 1, y: 0 } : {}}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", staggerChildren: 0.2 }}
              viewport={{ once: true }}
              className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-5 mt-[46px] place-items-center max-w-full w-[1920px]"
            >
              {OurMissionData.items.map((item, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  // animate={isInView ? { opacity: 1, y: 0 } : {}}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  whileTap={{ scale: 0.95 }}
                  className="rounded-md"
                >
                  <motion.div
                    whileHover={{ scale: 1.05, boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.2)" }}
                    transition={{ duration: 0 }}
                  >
                    <SimpleCard item={item} height="370" light={false} />
                  </motion.div>
                </motion.li>
              ))}
            </motion.ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurMission;
