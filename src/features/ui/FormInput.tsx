import { ReactElement } from "react"

export type formInputProps = {
icon: ReactElement,
type: string
placeholder: string
}
function FormInput({icon,type,placeholder}:formInputProps) {
    return (
        <div className="flex items-center relative">

                    {icon} 
            <input type={type} placeholder={placeholder}
            className="py-2 pl-7 rounded-sm px-1 font-poppins h-full w-full outline-none focus:outline-offset-1 focus:outline-orange-300 "/>

                    </div>
    )
}


export default FormInput
