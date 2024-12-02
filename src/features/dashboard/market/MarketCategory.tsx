import { MdPhoneIphone } from "react-icons/md"
import CategoryItem from "./CategoryItem"
import { IoFastFood } from "react-icons/io5"
import { BiSolidWatch } from "react-icons/bi"
import { GiLipstick, GiNotebook, GiPill, GiPoloShirt } from "react-icons/gi"
import { RiArmchairFill } from "react-icons/ri"

function MarketCategory() {
    return (
        <div className="grid grid-cols-4 mx-4 gap-y-6">
            <CategoryItem icon={<MdPhoneIphone className="size-6"/>} title="Electronic"/>
            <CategoryItem icon={<IoFastFood className="size-6"/>} title="Food & Drink"/>
            <CategoryItem icon={<BiSolidWatch className="size-6"/>} title="Accessories"/>
            <CategoryItem icon={<GiLipstick className="size-6"/>} title="Beauty"/>
            <CategoryItem icon={<RiArmchairFill className="size-6"/>} title="Furniture"/>
            <CategoryItem icon={<GiPoloShirt className="size-6"/>} title="Fashion"/>
            <CategoryItem icon={<GiPill className="size-6"/>} title="Health"/>
            <CategoryItem icon={<GiNotebook className="size-6"/>} title="Stationary"/>
        </div>
    )
}

export default MarketCategory
