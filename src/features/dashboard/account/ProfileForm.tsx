import { Controller, useForm } from "react-hook-form";
import { FaArrowLeftLong, FaRegUser } from "react-icons/fa6";
import { IoIosPhonePortrait } from "react-icons/io";
import { IoMailOutline } from "react-icons/io5";
import AccountFormInput from "./AccountFormInput";
import Button from "./Button";
import ControllerError from "./ControllerError";
import { DatePicker } from "./DatePicker";
import ProfileImage from "./ProfileImage";
import RadialProgress from "./RadialProgress";
import SelectButton from "./SelectButton";


function ProfileForm() {
  const universityOfGhanaHostels = [
    "Legon Hall",
    "Akuafo Hall",
    "Mensah Sarbah Hall",
    "Commonwealth Hall",
    "Volta Hall",
    "Jean Nelson Aka Hall",
    "Alexander Kwapong Hall",
    "Hilla Limann Hall",
    "Elizabeth Frances Sey Hall",
    "Nelson Mandela Hall",
    "James Topp Nelson Yankah Hall",
    "African Union Hall (Pentagon)",
    "Evandy Hostel",
    "Bani Hostel",
    "TF Hostel",
    "Jubilee Hall",
    "Korang Hall",
    "Lashibi Hall",
  ];
  const {control,register, handleSubmit, formState: {errors}} = useForm()

  const onSubmit = (data:unknown) => console.log(data)
  
  return (
    <div className="">
      <div className="py-4 px-2 bg-dasalight  font-bold">
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
        
          <ProfileImage />

      <form className="shadow-md bg-white rounded-md  mx-2 pt-2" onSubmit={handleSubmit(onSubmit)}>
          <div className="space-y-2 mx-3 ">
            <AccountFormInput type="text" register={register} 
            iconBorder={true}
            inputName="name" placeholder="name" errMsg="must enter name" icon={<FaRegUser className="opacity-80"/>}/>
            <AccountFormInput type="email" register={register} inputName="email" placeholder="email" 
            iconBorder={true}
            errMsg="must enter name" icon={<IoMailOutline/>}/>
            <AccountFormInput type="tel" register={register} iconBorder={true} inputName="phone" placeholder="number" errMsg="please enter number" icon={<IoIosPhonePortrait/>}/>
            
            <Controller
        name="birthDate"
        rules={{required:'Please pick a day '}}
        control={control}
         defaultValue=''// Set the default value to an empty string
        render={({field}) => (
          <DatePicker field={field} />

        )}/>
        <ControllerError inputName="birthDate" err={errors}/>
            <Controller
        name="hostel"
        rules={{required:'Hostel is required'}}
        control={control}
         defaultValue=''// Set the default value to an empty string
        render={({field}) => (
          <SelectButton
            
             // Pass register
             field={field}
            options={universityOfGhanaHostels}
            theme="Select Hall"
          />
        )}
      />
      <ControllerError inputName="hostel" err={errors}/>

          </div>
          <div className="mx-3 pt-4 pb-6 sticky bottom-0">

          <Button desc="Save changes " />
          </div>
      </form>
    </div>
  );
}

export default ProfileForm;
