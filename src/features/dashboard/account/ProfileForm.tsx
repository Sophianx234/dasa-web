import { FaArrowLeftLong } from "react-icons/fa6";
import ProfileImage from "./ProfileImage";
import RadialProgress from "./RadialProgress";

function ProfileForm() {
  return (
    <div>
      <div className="py-4 px-2 bg-dasalight font-bold">
        {" "}
        <div className="flex items-center gap-2">
          <FaArrowLeftLong /> Edit Profile
        </div>
      </div>
      <form>
        <div className="flex items-center justify-center mt-4 shadow-md py-4 px-3 rounded-md mx-2">
          <div>
            <h1 className="font-bold font-Montserrat">You only need 20% more!</h1>
            <p className="font-poppins text-sm">Complete your data, and get access to exclusive DaSA events.</p>
          </div>
          <div>
      <RadialProgress/>
          </div>
        </div>
        <div>
          <ProfileImage />
        </div>
      </form>
    </div>
  );
}

export default ProfileForm;
