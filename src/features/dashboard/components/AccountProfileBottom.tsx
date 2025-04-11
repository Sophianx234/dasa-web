import { Link, useNavigate } from "react-router-dom"
import AvatarComponent from "./AvatarComponent"
import { useAppDispatch, useAppSelector } from "@/features/utils/hooks"
import { toggleSidebar } from "@/features/slices/navSlice"
import { signupCredentialsExtended } from "@/services/apiServices"

function AccountProfileBottom() {
  const dispatch = useAppDispatch()
  const navigate = useNavigate()
  const {user} = useAppSelector(store=>store.nav)
  const userInfo = user as signupCredentialsExtended
  function handleNavigation(){
    dispatch(toggleSidebar())
    navigate(`/dashboard/account/${userInfo._id}`)

  }
  return (
    <a onClick={handleNavigation} className="flex items-center space-x-2 pt-10 pb-10">
            <AvatarComponent />
            <div className="">
              <h1 className="font-bold font-mulish text-sm">{userInfo.firstName}</h1>
              <p className="text-xs">{userInfo.email}</p>
            </div>
          </a>
  )
}

export default AccountProfileBottom
