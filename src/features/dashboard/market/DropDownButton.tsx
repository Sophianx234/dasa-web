import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { ReactElement } from "react"
import { BiDotsVerticalRounded } from "react-icons/bi"
export type dropDownButtonProps = {
    icon: ReactElement
}
function DropDownButton({icon}:dropDownButtonProps) {
    return (
<DropdownMenu>

<DropdownMenuTrigger>
    {icon}

</DropdownMenuTrigger>
<DropdownMenuContent>
<DropdownMenuLabel>My Account</DropdownMenuLabel>
<DropdownMenuSeparator />
<DropdownMenuItem>Profile</DropdownMenuItem>
<DropdownMenuItem>Billing</DropdownMenuItem>
<DropdownMenuItem>Team</DropdownMenuItem>
<DropdownMenuItem>Subscription</DropdownMenuItem>
</DropdownMenuContent>
</DropdownMenu>
    )
}

export default DropDownButton
