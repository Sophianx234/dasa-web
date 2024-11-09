import { FaScaleUnbalanced } from "react-icons/fa6"
import SVGLite from "./SVGLite"
import Value from "./Value"
import { PiUsersFourFill } from "react-icons/pi"
import { LiaSeedlingSolid, LiaSlideshare } from "react-icons/lia"

function Values() {
    return (
        <div className="py-20 px-4">
            <div className="text-center  pb-4">

            <h1 className="font-mulish font-bold text-2xl">What We Stand For</h1>
            <p>The pillars that strengthen our bond and fuel our ambitions</p>
        </div>
        <div className="grid grid-cols-2 gap-y-6 pt-6">
    <Value icon={<FaScaleUnbalanced className="size-16 fill-[#ffd8a8]" />}
    desc="loremLorem ipsum dolor sit amet consectetur adipisicing elit. Commodi et, odit quisquam sequi ratione alias"
    title="Integrity"/>
    <Value icon={<LiaSlideshare className="size-16 fill-[#ffd8a8]" />}
    desc="loremLorem ipsum dolor sit amet consectetur adipisicing elit. Commodi et, odit quisquam sequi ratione alias"
    title=" Teamwork"/>
    <Value icon={<PiUsersFourFill className="size-16 fill-[#ffd8a8]" />}
    desc="loremLorem ipsum dolor sit amet consectetur adipisicing elit. Commodi et, odit quisquam sequi ratione alias"
    title="Unity & Community"/>
    <Value icon={<LiaSeedlingSolid className="size-16 fill-[#ffd8a8]" />}
    desc="loremLorem ipsum dolor sit amet consectetur adipisicing elit. Commodi et, odit quisquam sequi ratione alias"
    title="Growth & Learning"/>
        </div>
            </div>
    )
}

export default Values
