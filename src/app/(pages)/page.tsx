import Discover from "@/sections/home/Discover";
import EmpowerAndSupport from "@/sections/home/EmpowerAndSupport";
import GlobalRecruitmentPartner from "@/sections/home/GlobalRecruitmentPartner";
import Hero from "@/sections/home/Hero";
import WhyBusinessesTrustHQL from "@/sections/home/WhyBusinessesTrustHQL";

export default function Home() {
  return (
    <>
      <Hero />
      <EmpowerAndSupport />
      <Discover />
      <GlobalRecruitmentPartner />
      <WhyBusinessesTrustHQL />
    </>
  );
}
