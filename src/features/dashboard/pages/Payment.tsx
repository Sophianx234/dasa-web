import { PiCrownBold } from "react-icons/pi";
// import PaymentForm from "../components/PaymentForm";
import { TbUserHexagon } from "react-icons/tb";
import PricingCheck from "../pricing/PricingCheck";
import PricingCard from "../pricing/PricingCard";
import { LuLeaf, LuTrophy } from "react-icons/lu";
import { BsFillLightningChargeFill, BsShield } from "react-icons/bs";
import { RiMedalFill } from "react-icons/ri";
import { GiTigerHead } from "react-icons/gi";
import { IoCubeOutline } from "react-icons/io5";
import { LiaHandshake, LiaSmileBeam } from "react-icons/lia";

function Payment() {
  const personalPackage =  [
    "Semester Dues",
    
    "Digital copy of DaSA magazine",
    "Opportunity for committee positions",
    
    "Thank-you badge on profile",
  ];

  const standardPackage = [
    
    "DaSA T-shirt",
    "Semester Dues",
    "Recognition on DaSA Wall of Support ",
    "Premium DaSA wristband",
    "Opportunity for committee positions",
    "Access to leadership workshops",
    
  ]

  const proPackage =  [
    " DaSA digital magazine ",
    "DaSA T-shirt",
    "Semester Dues",
    "Recognition on DaSA Wall of Support ",
    "Premium DaSA scarf or wristband",
    "Personalized thank-you  online badge",
  ]
  return (
    <form className="pb-20">
      {/* <PaymentForm /> */}
      <div className="text-center font-bold text-lg px-20  font-poppins pb-4">
     <div className="text-green-700">
       Simple Payment.
      </div>
        <span className="text-2xl text-orange-700">
         Powerful Purpose. 
        </span>
        <div className="flex justify-center gap-2 items-center pt-2">
        
        <IoCubeOutline className="size-14 stroke-blue-500"/>
        
        </div>
        </div>
      
      <div className="space-y-4">

      <PricingCard
      type="personal"
      planPackage={personalPackage as string[]}
      badgeIcon={<PiCrownBold className="size-6 fill-[#666666]" />}
      badgeTitle="Cultural Custodian"
      subTitle="For those who quietly fuel the DaSA dream." priceStrike="$50" title="Personal" price="$37" mainIcon={<TbUserHexagon className="size-6" />}/>
      <PricingCard
      
      type="pro"
      planPackage={standardPackage as string[]}
      badgeIcon={<LuTrophy className="size-6 stroke-[#ffa94d]" />}
      badgeTitle="Gold Member"
      subTitle="For members who give without asking." priceStrike="$50" title="Standard" price="$37" mainIcon={<RiMedalFill className="size-6" />}/>
      <PricingCard
      type="standard"
      planPackage={proPackage as string[]}
      badgeIcon={<GiTigerHead className="size-6 fill-green-400 " />}
      badgeTitle="Gbuɣinli Bia"
      subTitle="For anyone who believes in the roots of DaSA." priceStrike="$50" title="Pro" price="$37" mainIcon={<BsFillLightningChargeFill className="size-6 fill-[#ffa94d]" />}/>
      </div>
<div className="flex justify-center">

      <div className="text-center pt-2 font-bold text-lg w-80 ">
      Be More Than a Member ..... Be a Builder.
      </div>
</div>
    </form>
  );
}

export default Payment;
