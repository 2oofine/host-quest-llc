import SubSectionHero from "@/components/SubSectionHero";
import HeroBanner from "../../../../public/images/contact-us/hero-banner.png";
import type { Metadata } from "next";
import GetInTouch from "@/sections/contact-us/GetInTouch";
import WhyBusinessesTrustHQL from "@/sections/home/WhyBusinessesTrustHQL";

export const metadata: Metadata = {
  title: "Contact Us",
};

const ContactUsPage = () => {
  return (
    <>
      <SubSectionHero
        heroImage={HeroBanner}
        title="Let’s Connect"
        subtitle="Whether you're looking for top talent or your next big career move, we’re here to help."
        imagePosition="50% 20%"
      />
      <GetInTouch />
      <WhyBusinessesTrustHQL />
    </>
  );
};

export default ContactUsPage;
