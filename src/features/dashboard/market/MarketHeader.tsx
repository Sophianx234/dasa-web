import DasaLogo from "@/features/ui/DasaLogo"
import { FaShoppingCart } from "react-icons/fa"


function MarketHeader() {
    return (
        <div className="mx-2 mr-6 flex items-center justify-between">
            <DasaLogo title="Market"/>
            <div>
            <FaShoppingCart/>
            </div>
        </div>
    )
}

export default MarketHeader
