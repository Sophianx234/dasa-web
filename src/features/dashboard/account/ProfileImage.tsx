import { ChangeEvent, useRef } from "react";
import { CiEdit } from "react-icons/ci";

function ProfileImage() {
  const fileInputRef = useRef<HTMLInputElement |null>(null);

  function handleButtonClick(){
    if(fileInputRef.current)fileInputRef?.current.click();
  };

  function handleFileChange(e: ChangeEvent<HTMLInputElement>){
    const file = e?.target.files[0];
    if (file) {
      console.log("Selected file:", file.name);
    }
  };
    return (
        <div className="pt-14 pb-16 bg-gray-50   flex items-center justify-center">
        <div className="avatar relative online">
  <div className="w-24  rounded-full overflow-y-auto">
    <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
    <div onClick={handleButtonClick} className="bg-white shadow-md rounded-full absolute translate-x-16 -translate-y-8 px-2 py-2">

    <input type="file" className="hidden"
    ref={fileInputRef}
    onChange={handleFileChange} />


    <CiEdit className="size-5  "/>
    </div>
    
  </div>
</div>

        </div>
    )
}

export default ProfileImage
