import SubSectionHero from "@/components/SubSectionHero";
import HeroBanner from "../../../../public/images/home/home-discover-strong-workforce.jpg";

const EmployersPage = () => {
  return (
    <>
      <SubSectionHero
        heroImage={HeroBanner}
        title="Find, Hire, and Retain the Right Talent"
        subtitle="We simplify recruitment so you can build a strong, scalable team with global talent and custom hiring solutions."
        imagePosition="50% 20%"
      />
    </>
  );
};

export default EmployersPage;
