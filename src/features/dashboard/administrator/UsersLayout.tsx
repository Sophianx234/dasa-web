import HeaderDashboard from "../components/HeaderDashboard"
import ControlHeader from "./ControlHeader"
import ControlPageTitle from "./ControlPageTitle"
import UserCardList from "./UserCardList"



function UsersLayout() {
  
  return (
    <div>
      <HeaderDashboard/>
      <ControlPageTitle title="Users"/>

      <UserCardList/>
      <div className="absolute bg-white -bottom-1 left-0 right-0 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)] pt-4">
        

      <ControlHeader/>
      </div>

    </div>
  )
}

export default UsersLayout
