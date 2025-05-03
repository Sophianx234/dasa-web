import { getPayStackConfig } from "@/features/utils/paystack";
import { FormEvent, ReactNode } from "react";
import { usePaystackPayment } from 'react-paystack';
import PricingCheck from "./PricingCheck";

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
type PaystackSuccessResponse = {
  reference: string;
  trans: string;
  status: string;
  message: string;
  // ...other Paystack return fields you may use
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
  
  const onSuccess = (reference:PaystackSuccessResponse) => {
    // Implementation for whatever you want to do with reference and after success call.
    console.log(reference);
  };

  // you can call this function anything
  const onClose = () => {
    // implementation for  whatever you want to do when the Paystack dialog closed.
    console.log('closed')
  }
  const initializePayment = usePaystackPayment(getPayStackConfig(price))
  return (
    <div
      className={`w-[18rem]  rounded-lg border relative shadow-md
    ${
      type == "personal" ? "" : type === "standard" ? "bg-[#030303] text-white" : "bg-dasalight"
    } mx-auto px-6 py-4 pb-6`}
    >
      {type==='pro'&&<div className="uppercase font-extrabold  absolute top-0 right-10 text-sm px-4 shadow-sm py-1 rounded-b-full pb-2 bg-[#ffa94d] text-[#33220f]">Most Popular</div>}
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
          ${price}
        </h1>
        <span
          className={`font-medium ${
            type == "personal" ? "text-gray-300" :type=='standard'? "text-[#ffa94d]":'text-[#ffa94d]'
          } line-through`}
        >
          ${priceStrike}
        </span>
      </div>
      <button
      onClick={(e:FormEvent)=>{
        e.preventDefault()
        
        initializePayment({onSuccess,onClose})}}
      className={`border w-full border-gray-700 py-1 text-lg rounded-md font-bold ${type=='personal'?'hover:border-[#ffa94d]':type==='pro'?'bg-[#ffa94def] border-[#ffa94def] text-[#f8f9fa] hover:bg-transparent hover:text-black hover:border-black ':'border-white hover:bg-white hover:text-black hover:border-[#ffa94d]'} transition-all duration-500 `}>
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
