import { FaArrowRight } from "react-icons/fa6"
import { Link } from "react-router-dom"

function BriefAbout() {
    return (
        <div className="flex justify-center flex-col items-center py-14 space-y-2 px-4 border-b-dasalight border-b-2 ">
            <h1 className="font-Montserrat font-bold">About DaSA</h1>
            <div className="flex flex-col justify-center items-center space-y-3">

            <p className="text-center text-sm leading-5">The Dagbon Students Association (DaSA), University of Ghana branch is a vibrant community that brings together students from Dagbon and beyond to celebrate our rich heritage, foster unity, and empower academic and personal growth.
</p>
            <Link to='/homepage/about' className="bg-dasalight px-3 py-2 rounded-2xl font-semibold text-[#33312e] text-sm flex items-center gap-2 hover-primary">Read More
            <FaArrowRight/>
            </Link>
            </div>
        </div>
    )
}

export default BriefAbout
