import { PiCrownBold } from "react-icons/pi";
// import PaymentForm from "../components/PaymentForm";
import { TbUserHexagon } from "react-icons/tb";
import PricingCheck from "../pricing/PricingCheck";
import PricingCard from "../pricing/PricingCard";
import { LuTrophy } from "react-icons/lu";
import { BsFillLightningChargeFill } from "react-icons/bs";
import { RiMedalFill } from "react-icons/ri";
import { GiTigerHead } from "react-icons/gi";

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
    </form>
  );
}

export default Payment;
