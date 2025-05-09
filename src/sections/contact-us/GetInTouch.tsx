"use client";
import { MapPin } from "lucide-react";
import Location from "../../../public/images/contact-us/location.png";
import Image from "next/image";
import Link from "next/link";
import { LocationLink } from "@/constants/contact-us";
import PhoneCall from "../../../public/icons/contact-us/phone-call.svg";
import Envelope from "../../../public/icons/contact-us/envelope.svg";
import Whatsapp from "../../../public/icons/contact-us/whatsapp.svg";
import Marker from "../../../public/icons/contact-us/marker.svg";
import { CompanyInfo } from "@/constants/company-info";
import RequestACallBackForm from "@/components/RequestACallBackForm";
import { motion } from "framer-motion";
const GetInTouch = () => {
  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };
  return (
    <section className="relative overflow-hidden">
      <div className="container mx-auto px-5 lg:px-0 mt-28 relative w-full bg-primary-dark z-10 my-8 lg:my-24 lg:space-y-28 space-y-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
          {/* Left Side */}
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={container}
            className="flex flex-col"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 text-primary-dark">
              {[
                { icon: PhoneCall, label: "Phone Number", value: CompanyInfo.phoneNumber },
                { icon: Envelope, label: "Email", value: CompanyInfo.email },
                { icon: Whatsapp, label: "Whatsapp", value: CompanyInfo.whatsApp },
                { icon: Marker, label: "Address", value: CompanyInfo.address },
              ].map(({ icon, label, value }, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  className="bg-white h-[287px] flex items-center justify-center"
                >
                  <div className="flex flex-col items-center justify-center w-full text-center">
                    <Image src={icon} alt={label.toLowerCase()} width={40} height={40} className="w-20 h-20" />
                    <h4 className="font-semibold text-2xl mt-8">{label}</h4>
                    <p className="text-lg break-words">{value}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div variants={fadeInUp} className="mt-16 relative h-[212px] w-full overflow-hidden group">
              <Link href={LocationLink} target="_blank">
                <Image
                  src={Location}
                  alt="Location"
                  fill
                  priority
                  className="object-cover w-full h-full transform transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-primary-dark bg-opacity-40 opacity-0 transition-opacity duration-300 group-hover:opacity-100 flex items-center justify-center">
                  <div className="flex items-center justify-center gap-x-1 px-4 py-2 text-white transition-transform duration-300 transform group-hover:scale-105">
                    View on Google Maps
                    <MapPin size={20} />
                  </div>
                </div>
              </Link>
            </motion.div>
          </motion.div>

          {/* Right Side (Form) */}
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="flex flex-col"
          >
            <div>
              <h3 className="text-primary-light text-[40px] font-semibold">Get in Touch</h3>
              <p className="text-xl">Let’s discuss how we can help you hire better or find your next opportunity.</p>
              <RequestACallBackForm isFromContactUs={true} />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default GetInTouch;
