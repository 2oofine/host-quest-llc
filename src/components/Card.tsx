import Image from "next/image";

type LongCardProps = {
  icon: string;
  iconName: string;
  title: string;
  text: string;
};

const Card = (props: LongCardProps) => {
  const { icon, iconName, title, text } = props;
  return (
    <div className="relative overflow-hidden max-w-full lg:w-[325px] h-full lg:h-[381px] flex flex-col items-center lg:items-start gap-x-5 bg-primary-dark shadow-custom rounded-md py-[26px] px-[25px]">
      {/* <div className="absolute inset-0 z-10">
        <Image src={Arch7} alt="Arch" className="block absolute right-0 top-[58%] -translate-x-2/2 translate-y-2/2" />
      </div> */}
      <div className="z-20 shrink-0 flex flex-col items-center justify-center lg:items-start">
        <div className="w-[50px]">
          <Image src={icon} alt={iconName} width={50} height={50} className="w-[50px] h-[50px]" />
        </div>

        <div className="mt-10 relative flex-1 text-center lg:text-left max-w-full">
          <h2 className="text-base xl:text-2xl font-semibold mt-5 lg:h-[76px]">
            {title.split(" ").map((word, index) => (
              <span key={index}>
                {word} <br />
              </span>
            ))}
          </h2>
          <p className="text-base xl:text-lg  font-light ">{text}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
