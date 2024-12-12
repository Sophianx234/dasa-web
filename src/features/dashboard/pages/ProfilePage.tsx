import { useAppSelector } from "@/features/utils/hooks"
import ProfileForm from "../account/ProfileForm"
import UploadImageForm from "../account/UploadImageForm"

function ProfilePage() {
    const {revealUploadProfile} = useAppSelector(store=>store.nav)
    return (
        <div className="bg-white">
           <ProfileForm/>
           {revealUploadProfile&&<UploadImageForm/>}
        </div>
    )
}

export default ProfilePage
