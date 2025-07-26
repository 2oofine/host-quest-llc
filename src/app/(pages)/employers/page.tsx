import SubSectionHero from "@/components/SubSectionHero";
import HeroBanner from "../../../../public/images/employers/employersbanner.png";
import type { Metadata } from "next";
import WhatWeOfferEmployers from "@/sections/employers/WhatWeOfferEmployers";
import SupportingBusinessWithTopTalent from "@/sections/employers/SupportingBusinessWithTopTalent";
import WhatSetsUsApart from "@/sections/home/WhatSetsUsApart";

export const metadata: Metadata = {
  title: "Employers",
  description: "Partner with HostQuest LLC to find top-tier candidates tailored to your company’s needs.",
  keywords: ["employer hiring", "recruitment partner", "staffing solutions", "find talent", "HostQuest employers"],
  openGraph: {
    title: "Employers | HostQuest LLC",
    description: "Custom staffing solutions for employers across industries.",
    url: "https://hostquestllc.com/employers",
    siteName: "HostQuest LLC",
    type: "website",
  },
};

const EmployersPage = () => {
  return (
    <>
      <SubSectionHero
        heroImage={HeroBanner}
        title="Find, Hire, and Retain the Right Talent"
        subtitle="We simplify recruitment so you can build a strong, scalable team with global talent and custom hiring solutions."
        imagePosition="50% 20%"
      />
      <WhatWeOfferEmployers />
      <SupportingBusinessWithTopTalent />
      <WhatSetsUsApart />
      <hr
        className="w-[100%]  h-[1px] border-0"
        style={{
          background: "linear-gradient(to right, transparent, #07C6D0, transparent)", // replace #D1D5DB with your `text-primary-light`
        }}
      />
    </>
  );
};

export default EmployersPage;
