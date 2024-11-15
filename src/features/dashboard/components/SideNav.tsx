import { useAppSelector } from "@/features/utils/hooks"
import DashNav from "./dashNav"
import { AnimatePresence } from "framer-motion"

function SideNav() {
    const openSidebar = useAppSelector(store=>store.nav.openSidebar)
    return (
        <>
        <AnimatePresence>
            
            {openSidebar &&
       <DashNav/>}
       </AnimatePresence>
       </>

        
    )
}

export default SideNav
