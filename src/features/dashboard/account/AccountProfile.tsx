import { useGetUser } from "@/features/utils/hooks"
import { userType } from "@/services/apiServices"
import { IoIosArrowForward } from "react-icons/io"
import { Link } from "react-router-dom"

function AccountProfile() {
    const {data,isLoading} = useGetUser()
    if(isLoading) return <>loading</>
    const {user} = data as userType
    return (
        <div className="">
            <div>
                <div className="flex justify-center">
            <div className="bg-dasalight w-fit   rounded-full overflow-hidden ">

            <img src={user.profileImage} alt="profile-icon-x" className="  object-cover size-24"/>
            </div>
                </div>
                <div className="pb-2 text-center  " >
                    <h1 className="font-medium">{user.username}</h1>
                    <p className="text-center text-sm">{user.email}</p>
                </div>
                <Link to={`profile`} className="flex justify-center">

                <div className="flex items-center  space-x-1 mt-1 justify-center bg-dasadeep w-fit px-3 py-2 rounded-3xl text-[#332b22] font-bold">
                    <p>
                Edit profile</p> <IoIosArrowForward className="size-4"/></div>
                </Link>
            </div>
        </div>
    )
}

export default AccountProfile
