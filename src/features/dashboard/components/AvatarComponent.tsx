import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { useGetUser } from "@/features/utils/hooks"
import { userType } from "@/services/apiServices"
import ProfileSkeleton from "@/skeletons/profileSkeleton"


function AvatarComponent() {
    const {isLoading,data } = useGetUser()
    if(isLoading) return <ProfileSkeleton/>
    const {user} = data as userType 
    const abbrName = user.username.split(' ').map((name:string)=>name[0]).join('')
    console.log(abbrName)
    return (
        <div>
            <Avatar>
  <AvatarImage src={user.profileImage} />
  <AvatarFallback>{abbrName}</AvatarFallback>

</Avatar>
        </div>
    )
}

export default AvatarComponent
