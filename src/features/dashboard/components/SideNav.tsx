import { useAppSelector } from "@/features/utils/hooks"
import { AnimatePresence } from "framer-motion"
import DashNavSlider from "./DashNavSlider"


function SideNav() {
    const openSidebar = useAppSelector(store=>store.nav.openSidebar)
    return (
        <>
        <AnimatePresence>
            
            {openSidebar &&
       <DashNavSlider/>}
       </AnimatePresence>
       </>

        
    )
}

export default SideNav
