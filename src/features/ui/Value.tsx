import { ReactElement } from "react"
export type valueProps = {
    icon: ReactElement,
    title: string,
    desc: string

}
function Value({desc,title,icon}:valueProps) {
    return (
        <div className="flex flex-col items-center px-2">
            {icon}
            <h1 className="font-Montserrat  text-justify font-semibold">{title}</h1>
            <p className="text-center  text-xs  leading-5 font-poppins  italic tracking-wider">{desc}</p>
            
        </div>
    )
}

export default Value
