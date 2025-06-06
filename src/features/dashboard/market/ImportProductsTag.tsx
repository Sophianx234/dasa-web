import { toggleRevealUplaoadUserImage, toggleRevealUploadProduct } from "@/features/slices/navSlice"
import { useAppDispatch } from "@/features/utils/hooks"
import { IoMdClose } from "react-icons/io"
import { IoFastFoodOutline } from "react-icons/io5"
import { dragZoneProps } from "./DragZone"
import { GrGallery } from "react-icons/gr"

function ImportProductsTag({type}:dragZoneProps) {
  const dispatch = useAppDispatch()
  function handleClose(){
    if(type==='products')dispatch(toggleRevealUploadProduct())
    
    if(type === 'images') dispatch(toggleRevealUplaoadUserImage())
    if(type === 'videos' || type==='images') dispatch(toggleRevealUploadProduct())

  

  }

    return (
        <div className="flex relative mb-2">
        <div className="flex items-center gap-2">
          <div className="shadow-slate-50 border px-3 h-full flex items-center rounded-lg bg-dasalight">
            {type === 'products'?

          <IoFastFoodOutline className="size-8"/>:<GrGallery className="size-8"/>}
          </div>
          <div>
            <h1 className="font-bold ">Import {type}</h1>
            <p className="text-xs font-semibold tracking-tighter">Upload {type==='products'?'items': type==='images'? 'images':'videos'}  to list  your {type==='products'?<>products on <br />DaSA Market Center</>:type==='images'?<>images on <br />DaSA Gallery</>:<>videos on <br />DaSA Gallery</>} </p>
          </div>

        </div>

        <IoMdClose className="absolute right-0" onClick={handleClose}/>
      </div>
    )
}

export default ImportProductsTag
