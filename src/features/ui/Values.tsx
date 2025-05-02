import { FaScaleUnbalanced } from "react-icons/fa6"
import { LiaSeedlingSolid, LiaSlideshare } from "react-icons/lia"
import { PiUsersFourFill } from "react-icons/pi"
import Value from "./Value"

function Values() {
    return (
        <div className="py-20 px-4 border-b-4 border-b-dasalight mb-5">
            <div className="text-center  pb-4">

            <h1 className="font-mulish font-bold text-2xl">What We Stand For</h1>
            <p>The values that unite us, inspire our journey, and guide our service to Dagbon and beyond.</p>
        </div>
        <div className="grid grid-cols-2 gap-y-10 pt-6">
    <Value icon={<FaScaleUnbalanced className="size-16 fill-[#ffd8a8]" />}
    desc="We uphold honesty, accountability, and transparency in all our actions, believing that true leadership is rooted in unwavering moral principles."
    title="Integrity"/>
    <Value icon={<LiaSlideshare className="size-16 fill-[#ffd8a8]" />}
    desc="We achieve more together. Through collaboration and mutual respect, we build strong relationships that empower every member to succeed."
    title=" Teamwork"/>
    <Value icon={<PiUsersFourFill className="size-16 fill-[#ffd8a8]" />}
    desc="We are one family, bonded by a shared heritage and purpose. Our strength lies in our unity and in building a community where everyone feels valued and supported.

"
    title="Unity & Community"/>
    <Value icon={<LiaSeedlingSolid className="size-16 fill-[#ffd8a8]" />}
    desc="We value lifelong learning and personal growth. With curiosity and innovation, we challenge ourselves to improve, adapt, and inspire others within and beyond the DaSA community."
    title="Growth & Learning"/>
        </div>
            </div>
    )
}

export default Values
