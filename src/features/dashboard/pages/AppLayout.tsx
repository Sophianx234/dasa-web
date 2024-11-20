import { Outlet } from "react-router-dom";
import SideNav from "../components/SideNav";
import ChatMenu from "../Chat/ChatMenu";
import { useAppDispatch, useAppSelector } from "@/features/utils/hooks";
import OpenChatMenu from "../Chat/OpenChatMenu";

function AppLayout() {
  const openChatMenu = useAppSelector(store=>store.nav.openChatMenu)
  return (
    <div>
      <Outlet />
      <SideNav />
      <OpenChatMenu/>

    </div>
  );
}

export default AppLayout;
