import { IoIosArrowBack } from "react-icons/io"

function AccountHeader() {
    return (
        <div>
            <div className="flex pt-4 items-center justify-between mx-4">
            <IoIosArrowBack className="size-5"/>
            <button className="">Logout</button>
            </div>
        </div>
    )
}

export default AccountHeader
