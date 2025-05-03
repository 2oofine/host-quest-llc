import SubSectionHero from "@/components/SubSectionHero";
import HeroBanner from "../../../../public/images/home/home-supporting-businesses-with-top-talent.jpg";

const ContactUsPage = () => {
  return (
    <>
      <SubSectionHero
        heroImage={HeroBanner}
        title="Let’s Connect"
        subtitle="Whether you're looking for top talent or your next big career move, we’re here to help."
        imagePosition="50% 20%"
      />
    </>
  );
};

export default ContactUsPage;
