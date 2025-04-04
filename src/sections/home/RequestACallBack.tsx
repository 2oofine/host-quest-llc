import Image from "next/image";
import React from "react";
import RACB from "../../../public/images/home/home-request-a-call-back.jpg";
import RequestACallBackForm from "@/components/RequestACallBackForm";

const RequestACallBack = () => {
  return (
    <section className="relative overflow-hidden w-full min-h-screen lg:h-screen">
      <Image src={RACB} alt="Hero Banner" style={{ objectFit: "cover", objectPosition: "top" }} fill priority />

      <div className="absolute inset-0 bg-charcoalNavy/60 z-10" />

      <div className="relative container 2xl:mx-auto lg:mx-[155px] z-20 text-white pt-[73px] pb-[82px] flex flex-col items-center text-center lg:items-start lg:text-left px-5">
        <div className="max-w-full w-[550px]">
          <h1 className="text-[40px] font-semibold">Request A Call Back</h1>
          <p className="text-[18px] mt-[11px] font-light">
            Get in touch with us today to find the right talent or explore new career opportunities.
          </p>

          <RequestACallBackForm />
        </div>
      </div>
    </section>
  );
};

export default RequestACallBack;
