import { Outlet } from "react-router-dom";
import SideNav from "../components/SideNav";

function AppLayout() {
  return (
    <div>
      <Outlet />
      <SideNav />
    </div>
  );
}

export default AppLayout;
