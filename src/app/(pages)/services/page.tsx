import SubSectionHero from "@/components/SubSectionHero";
import HeroBanner from "../../../../public/images/home/home-hero-banner.jpg";
import type { Metadata } from "next";
import ForJobSeekers from "@/sections/services/ForJobSeekers";
import ForEmployers from "@/sections/services/ForEmployers";
import Discover from "@/sections/home/Discover";

export const metadata: Metadata = {
  title: "Services",
};

const ServicesPage = () => {
  return (
    <>
      <SubSectionHero
        heroImage={HeroBanner}
        title="Our Services"
        subtitle="At Host Quest LLC, we offer comprehensive recruitment solutions tailored to the needs of both job seekers and
          businesses. Our goal is to connect top talent with the right opportunities while helping employers build a
          strong workforce."
      />
      <ForJobSeekers />
      <ForEmployers />
      <Discover />
    </>
  );
};

export default ServicesPage;
