import { toggleRevealConfirmModal } from "@/features/slices/navSlice"
import { useAppDispatch, useAppSelector } from "@/features/utils/hooks"

export type confirmModalProps = {
    title: string,
    desc: string,
    setReveal?: ()=>any

}
function ConfirmModal({title,desc,setReveal}:confirmModalProps) {
    const dispatch = useAppDispatch()
    function handleTrigger(e){
      if(title.includes('Contact'))dispatch(toggleRevealConfirmModal())
        if(title.includes('Delete')) setReveal(reveal=>!reveal)
    }
    return (
        <div className=" backdrop-blur-md h-screen bottom-0 left-0 right-0 top-0 fixed flex items-center justify-center ">
            <div className="card  bg-white shadow-md text-neutral-content  max-w-80">
  <div className="card-body items-center text-center">
    <h2 className="card-title">{title}</h2>
    <p>{desc}</p>
    <div className="card-actions justify-end">
      <button  className={`btn btn-primary ${title.includes('Delete') && 'bg-red-600 text-red-950'}`}>Accept</button>
      <div onClick={handleTrigger} className="btn btn-ghost">Deny</div>
    </div>
  </div>
</div>
        </div>
    )
}

export default ConfirmModal
