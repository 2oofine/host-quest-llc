"use client";
import { motion } from "framer-motion";
import Euresa from "../../../public/images/home/euresa.png";
import Mina from "../../../public/images/home/mina.png";
import Sujan from "../../../public/images/home/sujan.png";
import Gerald from "../../../public/images/home/gerald.png";
import FiveStars from "../../../public/icons/home/5-stars.svg";
import Image, { StaticImageData } from "next/image";
import React, { useState } from "react";
import { ChevronRight, ChevronLeft } from "lucide-react";

interface ITestimonials {
  avatar: string | StaticImageData;
  reviewDate: string;
  avatarName: string;
  name: string;
  review: string;
}

const testimonials: ITestimonials[] = [
  {
    avatar: Euresa,
    name: "Euresa Maquirang",
    avatarName: "Euresa Maquirang",
    reviewDate: "a month ago",
    review:
      "Thank you Host Quest LLC for assisting me all through out. I just got my visa,and starting to count the days and soon i'll get to see the beautiful places of poland. I can highly recommend this agency.",
  },
  {
    avatar: Mina,
    name: "Mina Rakhali",
    avatarName: "Mina Rakhali",
    reviewDate: "4 months ago",
    review:
      "Thank you so much Host Quest LLC I am really happy and thankful I get visa for Croatia this agency is 100% highly recommend specially to Angelica thank you so much.",
  },
  {
    avatar: Sujan,
    name: "Sujan Pariyar",
    avatarName: "Sujan Pariyar",
    reviewDate: "5 months ago",
    review:
      "Thank you so much Host Quest LLC for helping me to achieve my dream. And helping in every stage of process Mr. Rashik my agent. 100% can trust this agency they are legit. Once again thank you so much.",
  },
  {
    avatar: Gerald,
    name: "Gerald	Tode",
    avatarName: "Gerald	Tode",
    reviewDate: "10 months ago",
    review:
      "SuperLegit	with accommodating	staff, if you’re looking for a work	abroad just apply	in Host Quest	LLC for	the	smooth and fast	application",
  },
];

const Testimonials = () => {
  const [selectedTestimonial, setSelectedTestimonial] = useState<ITestimonials>(testimonials[0]);

  const handleNext = () => {
    const currentIndex = testimonials.findIndex((t) => t.name === selectedTestimonial.name);
    const nextIndex = (currentIndex + 1) % testimonials.length;
    setSelectedTestimonial(testimonials[nextIndex]);
  };

  const handlePrev = () => {
    const currentIndex = testimonials.findIndex((t) => t.name === selectedTestimonial.name);
    const prevIndex = currentIndex === 0 ? testimonials.length - 1 : currentIndex - 1;
    setSelectedTestimonial(testimonials[prevIndex]);
  };

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

        <div className="mx-10 pt-[46px] pb-[101px] flex flex-col items-center justify-center">
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
              Success Speaks for Itself
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              // animate={isInView ? { opacity: 1 } : {}}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
              className="mt-[7px]"
            >
              Stories from Job Seekers Who Landed Their Dream Jobs and Employers <br /> Who Found the Perfect Talent
            </motion.p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-5 lg:mt-[60px] mt-8">
            {/* Left Side: List of Reviewers */}
            <div className="hidden lg:flex items-start">
              <ul className="flex flex-col items-start justify-center gap-y-5">
                {testimonials.map((testimonial, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.2 }}
                    viewport={{ once: true }}
                  >
                    <button
                      onClick={() => setSelectedTestimonial(testimonial)}
                      className={`relative overflow-hidden max-w-full h-[107px] w-[555px] flex items-center bg-white rounded-md p-5 transition-all 
                      ${
                        selectedTestimonial.name === testimonial.name
                          ? "shadow-custom-dark"
                          : "shadow-custom hover:bg-gray-100"
                      }`}
                    >
                      {/* Grouping Avatar & Text */}
                      <div className="flex items-center space-x-7">
                        {/* Avatar */}
                        <div className="w-[70px] h-[70px] flex-shrink-0">
                          <Image
                            src={testimonial.avatar}
                            alt={testimonial.avatarName}
                            className="w-full h-full object-cover rounded-full"
                          />
                        </div>

                        {/* Text Content */}
                        <div className="flex flex-col text-left">
                          <span className="font-medium text-xl">{testimonial.name}</span>
                          <span className="text-black/50 text-[16px] italic">{testimonial.reviewDate}</span>
                        </div>
                      </div>
                    </button>
                  </motion.li>
                ))}
              </ul>
            </div>

            {/* Right Side: Display Selected Review */}
            <motion.div
              className="lg:flex items-center relative"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="relative overflow-hidden max-w-full max-h-full w-[555px] h-[485px] flex flex-col items-center lg:items-start bg-white shadow-custom rounded-md p-11">
                <Image
                  src={selectedTestimonial.avatar}
                  alt={selectedTestimonial.avatarName}
                  className="lg:hidden lg:w-[50px] lg:h-[50px] w-[100px] h-[100px]"
                />
                <h2 className="mt-3 font-semibold lg:hidden">{selectedTestimonial.name}</h2>
                <p className="text-sm text-gray-500l lg:hidden">{selectedTestimonial.reviewDate}</p>
                <Image src={FiveStars} alt="FiveStars" width={195} height={30} className="mt-4 lg:mt-0" />
                <div className="mt-4 lg:mt-[30px] text-lg h-[200px] overflow-y-auto pr-4">
                  {selectedTestimonial.review}
                </div>
              </div>

              {/* Mobile Navigation Arrows */}
              <div className="lg:hidden flex absolute w-full justify-between top-1/2 -translate-y-1/2 px-4">
                <button onClick={handlePrev} className="bg-white p-2 rounded-full shadow-md hover:scale-110 transition">
                  <ChevronLeft size={24} />
                </button>
                <button onClick={handleNext} className="bg-white p-2 rounded-full shadow-md hover:scale-110 transition">
                  <ChevronRight size={24} />
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
