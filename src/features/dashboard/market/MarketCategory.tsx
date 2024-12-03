import { MdPhoneIphone } from "react-icons/md"
import CategoryItem from "./CategoryItem"
import { IoFastFood } from "react-icons/io5"
import { BiSolidWatch } from "react-icons/bi"
import { GiLipstick, GiNotebook, GiPill, GiPoloShirt } from "react-icons/gi"
import { RiArmchairFill } from "react-icons/ri"

function MarketCategory() {
    return (
        <div className="grid grid-cols-4 mx-4 gap-y-6">
            <CategoryItem link="electronic" icon={<MdPhoneIphone className="size-6"/>} title="Electronic"/>
            <CategoryItem link="food" icon={<IoFastFood className="size-6"/>} title="Food & Drink"/>
            <CategoryItem link="accessories" icon={<BiSolidWatch className="size-6"/>} title="Accessories"/>
            <CategoryItem link="beauty" icon={<GiLipstick className="size-6"/>} title="Beauty"/>
            <CategoryItem link="furniture" icon={<RiArmchairFill className="size-6"/>} title="Furniture"/>
            <CategoryItem link="fashion" icon={<GiPoloShirt className="size-6"/>} title="Fashion"/>
            <CategoryItem link="health" icon={<GiPill className="size-6"/>} title="Health"/>
            <CategoryItem link="stationary" icon={<GiNotebook className="size-6"/>} title="Stationary"/>
        </div>
    )
}

export default MarketCategory
