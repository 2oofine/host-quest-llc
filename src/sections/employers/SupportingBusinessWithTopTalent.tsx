"use client";
import { motion } from "framer-motion";
import BadgeCheck from "../../../public/icons/home/badge-check.svg";
import BrainCircuit from "../../../public/icons/home/brain-circuit.svg";
import HourglassStart from "../../../public/icons/home/hourglass-start.svg";
import InfoCard from "../../components/InfoCard";

const SupportingBusinessWithTopTalent = () => {
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
      <div className="w-full bg-secondary-light z-10">
        <div className="mx-10 pt-[46px] pb-[101px]">
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
              What We <span className="text-primary-light">Offer Employers</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              // animate={isInView ? { opacity: 1 } : {}}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
              className="mt-[3px] text-primary-dark"
            >
              We help businesses streamline their hiring processes and find the right talent for their teams.
            </motion.p>
          </div>

          <div className="mt-16">
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
                <ul className="grid grid-cols-1 md:grid-cols-3 mt-6 gap-6 w-full">
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
                      <InfoCard icon={item.icon} iconName={item.iconName} text={item.text} light={false} />
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SupportingBusinessWithTopTalent;
