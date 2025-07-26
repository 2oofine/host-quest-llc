import SubSectionHero from "@/components/SubSectionHero";
import HeroBanner from "../../../../public/images/home/home-hero-banner.jpg";
import type { Metadata } from "next";
import ForJobSeekers from "@/sections/services/ForJobSeekers";
import ForEmployers from "@/sections/services/ForEmployers";
import Discover from "@/sections/home/Discover";

export const metadata: Metadata = {
  title: "Services",
  description: "Discover HostQuest LLC’s staffing and recruitment services for both employers and job seekers.",
  keywords: ["staffing services", "recruitment agency", "job placement", "employment services", "HostQuest offerings"],
  openGraph: {
    title: "Services | HostQuest LLC",
    description: "Recruitment and job placement services by HostQuest LLC.",
    url: "https://hostquestllc.com/services",
    siteName: "HostQuest LLC",
    type: "website",
  },
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
