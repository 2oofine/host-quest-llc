"use client";
import LongCard from "@/components/LongCard";
import { motion } from "framer-motion";
import Image from "next/image";
import Globe from "../../../public/icons/home/globe.svg";
import Medal from "../../../public/icons/home/medal.svg";
import RadarMonitoringTrack from "../../../public/icons/home/radar-monitoring-track.svg";
import Star from "../../../public/icons/home/star.svg";
import Tools from "../../../public/icons/home/tools.svg";
import WSUA from "../../../public/images/home/home-what-sets-us-apart.jpg";

interface Props {
  light?: boolean;
}
const WhatSetsUsApart = (props: Props) => {
  const { light = false } = props;
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    setHydrated(true);
  }, []);

  if (!hydrated) return null; // Wait until client
  const cardData = [
    { icon: Star, iconName: "Star", text: "Industry Expertise" },
    {
      icon: Tools,
      iconName: "Tools",
      text: "Tailored Workforce Solutions",
    },
    {
      icon: Globe,
      iconName: "Globe",
      text: "Global Reach, Local Expertise",
    },
    {
      icon: RadarMonitoringTrack,
      iconName: "RadarMonitoringTrack",
      text: "Technology-Driven Recruitment",
    },
    {
      icon: Medal,
      iconName: "Medal",
      text: "Commitment to Excellence",
    },
  ];

  return (
    <section className={`relative overflow-hidden ${light ? "bg-secondary-light" : "bg-primary-dark"}`}>
      {/* Decorative Dots */}
      {/* <div className="container mx-auto absolute inset-0">
        {["top-[6%]", "bottom-[38%]", "top-[81%]"].map((position, index) => (
          <motion.img
            key={index}
            src={"/icons/home/dots.svg"}
            alt="Dots"
            initial={{ opacity: 0 }}
            // animate={isInView ? { opacity: 1 } : {}}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className={`block absolute ${
              index === 1 ? "right-0 translate-x-1/2 translate-y-1/3" : "left-0"
            } ${position} transform -translate-x-1/2 -translate-y-2/2 2xl:-translate-x-0`}
          />
        ))}
      </div> */}

      <div className="container mx-auto px-5 relative my-8 lg:mt-24 lg:mb-44 lg:space-y-28 space-y-10">
        <div className="container mx-auto flex flex-col lg:flex-row max-w-full w-[1132px] items-end justify-center gap-x-5">
          {/* Left Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            // animate={isInView ? { opacity: 1, scale: 1 } : {}}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="relative w-full lg:w-[555px] h-96 lg:h-[661px] max-w-full flex items-center"
          >
            <div className="absolute inset-0 flex flex-col items-center text-center justify-center text-white text-[32px] bg-gradient-to-b from-[#6980A7]/0 to-[#293241]/100 p-4 rounded-lg">
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                // animate={isInView ? { opacity: 1, y: 0 } : {}}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="font-semibold lg:hidden"
              >
                What <span className="text-primary-light">Sets Us Apart?</span>
              </motion.h1>
            </div>
            <Image
              src={WSUA}
              alt="What Sets Us Apart?"
              className="w-full h-full object-cover rounded-lg object-[top_right]"
            />
          </motion.div>

          {/* Right Content */}
          <div
            className={`flex flex-col items-center justify-center lg:items-start text-center lg:text-left w-full lg:w-[555px] ${
              light ? "text-primary-dark" : "text-white"
            }`}
          >
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              // animate={isInView ? { opacity: 1, y: 0 } : {}}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="hidden lg:block text-[32px] lg:text-[40px] font-semibold"
            >
              What <span className="text-primary-light">Sets Us Apart?</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              // animate={isInView ? { opacity: 1, y: 0 } : {}}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="lg:block mt-[31px] lg:mt-0 text-[16px] lg:text-[18px]"
            >
              We stand out with our industry expertise, tailored recruitment strategies, and a global talent network
              that ensures the perfect fit for every business.
            </motion.p>

            {/* Staggered Animation for Cards */}
            <ul className="flex flex-col items-center mt-[26px] space-y-[5px]">
              {cardData.map((card, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  // animate={isInView ? { opacity: 1, y: 0 } : {}}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="w-full"
                >
                  <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0 }}>
                    <LongCard icon={card.icon} iconName={card.iconName} text={card.text} height={86} light={light} />
                  </motion.div>
                </motion.li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatSetsUsApart;
