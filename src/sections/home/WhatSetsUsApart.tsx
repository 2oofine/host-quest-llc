import Image from "next/image";
import Dots from "../../../public/icons/home/dots.svg";
import Cog from "../../../public/icons/home/cog.svg";
import PuzzlePiece from "../../../public/icons/home/puzzlepiece.svg";
import LocationPin from "../../../public/icons/home/locationpin.svg";
import Fingerprint from "../../../public/icons/home/fingerprint.svg";
import Trophy from "../../../public/icons/home/trophy.svg";
import WSUA from "../../../public/images/home/home-what-sets-us-apart.jpg";
import LongCard from "@/components/LongCard";

const WhatSetsUsApart = () => {
  return (
    <section className="relative overflow-hidden">
      <div className="container mx-auto absolute inset-0 ">
        {/* Top Left */}
        <Image
          src={Dots}
          alt="Dots"
          className="block absolute left-0 top-[6%] transform -translate-x-1/2 -translate-y-2/2 2xl:-translate-x-0"
        />
        {/* Bottom Right */}
        <Image
          src={Dots}
          alt="Dots"
          className="block absolute right-0 bottom-[38%] translate-x-1/2 translate-y-1/3 2xl:-translate-x-0"
        />
        {/* Bottom Right */}
        <Image
          src={Dots}
          alt="Dots"
          className="block absolute left-0 top-[81%] transform -translate-x-1/2 -translate-y-1/3 2xl:-translate-x-0"
        />
      </div>
      <div className="container mx-auto px-5 relative my-8 lg:mt-24 lg:mb-44 lg:space-y-28 space-y-10">
        <div className="container mx-auto flex flex-col lg:flex-row max-w-full w-[1132px] items-end justify-center gap-x-5">
          {/* Left Image */}
          <div className="relative w-full lg:w-[555px] h-96 lg:h-[661px] max-w-full flex items-center">
            <div className="absolute inset-0 flex flex-col items-center text-center justify-center text-white text-[32px] bg-gradient-to-b from-[#6980A7]/0 to-[#293241]/100 p-4 rounded-lg">
              <h1 className="font-semibold lg:hidden">What Sets Us Apart?</h1>
            </div>
            <Image
              src={WSUA}
              alt="What Sets Us Apart?"
              className="w-full h-full object-cover rounded-lg object-[top_right]"
            />
          </div>

          {/* Right Content */}
          <div className="flex flex-col items-center justify-center lg:items-start text-center lg:text-left w-full lg:w-[555px]">
            <h1 className="hidden lg:block text-[32px] lg:text-[40px] font-semibold">What Sets Us Apart?</h1>
            <p className="lg:block mt-[31px] lg:mt-0 text-[16px] lg:text-[18px]">
              We stand out with our industry expertise, tailored recruitment strategies, and a global talent network
              that ensures the perfect fit for every business.
            </p>

            <ul className="flex flex-col items-center mt-[26px] space-y-[5px]">
              <li className="w-full">
                <LongCard
                  icon={Cog}
                  iconName="Cog"
                  text="Comprehensive talent acquisition strategies tailored to business needs."
                  height={86}
                />
              </li>
              <li className="w-full">
                <LongCard
                  icon={PuzzlePiece}
                  iconName="PuzzlePiece"
                  text="A diverse and qualified talent pool, ranging from entry-level to highly specialized professionals."
                  height={86}
                />
              </li>
              <li className="w-full">
                <LongCard
                  icon={LocationPin}
                  iconName="LocationPin"
                  text="Efficient recruitment solutions that save time, reduce costs, and ensure the perfect hire."
                  height={86}
                />
              </li>
              <li className="w-full">
                <LongCard
                  icon={Fingerprint}
                  iconName="Fingerprint"
                  text="Efficient recruitment solutions that save time, reduce costs, and ensure the perfect hire."
                  height={86}
                />
              </li>
              <li className="w-full">
                <LongCard
                  icon={Trophy}
                  iconName="Trophy"
                  text="Efficient recruitment solutions that save time, reduce costs, and ensure the perfect hire."
                  height={86}
                />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatSetsUsApart;
