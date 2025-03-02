import Image from "next/image";
import React from "react";

type LongCardProps = {
  icon: string;
  iconName: string;
  text: string;
};

const LongCard = (props: LongCardProps) => {
  const { icon, iconName, text } = props;
  return (
    <div className="max-w-full lg:w-[555px] h-auto lg:h-[80px] flex items-center gap-x-5 bg-white shadow-custom rounded-lg py-3 px-5 lg:px-7">
      <div className="w-12 shrink-0 flex items-center justify-center">
        <Image src={icon} alt={iconName} className="w-10 h-10" />
      </div>

      <div className="flex-1 text-center lg:text-left">
        <p className="text-[14px] lg:text-[16px] font-light">{text}</p>
      </div>
    </div>
  );
};

export default LongCard;
