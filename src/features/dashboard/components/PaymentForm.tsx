import { useForm } from "react-hook-form"
import PlanTypeItem from "./PlanTypeItem"
import InputDashboard from "./InputDashboard"
import { PiBuildingApartmentLight } from "react-icons/pi"
import { LuContact2 } from "react-icons/lu"
import { FaRegUser } from "react-icons/fa6"
import PaystackPop from '@paystack/inline-js'
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
        const onSubmit = (data: any) => {
          console.log(data)
          initializePayment(data);
        };
      
        const initializePayment = (data: any) => {
          const PaystackPop = window?.PaystackPop;
      
          if (!PaystackPop) {
            alert("Paystack library is not loaded");
            return;
          }
      
          const paystack = new PaystackPop();
          paystack.newTransaction({
            key: 'pk_test_47942aac0ea9216a4c98d03ca6dddd51ef89b627', // Replace with your Paystack public key
            email: data.email,
            amount: data.amount , // Paystack expects the amount in kobo
            currency: 'NGN',
            callback: (response: any) => {
              alert(`Payment complete! Reference: ${response.reference}`);
              // Handle successful payment here (e.g., notify backend, update UI)
            },
            onClose: () => {
              alert('Transaction was not completed.');
            },
          });
        };
    return (
      <>
      <div className="mx-4 mt-10 py-2 rounded-md text-center bg-dasalight shadow-sm -space-y-7">

      <h1 className="dash-title ">Pay Dues</h1>
      <p className="leading-5 font-Montserrat opacity-80 font-semibold sticky  ">Unity <span className="font-bold text-6xl ">.</span> Growth <span className="font-bold text-6xl ">.</span> Impacts</p>
      </div>
        <form  className='flex  pb-10  justify-center  shadow-lg  mt-10 mx-4 '  onSubmit={handleSubmit(onSubmit)}>
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
            register = {register}
            
            planType='Business'
            planPackage='Dues'
            planDesc='Covers only the payment of annual DaSA dues, ensuring active membership in the association.'/>
            <PlanTypeItem 
            price={32}
            register = {register}
            
            planType='Standard'
            planPackage='Dues+ T-shirt'
            planDesc='Includes payment of DaSA dues and a DaSA-branded T-shirt to show your pride.'/>
            <PlanTypeItem 
            register = {register}
            
            price={32}
            planType='Premium'
            planPackage='Dues + Suveniers'
            planDesc='Includes payment of DaSA dues and all souvenirs, offering the complete membership experience.'/>
        </div>
     </div>
      
      <input type="submit" className='bg-dasalight rounded-md py-2 font-bold text-[#33312e]' />
      </div>
    </form>
    <p className="text-center text-sm mx-4 mt-6 pb-8 ">Your contribution, no matter how small, helps strengthen our bond and build a brighter future for all members of DaSA</p>
            </>

    )
}

export default PaymentForm
