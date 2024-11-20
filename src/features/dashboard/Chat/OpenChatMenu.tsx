import { AnimatePresence } from "framer-motion"
import ChatMenu from "./ChatMenu"
import { useAppSelector } from "@/features/utils/hooks"

function OpenChatMenu() {
    const openChatMenu = useAppSelector(store=>store.nav.openChatMenu)
    return (
        <div>
            <AnimatePresence>
               {openChatMenu && <ChatMenu/>}
            </AnimatePresence>
        </div>
    )
}

export default OpenChatMenu
