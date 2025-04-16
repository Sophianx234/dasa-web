import { useDeleteUser } from "@/features/utils/hooks";
import { signupCredentialsExtended } from "@/services/apiServices";
import { Toaster } from "react-hot-toast";
import { AiOutlineUser } from "react-icons/ai";
import { FaTheaterMasks } from "react-icons/fa";
import { HiOutlineBuildingOffice } from "react-icons/hi2";
import { IoShieldOutline } from "react-icons/io5";
import { PiGenderIntersexLight } from "react-icons/pi";
import { RiDeleteBin5Line } from "react-icons/ri";
import Swal from "sweetalert2";
import RoleSelect from "./RoleSelect";

type userCardProps = {
  userInfo: signupCredentialsExtended
}
function UserCard({userInfo}:userCardProps) {
  const {handleRemoveUser} = useDeleteUser()
  async function handleDeleteUser(id:string){
      const result = await Swal.fire({
            title: 'Are you sure?',
            text: "This user will be permanently deleted.",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#e8590c',
            cancelButtonColor: '#3085d6',
            confirmButtonText: 'Yes, delete it!',
          });
        
          if (result.isConfirmed) {
            await handleRemoveUser(id);
          }
    }
  console.log('user',userInfo)
  return (
    <div>
      <div className="grid relative  grid-cols-[1.5fr_2fr] bg-white border shadow-sm rounded-md overflow-hidden">
      <button onClick={()=>handleDeleteUser(userInfo._id)} className="absolute border  bg-red-300 shadow-lg p-[3px] z-30 rounded-full right-1 top-1">
      <RiDeleteBin5Line className="fill-red-950 size-4"/>
      </button>
        <img src={userInfo.profileImage} className="size-52 object-cover object-center" alt="" />
        <div className="flex pt-2 relative  flex-col gap-1 ">
          <div className="pl-2 flex flex-col gap-1">

          <div className="flex items-center  gap-2">
          <AiOutlineUser className="size-7" />
          <span className="py-6 border-l  border-black border-1"></span>
          <div className="flex flex-col">

            <span className=" text-sm font-semibold font-poppins">{userInfo.username}</span>
            <span className="text-xs">{userInfo.email}</span>
            <span className="text-xs">{userInfo.contact}</span>
          </div>
            </div>
            <div className="flex items-center  gap-2">

            <FaTheaterMasks className="size-7"/> <span className="py-4 border-l  border-black border-1"></span>
          <span className="text-xs italic ">{userInfo.anonymousName}</span>

            </div>
            <div className="flex items-center gap-2  "><PiGenderIntersexLight className="size-7"/> <span className="py-4 border-l  border-black border-1"></span>  <span className="text-sm italic">{userInfo.sex[0].toUpperCase()+userInfo.sex.slice(1)}</span></div>
            <div className="flex items-center gap-2  "><HiOutlineBuildingOffice className="size-7"/> <span className="py-4 border-l  border-black border-1"></span>  <span className="text-sm italic">{userInfo.hall}</span></div>
          </div>
            <div className=" justify-self-end bottom-0 left-0  rounded-sm pb-1  right-0    px-2">
              
                
                <button className=" grid grid-cols-[.2fr_2fr] items-center  gap-3 w-full"><IoShieldOutline className="size-6"/> 
                  <div className=" border-l  border-black  ">
                    <RoleSelect role={userInfo.role} id={userInfo._id}/>
                    

  
                    </div>
                    </button>
              
            </div>
        
        </div>
        <Toaster/>
      </div>
      
    </div>
  )
}

export default UserCard
