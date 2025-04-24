import { BsCheck2Circle } from "react-icons/bs"

type PricingCheckProps = {
  desc:string
}
function PricingCheck({desc}:PricingCheckProps) {
  return (
    <div className="flex items-center gap-2">
      <BsCheck2Circle className="size-4 stroke-[#666666]"/>
      <span className="underline underline-offset-2 font-semibold">{desc}</span>
      </div>
  )
}

export default PricingCheck
