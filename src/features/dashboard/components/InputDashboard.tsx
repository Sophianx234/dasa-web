import React, { ReactElement } from "react";
import { useForm } from "react-hook-form";
import { FaRegUser } from "react-icons/fa6";
export type inputDashboardProps = React.InputHTMLAttributes<HTMLInputElement> & {
    state: string;
    icon: ReactElement ,
    type: string
    
  };
  
function InputDashboard({state,icon,type, ...rest}:inputDashboardProps) {
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
      
    
    const {
        register,
        formState: { errors },
      } = useForm();
      if(type==='input')
    return (
    <div className="relative rounded-lg overflow-hidden">
            <input className="border py-3 h-full w-full indent-16 "  {...rest} {...register('state')} />
            <div>

            {errors.state && <p>{state} is required.</p>}
            </div>
            <div className="absolute top-0 bottom-0 flex items-center  justify-center bg-dasalight w-12">
            {icon}
            </div>
    </div>
        
    )
    if(type=='select')
        return (
    <div className="relative rounded-lg overflow-hidden">

            <select {...register('hall')}   name="" id="" className="border py-3 h-full w-full indent-16 ">
            <option className="text-gray-400" >Select Hall </option>
            {universityOfGhanaHostels.map(hostel=><option  value={hostel} key={hostel}>{ hostel}</option>)}
        </select>
        <div className="absolute top-0 bottom-0 flex items-center  justify-center bg-dasalight w-12">
            {icon}
            </div>
    </div>
            )
}

export default InputDashboard
