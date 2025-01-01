import { AnimatePresence } from "framer-motion"
import ChatMenu from "./ChatMenu"
import { useAppSelector } from "@/features/utils/hooks"

function OpenChatMenu() {
    const openChatMenuOptions = useAppSelector(store=>store.nav.openChatMenuOptions)
    return (
        <div>
            <AnimatePresence>
               {openChatMenuOptions && <ChatMenu/>}
            </AnimatePresence>
        </div>
    )
}

export default OpenChatMenu
