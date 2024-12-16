import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"


function AvatarComponent() {
    return (
        <div>
            <Avatar>
  <AvatarImage src="https://i.ibb.co/LdfLkxF/photo-89-2024-10-31-06-52-36.jpg" />
  <AvatarFallback>CN</AvatarFallback>
</Avatar>
        </div>
    )
}

export default AvatarComponent
