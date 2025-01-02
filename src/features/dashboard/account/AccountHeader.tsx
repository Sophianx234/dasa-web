import { useLogout } from "@/features/utils/hooks";
import { useEffect, useState } from "react";
import { Toaster } from "react-hot-toast";
import { IoIosArrowBack } from "react-icons/io"
import { useNavigate } from "react-router-dom";

function AccountHeader() {
    const [isScrolled, setIsScrolled] = useState(false);
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
            isScrolled ? " -top-1 shadow-md duration-150  py-5" : ""
          }`}>
            <div className="flex pt-4 items-center justify-between mx-4">
            <IoIosArrowBack className="size-5" onClick={()=>navigate(-1)}/>
            <button className="" onClick={()=>handleLogout()}>Logout</button>
            </div>
            <Toaster
            position="top-center"/>
        </div>
    )
}

export default AccountHeader
