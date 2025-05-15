import SubSectionHero from "@/components/SubSectionHero";
import HeroBanner from "../../../../public/images/home/home-empowering-job-seekers.jpg";
import type { Metadata } from "next";
import JobPostings from "@/sections/job-seekers/JobPostings";

export const metadata: Metadata = {
  title: "Jobseekers",
};

const JobSeekersPage = () => {
  return (
    <>
      <SubSectionHero
        heroImage={HeroBanner}
        title="Advance Your Career with Confidence"
        subtitle="Explore life-changing career opportunities across the globe with personalized support, skill-building programs, and expert guidance to help you land the right job and thrive in today’s competitive job market."
        imagePosition="50% 20%"
      />

      <JobPostings />
    </>
  );
};

export default JobSeekersPage;
