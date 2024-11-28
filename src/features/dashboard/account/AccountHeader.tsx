import { IoIosArrowBack } from "react-icons/io"

function AccountHeader() {
    return (
        <div className="sticky mb-8  left-0 right-0 top-0 py-2 pb-6  shadow-md bg-white">
            <div className="flex pt-4 items-center justify-between mx-4">
            <IoIosArrowBack className="size-5"/>
            <button className="">Logout</button>
            </div>
        </div>
    )
}

export default AccountHeader
