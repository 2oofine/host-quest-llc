import Image from "next/image";
import React from "react";

type InfoCardProps = {
  icon: string;
  iconName: string;
  text: string;
  height?: number;
  light?: boolean;
};

const InfoCard = (props: InfoCardProps) => {
  const { icon, iconName, text, height = 215, light = true } = props;
  return (
    <div
      className={`w-full ${
        light ? "bg-white" : "bg-primary-dark"
      } shadow-custom py-3 px-5 lg:px-7 flex items-center justify-center`}
      style={{ height: `${height}px` }}
    >
      <div className="flex flex-col items-start justify-center space-y-4">
        <div className="w-12 shrink-0 flex items-center justify-center">
          <Image src={icon} alt={iconName} width={40} height={40} className="w-10 h-10" />
        </div>

        <div className="text-center lg:text-left">
          <p className={`${light ? "text-primary-dark" : "text-white"} text-[14px] lg:text-[16px] font-light`}>
            {text}
          </p>
        </div>
      </div>
    </div>
  );
};

export default InfoCard;
