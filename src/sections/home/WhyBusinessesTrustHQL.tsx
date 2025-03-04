import React from "react";
import Arch5 from "../../../public/icons/home/arch5.svg";
import Arch6 from "../../../public/icons/home/arch6.svg";
import Image from "next/image";
import Card from "@/components/Card";
import Blocks from "../../../public/icons/home/blocks.svg";
import Star from "../../../public/icons/home/star.svg";
import Graph from "../../../public/icons/home/graph.svg";
import Partnerships from "../../../public/icons/home/partnerships.svg";

const WhyBusinessesTrustHQL = () => {
  return (
    <section className="relative overflow-hidden">
      <div className="2xl:container mx-auto mt-[50px] bg-aeroBlue relative overflow-hidden z-10">
        <div className="2xl:container mx-auto absolute inset-0 -z-10">
          {/* Top Left */}
          <Image
            src={Arch5}
            alt="Arch"
            className="block absolute left-[7.3%] lg:bottom-[53%] bottom-[82.5%] -translate-x-1/2 translate-y-1/3"
          />
          {/* Bottom Right */}
          <Image
            src={Arch6}
            alt="Arch"
            className="block absolute right-[7.3%] lg:top-[53%] top-[82.5%] translate-x-1/2 -translate-y-1/3"
          />
        </div>

        <div className="mx-10 pt-[46px] pb-[101px]">
          <div className="text-center mx-5">
            <h1 className="text-[30px] md:text-[40px] font-semibold leading-none">
              Why Businesses Trust Host Quest LLC
            </h1>
            <p className="mt-[3px]">Expertise, Quality Talent, and Scalable Solutions for Long-Term Success</p>
          </div>

          <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-y-8 gap-x-5 mt-[46px]">
            <li className="w-full">
              <Card
                icon={Blocks}
                title="Industry-Specific Expertise"
                iconName="Blocks"
                text="We understand the challenges of hiring across multiple industries."
              />
            </li>
            <li className="w-full">
              <Card
                icon={Star}
                title="Quality-Driven Approach"
                iconName="Star"
                text="Every candidate is carefully vetted to ensure the right fit."
              />
            </li>
            <li className="w-full">
              <Card
                icon={Graph}
                title="Scalable Solutions"
                iconName="Graph"
                text="From small teams to large-scale workforce expansion, we adapt to your needs."
              />
            </li>
            <li className="w-full">
              <Card
                icon={Partnerships}
                title="Long-Term Partnerships"
                iconName="Partnerships"
                text="We go beyond hiring; we help you build sustainable teams for growth."
              />
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default WhyBusinessesTrustHQL;
