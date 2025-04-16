import { useChangeUserRole } from "@/features/utils/hooks"
import { Popover, PopoverContent, PopoverTrigger } from "@radix-ui/react-popover"
import { Toaster } from "react-hot-toast"
import Swal from "sweetalert2"

type roleSelectProps = {
  role?: string
  id: string
}
function RoleSelect({role,id}:roleSelectProps) {
  const userRoles = ['admin','user','guest']
const {handleChangeUserRole} = useChangeUserRole()
 async function handleChangeRole (role:string,id:string){
    const result = await Swal.fire({
                title: "Change User Role?",
                text: "You're about to change this user's role. Proceed with caution.",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#e8590c',
                cancelButtonColor: '#3085d6',
                confirmButtonText: 'Yes, change it!',
              });
              
            
              if (result.isConfirmed) {
                await handleChangeUserRole({id,role});
              }
  }
  return (
    <>
    <Popover>
    <PopoverTrigger><div className={`${role==='user'?'bg-blue-300 text-blue-950':role==='admin'?'bg-dasadeep ':'bg-yellow-300 text-yellow-950'} w-[8rem] rounded-md`}>{role}</div></PopoverTrigger>
    <PopoverContent>
      <div className="bg-white shadow-md pt-2   w-[8rem]">

    
      {userRoles.map(userrole=>userrole !==role?<div onClick={()=>handleChangeRole(userrole,id )} className="py-1  pb-2 hover:bg-gray-100" > {userrole}</div>:null)}
      
    
      </div>
    </PopoverContent>
  </Popover>
  <Toaster/>
    
    </>
  )
}

export default RoleSelect
