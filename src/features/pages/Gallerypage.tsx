import { AnimatePresence } from "framer-motion";
import BriefGallery from "../dashboard/components/BriefGallery"
import Footer from "../ui/Footer"
import Header from "../ui/Header"
import NavLinks from "../ui/NavLinks";
import { useAppSelector } from "../utils/hooks";
import Banner from "../ui/Banner";

function Gallerypage() {
    const isOpen = useAppSelector((store) => store.nav.isOpen);
  
  return (
    <div className="h-dvh  scrollbar-hide overflow-x-hidden w-dvw">
      <Header />
      <AnimatePresence>{isOpen && <NavLinks swap="col" />}</AnimatePresence>
      <div className="pt-32 ">
<Banner/>
        <BriefGallery style="side"/>
      </div>
      
    </div>
  )
}

export default Gallerypage
