import { FaArrowLeftLong, FaUser } from "react-icons/fa6";
import ProfileImage from "./ProfileImage";
import RadialProgress from "./RadialProgress";
import AccountFormInput from "./AccountFormInput";
import { useForm } from "react-hook-form";

function ProfileForm() {
  const {register, handleSubmit} = useForm()
  return (
    <div>
      <div className="py-4 px-2 bg-dasalight font-bold">
        <div className="flex items-center gap-2">
          <FaArrowLeftLong /> Edit Profile
        </div>
      </div>
        <div className="flex items-center justify-center mt-4 shadow-md py-4 px-3 rounded-md mx-2">
          <div>
            <h1 className="font-bold font-Montserrat">You only need 20% more!</h1>
            <p className="font-poppins text-sm">Complete your data, and get access to exclusive DaSA events.</p>
          </div>
          <div>
      <RadialProgress/>
          </div>
        </div>
      <form>
        
          <ProfileImage />
          <div>
            <AccountFormInput type="text" register={register} inputName="name" placeholder="name" errMsg="must enter name" icon={<FaUser/>}/>
            <AccountFormInput type="email" register={register} inputName="email" placeholder="email" errMsg="must enter name" icon={<FaUser/>}/>
            <AccountFormInput type="tel" register={register} inputName="phone" placeholder="number" errMsg="please enter number" icon={<FaUser/>}/>
          </div>
      </form>
    </div>
  );
}

export default ProfileForm;
