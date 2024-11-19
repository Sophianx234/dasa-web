import HeaderDashboard from "./HeaderDashboard";
import Welcome from "./Welcome";
import Market from "./Market";
import AnonymousTiles from "../anonymous/AnonymousTiles";
import AnnouncementList from "../announcement/AnnouncementList";
import Slider from "./Slider";
import BriefGallery from "./BriefGallery";
import Events from "./Events";
import Event from "./Event";
import DashNav from "./dashNav";
import { useAppSelector } from "@/features/utils/hooks";
import { AnimatePresence } from "framer-motion";

function DashboardOverview() {
  const openSidebar = useAppSelector((store) => store.nav.openSidebar);
  return (
    <div className="">
      <HeaderDashboard />

      <Welcome />
      <AnnouncementList />
      <Events />
      <AnonymousTiles />
      <Market style="overview" />
      <BriefGallery style="overview" />
    </div>
  );
}

export default DashboardOverview;
