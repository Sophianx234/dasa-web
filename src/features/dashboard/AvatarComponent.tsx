import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"


function AvatarComponent() {
    return (
        <div>
            <Avatar>
  <AvatarImage src="https://github.com/shadcn.png" />
  <AvatarFallback>CN</AvatarFallback>
</Avatar>
        </div>
    )
}

export default AvatarComponent
