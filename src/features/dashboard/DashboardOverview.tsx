import HeaderDashboard from "./HeaderDashboard";
import Welcome from "./Welcome";
import Market from "./Market";
import AnonymousTiles from "./AnonymousTiles";
import AnnouncementList from "./AnnouncementList";
import Slider from "./Slider";
import BriefGallery from "./BriefGallery";

function DashboardOverview() {
  return (
    <div className="">
      <HeaderDashboard />
      <Welcome />
      <AnnouncementList/>
      <AnonymousTiles/>
      <Market />
      <BriefGallery/>
    </div>
  );
}

export default DashboardOverview;
