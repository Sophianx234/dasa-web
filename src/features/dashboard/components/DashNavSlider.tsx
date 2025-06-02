import { toggleSidebar } from "@/features/slices/navSlice";
import { useAppDispatch, useAppSelector } from "@/features/utils/hooks";
import { signupCredentialsExtended } from "@/services/apiServices";
import { motion } from "framer-motion";
import { Toaster } from "react-hot-toast";
import { GrGallery } from "react-icons/gr";
import { IoIosArrowForward } from "react-icons/io";
import { IoNotificationsOutline } from "react-icons/io5";
import { MdOutlineAdminPanelSettings } from "react-icons/md";
import { PiSidebarFill } from "react-icons/pi";
import { RiHome3Line, RiSecurePaymentLine } from "react-icons/ri";
import { TbLogout2, TbMessage } from "react-icons/tb";
import AccountProfileBottom from "./AccountProfileBottom";
import DashNavItem from "./DashNavItem";
function DashNavSlider() {
  const dispatch = useAppDispatch();
  const {user} = useAppSelector(store=>store.nav)
  const userInfo = user as signupCredentialsExtended
  console.log(userInfo)

  return (
    <motion.div
      exit={{ opacity: 0, x: "-100vw" }}
      initial={{
        opacity: 0,
        x: "-100vw",
      }}
      animate={{
        x: 0,
        opacity: 1,
        type: "spring",
      }}
      className="fixed overflow-x-auto  -top-1 -bottom-3 bg-white  left-0 right-0  z-40 w-dvw   pb-5 px-4"
    >
      <div className="flex flex-col justify-between  overflow-y-scroll pt-8 pb-4">
        <div className="flex items-center   justify-between pb-4">
          <img
            src="https://i.ibb.co/n8hRM6d/dasalogo-removebg.png"
            alt=""
            className="w-16"
          />
          <button onClick={() => dispatch(toggleSidebar())}>
            <PiSidebarFill className="size-9 hover:fill-dasadeep" />
          </button>
        </div>

        <div className="flex flex-col justify-between h-full">
          <ul className="space-y-4  ">
            <DashNavItem
              icon={<RiHome3Line className="size-7" />}
              link="dashboard/overview"
              navTitle="Home"
              arrIcon={<IoIosArrowForward />}
            />
              {userInfo.role==='admin' &&<DashNavItem
                icon={<MdOutlineAdminPanelSettings className="size-7" />}
                link="dashboard/admin"
                navTitle="Administrator"
                arrIcon={<IoIosArrowForward />}
              />}
            <DashNavItem
              icon={<IoNotificationsOutline className="size-7" />}
              link="dashboard/notifications"
              navTitle="Notifications"
              arrIcon={<IoIosArrowForward />}
            />
            <DashNavItem
              icon={<TbMessage className="size-7" />}
              link="dashboard/anonymous/write"
              navTitle="Anonymous Message"
              arrIcon={<IoIosArrowForward />}
            />
            <DashNavItem
              icon={<GrGallery className="size-7" />}
              link="dashboard/gallery"
              navTitle="Gallery"
              arrIcon={<IoIosArrowForward />}
            />
           {/*
            Deactivated

           <DashNavItem
              icon={<MdOutlineStore className="size-8" />}
              link="dashboard/market"
              navTitle="DaSA Market Center"
              arrIcon={<IoIosArrowForward />}
            /> */}
            <DashNavItem
              icon={<RiSecurePaymentLine className="size-7" />}
              link="dashboard/payment"
              navTitle="Payment"
              arrIcon={<IoIosArrowForward />}
            />
            {/*
              Deactivated
            <DashNavItem
              icon={<FaRegUser className="size-8" />}
              link="dashboard/account"
              navTitle="Account"
              arrIcon={<IoIosArrowForward />}
            /> */}
            
            <DashNavItem
              icon={<TbLogout2 className="size-7" />}
              link="dashboard/logout"
              navTitle="Logout"
              arrIcon={<IoIosArrowForward />}
            />
          </ul>
          <AccountProfileBottom/>
        </div>
        <Toaster
        position="top-center"/>
      </div>
    </motion.div>
  );
}

export default DashNavSlider;
