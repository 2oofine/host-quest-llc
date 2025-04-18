"use client";

import { motion } from "framer-motion";
import Globe from "../../../public/icons/home/globe.svg";
import BullseyeArrow from "../../../public/icons/home/bullseye-arrow.svg";
import BrainCircuit from "../../../public/icons/home/brain-circuit.svg";
import BadgeCheck from "../../../public/icons/home/badge-check.svg";
import HourglassStart from "../../../public/icons/home/hourglass-start.svg";
import LinkAlt from "../../../public/icons/home/link-alt.svg";
import InfoCard from "../../components/InfoCard";

const EmpowerAndSupport = () => {
  // Variants for the first section (left to center)
  const listVariantsLeft = {
    hidden: { opacity: 0, x: -100 },
    visible: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.2, // Staggered delay
        duration: 0.5,
        ease: "easeOut",
      },
    }),
  };

  // Variants for the second section (right to center)
  const listVariantsRight = {
    hidden: { opacity: 0, x: 100 },
    visible: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.2, // Staggered delay
        duration: 0.5,
        ease: "easeOut",
      },
    }),
  };

  return (
    <section className="relative overflow-hidden">
      {/* Animated Dots */}
      {/* <div className="container mx-auto absolute inset-0">
        <motion.img
          src={"/icons/home/dots.svg"}
          alt="Dots"
          initial={{ opacity: 0 }}
          // animate={isInView ? { opacity: 1 } : {}}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="block absolute left-0 top-[2%] transform -translate-x-1/2 -translate-y-2/2 2xl:-translate-x-0"
        />
        <motion.img
          src={"/icons/home/dots.svg"}
          alt="Dots"
          initial={{ opacity: 0 }}
          // animate={isInView ? { opacity: 1 } : {}}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="block absolute right-0 top-[44%] translate-x-1/2 -translate-y-1/3 2xl:-translate-x-0"
        />
        <motion.img
          src={"/icons/home/dots.svg"}
          alt="Dots"
          initial={{ opacity: 0 }}
          // animate={isInView ? { opacity: 1 } : {}}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="block absolute left-0 bottom-[40%] -translate-x-1/2 translate-y-1/3 2xl:-translate-x-0"
        />
        <motion.img
          src={"/icons/home/dots.svg"}
          alt="Dots"
          initial={{ opacity: 0 }}
          // animate={isInView ? { opacity: 1 } : {}}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="block absolute right-0 bottom-[8%] translate-x-1/2 translate-y-1/3 2xl:-translate-x-0"
        />
      </div> */}

      <div className="container mx-auto px-5 relative my-8 lg:my-24 lg:space-y-28 space-y-10">
        {/* Section 1: Empowering Job Seekers */}
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          // animate={isInView ? { x: 0, opacity: 1 } : {}}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="container mx-auto flex flex-col-reverse lg:flex-row max-w-full w-[1132px] items-center justify-start gap-x-5"
        >
          {/* Empowering Job Seeker */}
          <div className="text-left w-full">
            <h1 className="font-semibold text-[32px] lg:text-[40px]">
              Empowering <span className="text-primary-light">Job Seekers</span>
            </h1>
            <p className="mt-1 text-[16px] lg:text-[18px] w-[52%]">
              We understand that finding the right job is more than just securing employment—it’s about building a
              meaningful career. Our services include:
            </p>
            <ul className="grid grid-cols-1 md:grid-cols-3 mt-6 gap-4 w-full">
              {[
                {
                  icon: Globe,
                  iconName: "globe",
                  text: "Access to global job opportunities across multiple industries.",
                },
                {
                  icon: BullseyeArrow,
                  iconName: "bullseye-arrow",
                  text: "Personalized career support, including resume enhancement and interview preparation.",
                },
                {
                  icon: LinkAlt,
                  iconName: "link-alt",
                  text: "A seamless application process connecting you directly with reputable employers.",
                },
              ].map((item, index) => (
                <motion.li
                  key={index}
                  className="w-full"
                  variants={listVariantsLeft}
                  initial="hidden"
                  // animate={isInView ? "visible" : "hidden"}
                  whileInView={"visible"}
                  viewport={{ once: true }}
                  custom={index}
                  whileHover={{ scale: 1.05 }}
                >
                  <InfoCard icon={item.icon} iconName={item.iconName} text={item.text} />
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Right Image */}
          {/* <motion.div
            className="relative w-full lg:w-[555px] h-auto lg:h-[555px] max-w-full flex items-center group overflow-hidden rounded-lg"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          >
            <h1 className="absolute inset-0 flex items-center text-center justify-center text-white text-[32px] font-semibold bg-charcoalNavy/60 p-4 rounded-lg lg:hidden">
              Empowering Job Seekers
            </h1>
            <Image
              src={Empower}
              alt="Empowering Job Seekers"
              className="w-full h-full object-cover rounded-lg transform transition-transform duration-300 group-hover:scale-110"
            />
          </motion.div> */}
        </motion.div>
        <hr
          className="w-[150%] -ml-[25%] h-[1px] border-0"
          style={{
            background: "linear-gradient(to right, transparent, #07C6D0, transparent)", // replace #D1D5DB with your `text-primary-light`
          }}
        />

        {/* Section 2: Supporting Businesses */}
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          // animate={isInView ? { x: 0, opacity: 1 } : {}}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="container mx-auto flex flex-col-reverse lg:flex-row-reverse max-w-full w-[1132px] items-center justify-end gap-x-5"
        >
          {/* Right Content */}
          <div className="text-right w-full">
            <h1 className="text-[32px] lg:text-[40px] font-semibold">
              Supporting Businesses
              <br />
              With <span className="text-primary-light">Top Talent</span>
            </h1>
            <p className="mt-1 text-[16px] lg:text-[18px] w-[52%] ml-auto">
              The strength of any business lies in its people. We help organizations identify, attract, and retain top
              talent through:
            </p>
            <ul className="grid grid-cols-1 md:grid-cols-3 mt-6 gap-4 w-full">
              {[
                {
                  icon: BrainCircuit,
                  iconName: "brain-circuit",
                  text: "Comprehensive talent acquisition strategies tailored to business needs.",
                },
                {
                  icon: BadgeCheck,
                  iconName: "badge-check",
                  text: "A diverse and qualified talent pool, ranging from entry-level to highly specialized professionals.",
                },
                {
                  icon: HourglassStart,
                  iconName: "hourglass-start",
                  text: "Efficient recruitment solutions that save time, reduce costs, and ensure the perfect hire.",
                },
              ].map((item, index) => (
                <motion.li
                  key={index}
                  className="w-full"
                  variants={listVariantsRight}
                  initial="hidden"
                  // animate={isInView ? "visible" : "hidden"}
                  whileInView={"visible"}
                  viewport={{ once: true }}
                  custom={index} // Delay index
                  whileHover={{ scale: 1.05 }}
                >
                  <InfoCard icon={item.icon} iconName={item.iconName} text={item.text} />
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Left Image */}
          {/* <motion.div
            className="relative w-full lg:w-[555px] h-auto lg:h-[555px] max-w-full flex items-center group overflow-hidden rounded-lg"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          >
            <h1 className="absolute inset-0 flex items-center text-center justify-center text-white text-[32px] font-semibold bg-charcoalNavy/60 p-4 rounded-lg lg:hidden">
              Supporting Businesses With Top Talent
            </h1>
            <Image
              src={Support}
              alt="Supporting Businesses With Top Talent"
              className="w-full h-full object-cover rounded-lg transform transition-transform duration-300 group-hover:scale-110"
            />
          </motion.div> */}
        </motion.div>
      </div>
    </section>
  );
};

export default EmpowerAndSupport;
