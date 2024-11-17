import { useState } from "react"
import { GiReceiveMoney } from "react-icons/gi"
import { TbBusinessplan } from "react-icons/tb"
export type planTypeItemProps = {
    planType: string,
    planPackage: string,
    planDesc: string,
    price: number

}
function PlanTypeItem({planType,planPackage,price,planDesc}:planTypeItemProps) {
    const [toggleRadio, setToggleRadio] = useState(false)
    function handleSelection(e){
        setToggleRadio(toggle=>!toggle)
    }
    return (
        <div>
            <div className="">
                <div className=" border px-4 rounded-lg
                pb-2
                ">
                    <div className="grid grid-cols-[1fr_1fr_1fr] items-center pt-2 pb-2 ">
                    <div className="flex items-center gap-3 ">

                    
                       <div onClick={handleSelection} className={`border-8  size-6 ${toggleRadio&&'border-dasadeep'} rounded-full`}>

                       </div>
                    <h1 className="font-bold font-mulish">{planType}</h1>
                    </div>
                    <div className="flex items-center gap-1 border rounded-full mx-2 px-2 ">
                    <GiReceiveMoney className="fill-dasadeep size-8"/> <p>{planPackage} </p>
                    </div>
                    <p className="justify-self-end text-dasadeep font-mulish font-bold"> ₵{price}/sem</p>
                    </div>
                    <div className="text-smfont-poppins  grid grid-cols-[.2fr_2fr] ">
                    <p className="text-sm font-mulish font-medium col-span-2  ">{planDesc}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PlanTypeItem
