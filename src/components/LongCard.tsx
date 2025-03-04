import Image from "next/image";
import React from "react";

type LongCardProps = {
  icon: string;
  iconName: string;
  text: string;
  height?: number;
};

const LongCard = (props: LongCardProps) => {
  const { icon, iconName, text, height = 80 } = props;
  return (
    <div
      className="max-w-full lg:w-[555px] h-auto flex items-center gap-x-5 bg-white shadow-custom rounded-lg py-3 px-5 lg:px-7"
      style={{ height: `${height}px` }}
    >
      <div className="w-12 shrink-0 flex items-center justify-center">
        <Image src={icon} alt={iconName} width={40} height={40} className="w-10 h-10" />
      </div>

      <div className="flex-1 text-center lg:text-left">
        <p className="text-[14px] lg:text-[16px] font-light">{text}</p>
      </div>
    </div>
  );
};

export default LongCard;
