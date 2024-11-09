import { FaArrowRight } from "react-icons/fa6"

function BriefAbout() {
    return (
        <div className="flex justify-center flex-col items-center py-14 space-y-2 px-4 border-b-dasalight border-b-2 ">
            <h1 className="font-Montserrat font-bold">About DaSA</h1>
            <div className="flex flex-col justify-center items-center space-y-3">

            <p className="text-center text-sm leading-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae quasi aspernatur ea unde possimus eveniet magnam maiores ad culpa iusto in enim, nostrum repellendus amet illo sit voluptas? Quibusdam, nulla. Nihil saepe voluptatibus perspiciatis laborum at ab fuga recusandae unde?</p>
            <button className="bg-dasalight px-3 py-2 rounded-2xl font-semibold text-[#33312e] text-sm flex items-center gap-2 hover-primary">Read More
            <FaArrowRight/>
            </button>
            </div>
        </div>
    )
}

export default BriefAbout
