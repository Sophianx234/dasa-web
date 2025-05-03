import { ReactNode } from "react";
import { BsFolder } from "react-icons/bs";
import { GrAnnounce } from "react-icons/gr";
import { MdOutlineEventNote } from "react-icons/md";
import { RiUserSettingsLine } from "react-icons/ri";
import AdminControlItem from "./AdminControlItem";

type controleHeaderProps = {
  children?: ReactNode
}
function ControlHeader({children}:controleHeaderProps) {
const controlDesc = ["Media",
"Announce",
"Events",
"Users"]
  return (
    <div className="flex bg-white gap-4 pb-4 items-center justify-center">
      <AdminControlItem link="media" icon={<BsFolder className="size-7" />} text={!children ? controlDesc[0]:null} />
      <AdminControlItem link="announcements" icon={<GrAnnounce  className="size-7"  />} text={!children ? controlDesc[1]:null} />
      {children}
      <AdminControlItem link="events" icon={<MdOutlineEventNote  className="size-7"  />} text={!children ? controlDesc[2]:null} />
      <AdminControlItem link="users" icon={<RiUserSettingsLine className="size-7"  />} text={!children ? controlDesc[3]:null} />
      
    </div>
  );
}

export default ControlHeader;
