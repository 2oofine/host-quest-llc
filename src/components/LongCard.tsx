import Image from "next/image";
import React from "react";
import AngleDoubleRight from "../../public/icons/home/angle-double-right.svg";
import AngleDoubleRightWhite from "../../public/icons/home/angle-double-right-white.svg";
import Link from "next/link";
type LongCardProps = {
  icon: string;
  iconName: string;
  text: string;
  href?: string;
  height?: number;
  light?: boolean;
};

const LongCard = (props: LongCardProps) => {
  const { icon, iconName, href = "", text, height = 80, light = false } = props;
  return (
    <div
      className={`max-w-full lg:w-[555px] h-auto flex items-center gap-x-5 ${
        light ? "bg-primary-dark" : "bg-white"
      } shadow-custom py-3 px-5 lg:px-7`}
      style={{ height: `${height}px` }}
    >
      <div className="w-12 shrink-0 flex items-center justify-center">
        <Image src={icon} alt={iconName} width={40} height={40} className="w-10 h-10" />
      </div>

      <div
        className={`flex-1 text-center items-center flex lg:text-left ${
          light ? "text-white" : "text-primary-dark"
        } justify-between`}
      >
        <p className="text-[14px] lg:text-[16px] font-medium">{text}</p>
        {href && (
          <Link href={href}>
            <Image
              src={light ? AngleDoubleRightWhite : AngleDoubleRight}
              alt="angle-double-right"
              width={40}
              height={40}
              className="w-10 h-10"
            />
          </Link>
        )}
      </div>
    </div>
  );
};

export default LongCard;
