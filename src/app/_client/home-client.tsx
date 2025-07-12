// app/components/HeroClient.tsx
"use client";

import Discover from "@/sections/home/Discover";
import EmpowerAndSupport from "@/sections/home/EmpowerAndSupport";
import GlobalRecruitmentPartner from "@/sections/home/GlobalRecruitmentPartner";
import Hero from "@/sections/home/Hero";
import RequestACallBack from "@/sections/home/RequestACallBack";
import Testimonials from "@/sections/home/Testimonials";
import WhatSetsUsApart from "@/sections/home/WhatSetsUsApart";
import WhyBusinessesTrustHQL from "@/sections/home/WhyBusinessesTrustHQL";
import { useState, useEffect } from "react";

export default function HomeClient() {
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    setHydrated(true);
  }, []);

  if (!hydrated) return null;
  return (
    <>
      <Hero />
      <GlobalRecruitmentPartner />
      <Discover />
      <EmpowerAndSupport />
      <WhyBusinessesTrustHQL />
      <WhatSetsUsApart />
      <Testimonials />
      <RequestACallBack />
    </>
  );
}
