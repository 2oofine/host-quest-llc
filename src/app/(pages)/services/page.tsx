import SubSectionHero from "@/components/SubSectionHero";
import HeroBanner from "../../../../public/images/home/home-hero-banner.jpg";

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
    </>
  );
};

export default ServicesPage;
