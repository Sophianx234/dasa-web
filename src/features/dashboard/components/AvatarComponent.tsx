import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { useGetUser } from "@/features/utils/hooks"
import { userType } from "@/services/apiServices"


function AvatarComponent() {
    const {isLoading,data,error } = useGetUser()
    if(isLoading) return <>loading</>
    if(error)return <>could load</>
    const {user} = data as userType 
    const abbrName = user.username.split(' ').map((name:string)=>name[0]).join('')
    console.log(abbrName)
    return (
        <div>
            <Avatar>
  <AvatarImage src={user.profileImage} className="object-cover object-top" />
  <AvatarFallback>{abbrName}</AvatarFallback>

</Avatar>
        </div>
    )
}

export default AvatarComponent
