import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { useGetUser } from "@/features/utils/hooks"
import { userType } from "@/services/apiServices"


function AvatarComponent() {
    const {isLoading,data,error } = useGetUser()
    if(error) return <>X</>
    
    
    const {user} = data as userType 
    const abbrName = user.username.split(' ').map((name:string)=>name[0]).join('')
    return (
        <div>
            <Avatar>
  <AvatarImage src={user.profileImage} className="object-cover object-top" />
  <AvatarFallback>{abbrName}</AvatarFallback>

</Avatar> 
{isLoading &&<div className="animate-pulse rounded-full size-12 bg-gray-100 shadow">

</div>}
        </div>
    )
}

export default AvatarComponent
