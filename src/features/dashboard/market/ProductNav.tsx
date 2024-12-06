import { IoArrowBack, IoShareSocialOutline } from "react-icons/io5"
import { useNavigate } from "react-router-dom"

export type marketHeaderProps = {
    type?: 'simple'|'normal',
    title: string
}
function ProductNav({title,type='normal'}:marketHeaderProps) {
    const navigate = useNavigate()
    return (
        <div className="flex items-center  justify-between px-3 pt-3 ">
            <div className="border p-2 rounded-full" onClick={()=>navigate(-1)}>

            <IoArrowBack className="size-5"/>
            </div>
                <span className="font-bold">{title}</span>
                {type==='normal'?<div className="border p-2 rounded-full">

                <IoShareSocialOutline className="size-5"/>
                </div>:<div className="pr-6"></div>}
            </div>
    )
}

export default ProductNav
