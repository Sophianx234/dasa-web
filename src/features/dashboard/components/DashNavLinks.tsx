import { useAppSelector } from "@/features/utils/hooks"
import DashNavLink from "./DashNavLink"
import { signupCredentialsExtended } from "@/services/apiServices"

function DashNavLinks() {
    const {user} = useAppSelector(store=>store.nav)
    const userInfo = user as signupCredentialsExtended
    return (
        <>
               <DashNavLink title="Account" link={`/dashboard/account/${userInfo._id}`}/>
               <DashNavLink title="Market" link=""/>
               <DashNavLink title="Anonymous" link="/dashboard/anonymous/write"/>
               <DashNavLink title="Gallery" link="/dashboard/gallery"/>
               
               
   </>
  
    )
}

export default DashNavLinks
