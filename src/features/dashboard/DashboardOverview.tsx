import HeaderDashboard from "./HeaderDashboard";
import Welcome from "./Welcome";
import Market from "./Market";
import AnonymousTiles from "./AnonymousTiles";
import { Carousel } from "react-responsive-carousel";

function DashboardOverview() {
  return (
    <div className="">
      <HeaderDashboard />
      <Welcome />
      <AnonymousTiles/>
      <Market />
    </div>
  );
}

export default DashboardOverview;
