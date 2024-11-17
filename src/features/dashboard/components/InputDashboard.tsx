import React, { ReactElement } from "react";
import { FieldError, useForm, UseFormRegister } from "react-hook-form";
import { FaRegUser } from "react-icons/fa6";
export type inputDashboardProps = React.InputHTMLAttributes<HTMLInputElement> & {
    state: string;
    icon: ReactElement ,
    type: string,
    name?: string,
    register: UseFormRegister<any>,
    errors: FieldError<any>
  };
  
function InputDashboard({state,icon,type,register,errors, ...rest}:inputDashboardProps) {
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
      console.log(errors[state])
     

      if(type==='input')
    return (
<>
    <div  className="relative rounded-lg overflow-hidden flex flex-col ">
            <input type="text"   className="border py-3 h-full w-full indent-16 focus:outline-dasadeep focus:outline-2 "  {...rest}   {...register(state,{required:`${state} is required`})} name={state} id={state} />
            <div className="absolute top-0 bottom-0 flex items-center  justify-center bg-dasalight w-12">
            {icon}
            </div>
    </div>
            <div className="pl-10 bg-dasalight rounded-lg font-Montserrat font-medium text-[#191817]">

{errors?.[state]?.message}
            
            </div>
</>
        
    )
    if(type=='select')
        return (
    <div className="relative rounded-lg overflow-hidden">

            <select required {...register('hall')}    className="border py-3 h-full w-full indent-16 text-zinc-400 focus:outline-dasadeep focus:outline-2 ">
            <option className="" > Select Hall </option>
            {universityOfGhanaHostels.map(hostel=><option  value={hostel} key={hostel}>{ hostel}</option>)}
        </select>
        <div className="absolute top-0 bottom-0 flex items-center  justify-center bg-dasalight w-12">
            {icon}
            </div>
            <div className="pl-10 bg-dasalight rounded-lg font-Montserrat font-medium text-[#191817]">

{errors?.[state]?.message}
            
            </div>
    </div>
            )
}

export default InputDashboard
