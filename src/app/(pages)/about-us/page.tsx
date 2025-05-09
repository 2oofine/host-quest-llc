import SubSectionHero from "@/components/SubSectionHero";
import HeroBanner from "../../../../public/images/home/home-what-sets-us-apart.jpg";
import type { Metadata } from "next";
import OurMission from "@/sections/about-us/OurMission";
import OurVision from "@/sections/about-us/OurVision";
import WhatSetsUsApart from "@/sections/home/WhatSetsUsApart";

export const metadata: Metadata = {
  title: "About Us",
};

const AboutUsPage = () => {
  return (
    <>
      <SubSectionHero
        heroImage={HeroBanner}
        title="Who We Are"
        subtitle="Host Quest LLC is a trusted international recruitment agency dedicated to bridging the gap between talented professionals and businesses seeking top-tier workforce solutions. With a mission to simplify and enhance the hiring process, we help job seekers find meaningful career opportunities while assisting companies in securing the right talent for long-term success."
        imagePosition="50% 20%"
      />
      <OurMission />
      <OurVision />
      <WhatSetsUsApart light={true} />
    </>
  );
};

export default AboutUsPage;
