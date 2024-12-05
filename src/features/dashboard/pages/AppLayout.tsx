import { Outlet } from "react-router-dom";
import SideNav from "../components/SideNav";
import ChatMenu from "../chat/ChatMenu";
import { useAppDispatch, useAppSelector } from "@/features/utils/hooks";
import OpenChatMenu from "../chat/OpenChatMenu";

function AppLayout() {
  const openChatMenu = useAppSelector((store) => store.nav.openChatMenu);
  return (
    <div className="h-dvh">
      <Outlet />
      <SideNav />
      <OpenChatMenu />
    </div>
  );
}

export default AppLayout;
