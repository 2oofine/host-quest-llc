"use client";
import Card from "@/components/Card";
import { motion } from "framer-motion";
import Blocks from "../../../public/icons/home/blocks.svg";
import Graph from "../../../public/icons/home/graph.svg";
import Partnerships from "../../../public/icons/home/partnerships.svg";
import Star from "../../../public/icons/home/star.svg";

const cards = [
  {
    icon: Blocks,
    title: "Industry-Specific Expertise",
    iconName: "Blocks",
    text: "We understand the challenges of hiring across multiple industries.",
  },
  {
    icon: Star,
    title: "Quality-Driven Approach",
    iconName: "Star",
    text: "Every candidate is carefully vetted to ensure the right fit.",
  },
  {
    icon: Graph,
    title: "Scalable Solutions",
    iconName: "Graph",
    text: "From small teams to large-scale workforce expansion, we adapt to your needs.",
  },
  {
    icon: Partnerships,
    title: "Long-Term Partnerships",
    iconName: "Partnerships",
    text: "We go beyond hiring; we help you build sustainable teams for growth.",
  },
];

const WhyBusinessesTrustHQL = () => {
  return (
    <section className="relative overflow-hidden">
      <div className="2xl:container mx-auto mt-[50px] bg-aeroBlue relative overflow-hidden z-10">
        {/* Background Elements */}
        <div className="2xl:container mx-auto absolute inset-0 -z-10">
          {/* Top Left Arch */}
          <motion.img
            src={"/icons/home/arch5.svg"}
            alt="Arch"
            initial={{ opacity: 0 }}
            // animate={isInView ? { opacity: 1 } : {}}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="block absolute left-[7.3%] lg:bottom-[53%] bottom-[82.5%] -translate-x-1/2 translate-y-1/3"
          />
          {/* Bottom Right Arch */}
          <motion.img
            src={"/icons/home/arch6.svg"}
            alt="Arch"
            initial={{ opacity: 0 }}
            // animate={isInView ? { opacity: 1 } : {}}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
            className="block absolute right-[7.3%] lg:top-[53%] top-[82.5%] translate-x-1/2 -translate-y-1/3"
          />
        </div>

        <div className="mx-10 pt-[46px] pb-[101px]">
          {/* Heading Animation */}
          <div className="text-center mx-5">
            <motion.h1
              initial={{ opacity: 0, x: -50 }}
              // animate={isInView ? { opacity: 1, x: 0 } : {}}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              viewport={{ once: true }}
              className="text-[30px] md:text-[40px] font-semibold"
            >
              Why Businesses Trust Host Quest LLC
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              // animate={isInView ? { opacity: 1 } : {}}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
              className="mt-[3px]"
            >
              Expertise, Quality Talent, and Scalable Solutions for Long-Term Success
            </motion.p>
          </div>

          {/* Cards Grid Animation */}
          <motion.ul
            initial={{ opacity: 0, y: 40 }}
            // animate={isInView ? { opacity: 1, y: 0 } : {}}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", staggerChildren: 0.2 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-y-8 gap-x-5 mt-[46px]"
          >
            {cards.map((card, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, y: 30 }}
                // animate={isInView ? { opacity: 1, y: 0 } : {}}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                whileTap={{ scale: 0.95 }}
                className="max-w-full w-[325px] transition-all rounded-md"
              >
                <motion.div
                  whileHover={{ scale: 1.05, boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.2)" }}
                  transition={{ duration: 0 }}
                >
                  <Card {...card} />
                </motion.div>
              </motion.li>
            ))}
          </motion.ul>
        </div>
      </div>
    </section>
  );
};

export default WhyBusinessesTrustHQL;
