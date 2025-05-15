import { CardItem } from "@/types/card";
import React from "react";

interface Props {
  item: CardItem;
  light?: boolean;
  height?: string;
}

const SimpleCard = (props: Props) => {
  const { item, light = true, height = "261" } = props;
  return (
    <div
      className={`${light ? "bg-white" : "bg-primary-dark"} shadow-custom py-3 px-6 flex flex-col justify-end w-full`}
      style={{ height: `${height}px` }}
    >
      <div className={`mt-auto ${light ? "text-black" : "text-white"} text-left`}>
        <h4 className="text-2xl font-semibold">{item.title}</h4>
        <p className="font-normal text-base">{item.subtitle}</p>
      </div>
    </div>
  );
};

export default SimpleCard;
