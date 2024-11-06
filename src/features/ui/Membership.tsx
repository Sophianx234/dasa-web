import { FaRegHandshake } from "react-icons/fa"

function Membership() {
    return (
        <section>
            <h1 className="font-bold text-center">Why join DaSA</h1>
            <div className="">
                <div className="pt-5 bg-[#ffd8a8] mx-2">
                    <div className="flex flex-col items-center">
                    <FaRegHandshake className="size-9" />
                    <h1 className="font-bold text-sm text-center"> Networking and mentorship opportunities.
                    </h1>
                    </div>
                    <div  className="text-center text-xs px-2">
                        Build lifelong connections with mentors and peers who support your journey. </div>
                </div>
            </div>
        </section>
    )
}

export default Membership
