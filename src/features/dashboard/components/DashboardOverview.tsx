import HeaderDashboard from "./HeaderDashboard";
import Welcome from "./Welcome";
import Market from "./Market";
import AnonymousTiles from "../anonymous/AnonymousTiles";
import AnnouncementList from "../announcement/AnnouncementList";
import BriefGallery from "./BriefGallery";
import { useAppSelector } from "@/features/utils/hooks";
import UserStats from "./UserStats";
import Footer from "@/features/ui/Footer";
import Events from "./Events";

function DashboardOverview() {
  const openSidebar = useAppSelector((store) => store.nav.openSidebar);
  return (
    <div className=" ">
      <HeaderDashboard />
      <div className=" bg-white">

      <UserStats/>
      <Welcome />
      <AnnouncementList />
      <Events />
      <AnonymousTiles />
      <Market style="overview" />
      <BriefGallery style="overview" />
      <Footer navType="dash"/>
      </div>
    </div>
  );
}

export default DashboardOverview;
