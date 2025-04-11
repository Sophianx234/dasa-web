import { BsFolder } from "react-icons/bs";
import { GrAnnounce } from "react-icons/gr";
import { MdOutlineEventNote } from "react-icons/md";
import { RiUserSettingsLine } from "react-icons/ri";
import AdminControlItem from "./adminControlItem";

function ControlHeader() {
  return (
    <div className="flex gap-4 pb-4 items-center justify-center">
      <AdminControlItem link="media" icon={<BsFolder className="size-7" />} text="Media" />
      <AdminControlItem link="announcements" icon={<GrAnnounce  className="size-7"  />} text="Announce" />
      <AdminControlItem link="events" icon={<MdOutlineEventNote  className="size-7"  />} text="Events" />
      <AdminControlItem link="users" icon={<RiUserSettingsLine className="size-7"  />} text="Users" />
      
    </div>
  );
}

export default ControlHeader;
