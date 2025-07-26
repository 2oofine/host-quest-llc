import SubSectionHero from "@/components/SubSectionHero";
import HeroBanner from "../../../../public/images/contact-us/hero-banner.png";
import type { Metadata } from "next";
import GetInTouch from "@/sections/contact-us/GetInTouch";
import WhyBusinessesTrustHQL from "@/sections/home/WhyBusinessesTrustHQL";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Get in touch with HostQuest LLC for job inquiries, employer partnerships, or general support.",
  keywords: ["contact HostQuest", "job support", "recruiter contact", "employment help", "get in touch"],
  openGraph: {
    title: "Contact Us | HostQuest LLC",
    description: "Reach out to HostQuest for job or hiring inquiries.",
    url: "https://hostquestllc.com/contact-us",
    siteName: "HostQuest LLC",
    type: "website",
  },
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
