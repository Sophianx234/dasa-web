import { toggleRevealConfirmModal } from "@/features/slices/navSlice"
import { useAppDispatch, useAppSelector } from "@/features/utils/hooks"

export type confirmModalProps = {
    title: string,
    desc: string,

}
function ConfirmModal({title,desc}:confirmModalProps) {
    const dispatch = useAppDispatch()
    return (
        <div className=" backdrop-blur-md h-screen bottom-0 left-0 right-0 top-0 fixed flex items-center justify-center ">
            <div className="card  bg-white shadow-md text-neutral-content  max-w-80">
  <div className="card-body items-center text-center">
    <h2 className="card-title">{title}</h2>
    <p>{desc}</p>
    <div className="card-actions justify-end">
      <button  className="btn btn-primary">Accept</button>
      <div onClick={()=>dispatch(toggleRevealConfirmModal())} className="btn btn-ghost">Deny</div>
    </div>
  </div>
</div>
        </div>
    )
}

export default ConfirmModal
