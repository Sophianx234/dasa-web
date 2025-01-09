import { toggleSidebar } from "@/features/slices/navSlice";
import { useAppDispatch, useLogout } from "@/features/utils/hooks";
import { useEffect, useState } from "react";
import { Toaster } from "react-hot-toast";
import { IoIosArrowBack } from "react-icons/io"
import { useNavigate } from "react-router-dom";

function AccountHeader() {
    const [isScrolled, setIsScrolled] = useState(false);
    const dispatch = useAppDispatch()
    const navigate = useNavigate()
    const {handleLogout} = useLogout(navigate)

    useEffect(() => {
      const handleScroll = () => {
        setIsScrolled(window.scrollY > 10); // Adjust scroll distance as needed
      };
  
      window.addEventListener("scroll", handleScroll);
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }, []);
    return (
        <div className={`sticky  bg-white py-3   z-50 w-full
             transition-all ${
            isScrolled ? " top-0 shadow-md duration-150    py-2 pb-6 border" : ""
          }`}>
            <div className="flex pt-4 items-center justify-between mx-4">
            <IoIosArrowBack className="size-5" onClick={()=>navigate(-1)}/>
            <button className="" onClick={()=>{handleLogout()
              dispatch(toggleSidebar())
            }}>Logout</button>
            </div>
            <Toaster
            position="top-center"/>
        </div>
    )
}

export default AccountHeader
