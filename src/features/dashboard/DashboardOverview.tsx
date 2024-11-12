import HeaderDashboard from "./HeaderDashboard";
import Welcome from "./Welcome";
import Tile from "./AnonymousTile";
import Tiles from "./Tiles";
import Market from "./Market";
import Messages from "./Messages";

function DashboardOverview() {
  return (
    <div className="">
      <HeaderDashboard />
      <Welcome />
      <Messages />
      <Market />
    </div>
  );
}

export default DashboardOverview;
