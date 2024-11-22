import HeaderDashboard from "./HeaderDashboard";
import Welcome from "./Welcome";
import Market from "./Market";
import AnonymousTiles from "../anonymous/AnonymousTiles";
import AnnouncementList from "../announcement/AnnouncementList";
import BriefGallery from "./BriefGallery";
import Events from "./Events";
import { useAppSelector } from "@/features/utils/hooks";
import UserStats from "./UserStats";

function DashboardOverview() {
  const openSidebar = useAppSelector((store) => store.nav.openSidebar);
  return (
    <div className=" ">
      <HeaderDashboard />
      <div className="overflow-y-scroll bg-white">


      <Welcome />
      <AnnouncementList />
      <Events />
      <AnonymousTiles />
      <Market style="overview" />
      <BriefGallery style="overview" />
      </div>
    </div>
  );
}

export default DashboardOverview;
