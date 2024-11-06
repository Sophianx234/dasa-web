import { ReactElement } from "react"

export type benefitProps = {
    icon: ReactElement,
    title: string,
    description: string,
}
function Benefit({icon,title,description}: benefitProps) {
    return (
        <div className="pt-5 pb-4 rounded-md  bg-[#ffd8a8] mx-2">
                    <div className="flex flex-col items-center">
                    {icon}
                    <h1 className="font-bold text-sm text-center text-[#191611]"> {title}
                    </h1>
                    </div>
                    <div  className="text-center text-xs px-2 text-[#191611]">
                        {description}
                         </div>
                </div>
    )
}

export default Benefit
