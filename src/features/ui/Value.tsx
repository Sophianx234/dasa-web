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
            <h1 className="font-Montserrat text-center font-semibold">{title}</h1>
            <p className="text-center text-xs">{desc}</p>
            
        </div>
    )
}

export default Value
