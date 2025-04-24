import { PiCrownBold } from "react-icons/pi";
// import PaymentForm from "../components/PaymentForm";
import { TbUserHexagon } from "react-icons/tb";
import PricingCheck from "../pricing/PricingCheck";
import PricingCard from "../pricing/PricingCard";
import { LuTrophy } from "react-icons/lu";

function Payment() {
  const personalPackage = ["Unlock all pro features","Unlock all pro features","Unlock all pro features","Unlock all pro features"]
  
  return (
    <form className="pb-20">
      {/* <PaymentForm /> */}
      <div className="space-y-4">

      <PricingCard
      type="personal"
      planPackage={personalPackage}
      badgeIcon={<PiCrownBold className="size-6 fill-[#666666]" />}
      badgeTitle="Cultural Custodian"
      subTitle="For AI enthusiasts" priceStrike="$50" title="Personal" price="$37" mainIcon={<TbUserHexagon className="size-6" />}/>
      <PricingCard
      type="pro"
      planPackage={personalPackage}
      badgeIcon={<PiCrownBold className="size-6 fill-[#ffa94d]" />}
      badgeTitle="Cultural Custodian"
      subTitle="For AI enthusiasts" priceStrike="$50" title="Personal" price="$37" mainIcon={<TbUserHexagon className="size-6" />}/>
      <PricingCard
      type="standard"
      planPackage={personalPackage}
      badgeIcon={<LuTrophy className="size-6 stroke-[#ffa94d] " />}
      badgeTitle="Gold Member"
      subTitle="For AI enthusiasts" priceStrike="$50" title="Personal" price="$37" mainIcon={<TbUserHexagon className="size-6" />}/>
      </div>
    </form>
  );
}

export default Payment;
