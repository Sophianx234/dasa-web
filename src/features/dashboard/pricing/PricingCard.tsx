import { TbUserHexagon } from "react-icons/tb";
import PricingCheck from "./PricingCheck";
import { PiCrownBold } from "react-icons/pi";
import { ReactNode } from "react";

type PricingCardProps = {
  mainIcon: ReactNode;
  badgeIcon: ReactNode;
  title: string;
  subTitle: string;
  price: string;
  priceStrike: string;
  badgeTitle: string;
  planPackage: string[];
  type?: "personal" | "standard" | "pro";
};
function PricingCard({
  mainIcon,
  badgeIcon,
  title,
  subTitle,
  price,
  priceStrike,
  badgeTitle,
  planPackage,
  type = "personal",
}: PricingCardProps) {
  return (
    <div
      className={`w-[18rem]  rounded-lg border shadow-md
    ${
      type == "personal" ? "" : type === "standard" ? "bg-[#030303] text-white" : "bg-dasalight"
    } mx-auto px-6 py-4 pb-6`}
    >
      <div
        className={`${
          type == "personal" ? "bg-gray-100" : "bg-white"
        } rounded-md shadow border w-fit p-1`}
      >
        {mainIcon}
      </div>
      <div className="py-4">
        <h1
          className={`text-xl font-bold font-poppins ${
            type == "personal" ? "text-[#191817]" :type==='standard'? "text-[#f1f3f5]":'text-[#191817]'
          }`}
        >
          {title}
        </h1>
        <h2 className={` font-medium ${
            type == "personal" ? "text-gray-600" :type=='standard'? "text-[#adb5bd]":'text-gray-600'
          }`}>{subTitle}</h2>
      </div>
      <div className="flex  gap-2 text-4xl font-extrabold font-mulish pb-6">
        <h1
          className={`${
            type == "personal" ? "text-[#191817]" :type=='standard'? "text-white":''
          }`}
        >
          {price}
        </h1>
        <span
          className={`font-medium ${
            type == "personal" ? "text-gray-300" :type=='standard'? "text-[#ffa94d]":'text-[#ffa94d]'
          } line-through`}
        >
          {priceStrike}
        </span>
      </div>
      <button className={`border w-full border-gray-700 py-1 text-lg rounded-md font-bold ${type=='personal'?'':type==='pro'?'bg-[#ffa94def] border-[#ffa94def] text-[#f8f9fa] hover:bg-transparent hover:text-black ':'border-white hover:bg-white hover:text-black'} transition-all duration-500 `}>
        Buy {title} License
      </button>
      <div className="flex items-center gap-1 py-6 border-dashed border-b-2">
        {badgeIcon}
        <span className="font-semibold">{badgeTitle}</span>
      </div>
      <div className="pt-4 space-y-2">
        {planPackage && planPackage.map((plan) => <PricingCheck desc={plan} />)}
      </div>
    </div>
  );
}

export default PricingCard;
