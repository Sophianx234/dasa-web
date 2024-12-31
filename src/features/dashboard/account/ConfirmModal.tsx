import { toggleRevealConfirmModal, toggleRevealUploadImage } from "@/features/slices/navSlice";
import { useAppDispatch } from "@/features/utils/hooks";
import { FieldValues, UseFormRegister } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import FileInputButton from "./FileInput";

export type confirmModalProps= {
  register?: UseFormRegister<FieldValues>,
  title?: string;
  desc?: string;
  setReveal?: () => void ;
  handleClose?: ()=>boolean | void;
  type?: "confirm" | "form";

};
function ConfirmModal({
  title,
  register,
  desc,
  setReveal,
  handleClose,
  type = "confirm",
}: confirmModalProps) {
  const dispatch = useAppDispatch();
  const navigate = useNavigate()
  function handleNav(){
    navigate('/dashboard/market/45cde66/orders')
  }
  function handleTrigger() {
    
    if (title?.includes("Contact")) dispatch(toggleRevealConfirmModal());
    if (title?.includes("Delete")) setReveal?.();
    if(type === 'form') dispatch(toggleRevealUploadImage())
    handleClose?.()
  }

  return (
    <div className=" backdrop-blur-md h-screen bottom-0 left-0 right-0 top-0 fixed flex items-center justify-center  z-40">
      <div className="card  bg-white shadow-md text-neutral-content  max-w-80">
        <div className="card-body items-center text-center">
          {type === "confirm" && (
            <>
              <h2 className="card-title">{title}</h2>
              <p>{desc}</p>
            </>
          )}
          {type === "form" && (
            <div className="pb-2">
              <h1 className="pb-1">Please Select Photo</h1>
              <FileInputButton inputName="profileImg" register={register!} />
            </div>
          )}

          <div className="card-actions justify-end">
            <button onClick={title?.toLocaleLowerCase().includes('checkout') ? handleNav: undefined} 
              className={`btn btn-primary ${
                title?.includes("Delete") && "bg-red-600 text-red-950"
              } ${type === "form" && "bg-dasadeep"}`}
            >
              Accept
            </button>
            <div onClick={handleTrigger} className="btn btn-ghost">
              Deny
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ConfirmModal;
