import HeaderDashboard from "./HeaderDashboard";
import Welcome from "./Welcome";
import Market from "./Market";
import AnonymousTiles from "./AnonymousTiles";

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
