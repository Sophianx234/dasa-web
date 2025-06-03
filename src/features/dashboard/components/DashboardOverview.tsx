import Footer from "@/features/ui/Footer";
import AnnouncementList from "../announcement/AnnouncementList";
import AnonymousTiles from "../anonymous/AnonymousTiles";
import BriefGallery from "./BriefGallery";
import Events from "./Events";
import HeaderDashboard from "./HeaderDashboard";
import Market from "./Market";
import UserStats from "./UserStats";
import Welcome from "./Welcome";

function DashboardOverview() {
  
  

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
