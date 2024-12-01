import { useState } from "react";
import { GoPlusCircle } from "react-icons/go";
import UploadImageForm from "./UploadImageForm";
function UploadButton() {
    const [revealUpload, setRevealUpload] = useState<boolean>()
    function handleRevealUpload(e){
        setRevealUpload(reveal=>!reveal)
    }
    return (
        <div className="flex items-center shadow-lg justify-between   fixed  bg-dasalight rounded-md  right-0 left-0 mx-3 px-2 pr-4 z-40 py-4 gap-3  ">
            <div>
                <h1 className="font-Montserrat font-bold ">Browse File</h1>
                <p className="text-sm font-poppins">upload any DaSA image</p>
            </div>
            <div className="bg-dasadeep px-4 py-2 rounded-full shadow-sm self-end font-semibold " onClick={handleRevealUpload}>Upload</div>
            {revealUpload&&<UploadImageForm handleClose={handleRevealUpload}/>}
        </div>
    )
}

export default UploadButton
