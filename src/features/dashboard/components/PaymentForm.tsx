import { useForm } from "react-hook-form"
import PlanTypeItem from "./PlanTypeItem"
import InputDashboard from "./InputDashboard"
import { PiBuildingApartmentLight } from "react-icons/pi"
import { LuContact2 } from "react-icons/lu"
import { FaRegUser } from "react-icons/fa6"
import FieldError from "./FieldError"

type Inputs = {
    example: string
    exampleRequired: string
  }
function PaymentForm() {
        const {
          register,
          handleSubmit,
          formState: { errors },
        } = useForm<Inputs>()
        const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data)
    return (
        <form  className='flex  pb-10  justify-center  shadow-lg pt-2 mt-10 mx-4 '  onSubmit={handleSubmit(onSubmit)}>
      <div className=' w-full mx-6 flex flex-col space-y-2 '>
     <InputDashboard
     errors={errors}
     register={register}
     type='input' placeholder='First Name' state='firstName' name='firstName' icon={<FaRegUser className="fill-[#4c4945a1] "/>}/>
     <InputDashboard
     errors={errors}
     
     
     register={register} placeholder='Last Name' type='input' state='lastName' icon={<FaRegUser className="fill-[#4c4945a1] "/>}/>
     
     <InputDashboard
     errors={errors} register={register} placeholder='Contact' type='input' state='contact' icon={<LuContact2 className="stroke-[#4c4945a1] "/>}/>
     <InputDashboard
     errors={errors} register={register} type='select' placeholder='Hall of residence' state='hall' icon={<PiBuildingApartmentLight className="fill-[#4c4945] "/>}/>

     <div className='pb-2'>
        <h1 className='font-mulish font-semibold pb-3 pt-5'>Plan type</h1>
        <div className='space-y-2'>
            <PlanTypeItem 
            price={25}
            planType='Business'
            planPackage='Dues'
            planDesc='Covers only the payment of annual DaSA dues, ensuring active membership in the association.'/>
            <PlanTypeItem 
            price={32}
            planType='Standard'
            planPackage='Dues+ T-shirt'
            planDesc='Includes payment of DaSA dues and a DaSA-branded T-shirt to show your pride.'/>
            <PlanTypeItem 
            price={32}
            planType='Premium'
            planPackage='Dues + Suveniers'
            planDesc='Includes payment of DaSA dues and all souvenirs, offering the complete membership experience.'/>
        </div>
     </div>
      
      <input type="submit" className='bg-dasalight rounded-md py-2 font-bold text-[#33312e]' />
      </div>
    </form>

    )
}

export default PaymentForm
