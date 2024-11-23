import { IoIosArrowForward } from "react-icons/io"

function AccountProfile() {
    return (
        <div className="">
            <div>
                <div className="flex justify-center">
            <div className="bg-dasalight w-fit px-3 py-3 rounded-full overflow-hidden">

            <img src="https://i.ibb.co/Mnn5KD5/profile-icon-x.png" alt="profile-icon-x" className="w-16"/>
            </div>
                </div>
                <div className="pb-2 text-center  " >
                    <h1 className="font-medium">Damian Parker</h1>
                    <p className="text-center text-sm">damx4336969@gmail.com</p>
                </div>
                <div className="flex justify-center">

                <div className="flex items-center  space-x-1 mt-1 justify-center bg-dasadeep w-fit px-3 py-2 rounded-3xl text-[#332b22] font-bold">
                    <p>
                Edit profile</p> <IoIosArrowForward className="size-4"/></div>
                </div>
            </div>
        </div>
    )
}

export default AccountProfile
