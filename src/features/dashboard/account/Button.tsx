import { toggleRevealConfirmModal } from "@/features/slices/navSlice"
import { useAppDispatch } from "@/features/utils/hooks"
export type ButtonProps = {
    submittable?: boolean,
    desc: string
}
function Button({desc,submittable=true}:ButtonProps) {
    const dispatch = useAppDispatch()
    if(submittable)
    return (
        <button className="bg-dasadeep font-semibold w-full py-2 mt-2 rounded-md text-[#191611]">{desc}</button>
    )
    else return (
        <div onClick={()=>dispatch(toggleRevealConfirmModal())} className="bg-dasadeep text-center font-semibold w-full py-2 mt-2 rounded-md text-[#191611]">{desc}</div>
    )
}

export default Button
