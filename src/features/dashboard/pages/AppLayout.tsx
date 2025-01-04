import { Outlet } from "react-router-dom";
import OpenChatMenu from "../chat/OpenChatMenu";
import SideNav from "../components/SideNav";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@/features/utils/hooks";
import { toggleSidebar } from "@/features/slices/navSlice";

function AppLayout() {
  // const openChatMenu = useAppSelector((store) => store.nav.openChatMenu);
  const {openSidebar} = useAppSelector(store=>store.nav)
  const dispatch = useAppDispatch()
  useEffect(function(){
    if(openSidebar) dispatch(toggleSidebar())

  },[])
  return (
    <div className="h-dvh">
      <Outlet />
      <SideNav />
      <OpenChatMenu />
    </div>
  );
}

export default AppLayout;
