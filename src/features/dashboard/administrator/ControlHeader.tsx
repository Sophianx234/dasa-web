import { IoFolderOpenSharp } from "react-icons/io5";
import AdminControlItem from "./adminControlItem";
import { BsFolder } from "react-icons/bs";
import { RiUserSettingsLine } from "react-icons/ri";
import { GrAnnounce } from "react-icons/gr";
import { MdOutlineEventNote } from "react-icons/md";

function ControlHeader() {
  return (
    <div className="flex gap-4 pb-4 items-center justify-center">
      <AdminControlItem icon={<BsFolder className="size-7" />} text="Media" />
      <AdminControlItem icon={<GrAnnounce  className="size-7"  />} text="Announce" />
      <AdminControlItem icon={<MdOutlineEventNote  className="size-7"  />} text="Events" />
      <AdminControlItem icon={<RiUserSettingsLine className="size-7"  />} text="Users" />
      
    </div>
  );
}

export default ControlHeader;
