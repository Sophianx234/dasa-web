import { BsCheck2Circle } from "react-icons/bs"

type PricingCheckProps = {
  desc:string
}
function PricingCheck({desc}:PricingCheckProps) {
  return (
    <div className="grid grid-cols-[.1fr_2fr] items-center gap-2">
      <BsCheck2Circle className="size-4 stroke-[#666666]"/>
      <span className="underline underline-offset-2 text-sm font-semibold">{desc}</span>
      </div>
  )
}

export default PricingCheck
