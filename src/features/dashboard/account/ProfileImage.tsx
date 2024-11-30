import { CiEdit } from "react-icons/ci"

function ProfileImage() {
    return (
        <div className="mt-6  flex items-center justify-center">
        <div className="avatar relative online">
  <div className="w-24  rounded-full overflow-y-auto">
    <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
    <div className="bg-white shadow-md rounded-full absolute translate-x-16 -translate-y-8 px-2 py-2">

    <CiEdit className="size-5  "/>
    </div>
  </div>
</div>
        </div>
    )
}

export default ProfileImage
