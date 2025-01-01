import { Outlet } from "react-router-dom";
import OpenChatMenu from "../chat/OpenChatMenu";
import SideNav from "../components/SideNav";

function AppLayout() {
  // const openChatMenu = useAppSelector((store) => store.nav.openChatMenu);
  return (
    <div className="h-dvh">
      <Outlet />
      <SideNav />
      <OpenChatMenu />
    </div>
  );
}

export default AppLayout;
