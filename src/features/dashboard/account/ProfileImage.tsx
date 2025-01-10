import { useChangeUserProfile, useGetUser } from "@/features/utils/hooks";
import { userType } from "@/services/apiServices";
import { ChangeEvent, useRef } from "react";
import { Toaster } from "react-hot-toast";
import { CiEdit } from "react-icons/ci";

function ProfileImage() {
  const {error,isLoading,data} = useGetUser()
  const {handleChangeProfile} = useChangeUserProfile()
  const {user} = data as userType 
  const fileInputRef = useRef<HTMLInputElement |null>(null);

  function handleButtonClick(){
    if(fileInputRef.current)fileInputRef?.current.click();
  };
  if(isLoading) return <>Boruto</>
  if(error) return <>error</>
  function handleFileChange(e: ChangeEvent<HTMLInputElement>){
    if(e.target.files && e.target.files.length>0){

      const file = e?.target.files[0];
      if (file) {
        console.log("Selected file:", file); 
        const formData = new FormData() 
        formData.append('image',file)    
        handleChangeProfile(formData)
      }
    }
  };
    return (
      
        <div className="pt-14 pb-16 bg-gray-50   flex items-center justify-center">
          <Toaster position="top-center"/>
        <div className="avatar relative online">
  <div className="w-24  rounded-full overflow-y-auto">
    <img src={user.profileImage} />
    <div onClick={handleButtonClick} className="bg-white shadow-md rounded-full absolute translate-x-16 -translate-y-8 px-2 py-2">

    <input type="file" className="hidden"
    ref={fileInputRef}
    name="image"
    onChange={handleFileChange} />


    <CiEdit className="size-5  "/>
    </div>
    
  </div>
</div>

        </div>
    )
}

export default ProfileImage
