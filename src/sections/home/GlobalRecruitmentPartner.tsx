import Image from "next/image";
import Dots from "../../../public/icons/home/dots.svg";
import GlobalRecruitment from "../../../public/images/home/home-global-recruitment-partner.jpg";

const GlobalRecruitmentPartner = () => {
  return (
    <section className="relative overflow-hidden">
      <div className="container mx-auto absolute inset-0 ">
        {/* Top Left */}
        <Image
          src={Dots}
          alt="Dots"
          className="block absolute left-0 top-[8.5%] transform -translate-x-1/2 -translate-y-2/2 2xl:-translate-x-0"
        />
        {/* Bottom Right */}
        <Image
          src={Dots}
          alt="Dots"
          className="block absolute right-0 bottom-[10.5%] translate-x-1/2 translate-y-1/3 2xl:-translate-x-0"
        />
      </div>
      <div className="container mx-auto px-5 relative my-8 lg:my-24 lg:space-y-28 space-y-10">
        <div className="container mx-auto flex flex-col lg:flex-row max-w-full w-[1132px] items-center justify-center gap-x-5">
          {/* Left Image */}
          <div className="relative w-full lg:w-[555px] h-96 lg:h-[636px] max-w-full flex items-center">
            <div className="absolute inset-0 flex flex-col items-center text-center justify-center text-white text-[32px] bg-gradient-to-b from-[#6980A7]/0 to-[#293241]/100 p-4 rounded-lg">
              <h1 className="font-semibold lg:hidden">Your Global Recruitment Partner</h1>
            </div>
            <Image
              src={GlobalRecruitment}
              alt="Your Global Recruitment Partner"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>

          {/* Right Content */}
          <div className="flex flex-col items-center justify-center lg:items-start text-center lg:text-left w-full lg:w-[555px]">
            <h1 className="hidden lg:block text-[32px] lg:text-[40px] font-semibold">
              Your Global Recruitment Partner
            </h1>
            <p className="lg:block mt-[31px] text-[16px] lg:text-[18px]">
              At Host Quest LLC, we specialize in providing comprehensive recruitment solutions to meet the diverse
              needs of both job seekers and businesses. As a premier international recruitment agency, our commitment is
              to create lasting connections between exceptional talent and leading employers worldwide. We cater to
              businesses of all sizes, from small enterprises to global corporations, offering tailored services that
              deliver the right talent for every role—whether that’s unskilled labor or highly specialized
              professionals.
            </p>
            <button className="lg:block mt-[34px] text-[16px] btn-primary-42 lg:w-[325px] bg-charcoalNavy lg:text-[18px]">
              See More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GlobalRecruitmentPartner;
