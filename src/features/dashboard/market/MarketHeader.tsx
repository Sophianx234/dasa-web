import DasaLogo from "@/features/ui/DasaLogo"
import { FaShoppingCart } from "react-icons/fa"
import { FaInbox } from "react-icons/fa6"
import { Link } from "react-router-dom"


function MarketHeader() {
    return (
        <div className="mx-2 mr-6 flex items-center justify-between">
            <Link to='/dashboard/market' >
            <DasaLogo title="Market"/>
            </Link>
            <div className="flex gap-4">
            <Link to='/dashboard/market/43rex/cart'className="group">
            <FaShoppingCart className="group-hover:fill-dasadeep duration-150 transition-all"/>
            </Link>  
            <Link to='/dashboard/market/43rex/uploadedproducts' className="group">
            <FaInbox className="group-hover:fill-dasadeep duration-150 transition-all"/>
            </Link>  
            </div>
        </div>
    )
}

export default MarketHeader
