import HeaderDashboard from "./HeaderDashboard";
import Welcome from "./Welcome";
import Market from "./Market";
import AnonymousTiles from "./AnonymousTiles";
import AnnouncementList from "./AnnouncementList";
import Slider from "./Slider";
import BriefGallery from "./BriefGallery";
import Events from "./Events";
import Event from "./Event";
import DashNav from "./dashNav";

function DashboardOverview() {
  return (
    <div className="">
      <HeaderDashboard />
      <DashNav/>
      <Welcome />
      <AnnouncementList/>
      <Events/>
      <AnonymousTiles/>
      <Market />
      <BriefGallery/>
    </div>
  );
}

export default DashboardOverview;
