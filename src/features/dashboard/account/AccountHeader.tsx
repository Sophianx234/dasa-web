import { useEffect, useState } from "react";
import { IoIosArrowBack } from "react-icons/io"

function AccountHeader() {
    const [isScrolled, setIsScrolled] = useState(false);

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
        <div className={`sticky  bg-white py-3 rounded-b-lg  z-50 w-full
             transition-all ${
            isScrolled ? " -top-1 shadow-md duration-150 " : ""
          }`}>
            <div className="flex pt-4 items-center justify-between mx-4">
            <IoIosArrowBack className="size-5"/>
            <button className="">Logout</button>
            </div>
        </div>
    )
}

export default AccountHeader
