import { Path, UseFormRegister } from "react-hook-form";
import { GiReceiveMoney } from "react-icons/gi";
import { paymentFormValues } from "./PaymentForm";
export type planTypeItemProps<T extends paymentFormValues> = {
    planType: string,
    planPackage: string,
    planDesc: string,
    price: number,
    register: UseFormRegister<T>;
    

}
function PlanTypeItem<T extends paymentFormValues>({planType,planPackage,price,planDesc,register}:planTypeItemProps<T>) {
    /* const [, setToggleRadio] = useState(false)
    function handleSelection(){
        setToggleRadio(toggle=>!toggle)
    } */
    return (
        <div >
            <div className=" " >
                <div className={` border px-4 rounded-lg
                pb-2
                 group`}>
                    <div className="grid grid-cols-[1fr_1fr_1fr] items-center pt-2 pb-2 ">
                    <div className="flex items-center gap-3 ">

                    <label >

                       <input  type="radio" className=' hidden peer ' {...register('price' as Path <T>) } value={+price}  />
                       <div className=" peer-checked border-4  size-6 rounded-full enabled peer-checked:border-dasadeep
                       group:peer-checked:border-dasadeep
                        "></div>
                    </label>

                       
                    <h1 className="font-bold font-mulish">{planType}</h1>
                    </div>
                    <div className="flex justify-center py-1 border rounded-full mx-2 px-2 ">
                    <p className=" text-[.65rem] font-bold leading-1">{planPackage} </p>
                    </div>
                    <p className="justify-self-end text-dasadeep font-mulish font-bold"> ₵{price}/sem</p>
                    </div>
                    <div className="text-smfont-poppins  grid grid-cols-[.2fr_2fr] ">
                    <p className="text-sm font-mulish font-medium col-span-2  ">{planDesc}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PlanTypeItem
