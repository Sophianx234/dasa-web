import { useForm } from 'react-hook-form';
import InputDashboard from './InputDashboard';
import { FaRegUser } from 'react-icons/fa6';
import { LuContact2 } from 'react-icons/lu';
import { PiBuildingApartmentLight } from 'react-icons/pi';
import PlanTypeItem from './PlanTypeItem';
import PaystackPop from '@paystack/inline-js'

function PaymentForm() {

  const {
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = data => console.log(data);
  const handlePay = () => {
    const paystack = new PaystackPop();
    paystack.newTransaction({
      key: 'pk_test_47942aac0ea9216a4c98d03ca6dddd51ef89b627', // Replace with your Paystack public key
      email: 'user@example.com',
      amount: 5000 * 100, // Amount in pesewas
      currency: 'GHS',
      callback: (response) => {
        alert(`Payment successful! Reference: ${response.reference}`);
      },
      onClose: () => {
        alert("Payment window closed");
      },
    });
  };
  return (
    <form  className='flex  pb-10  justify-center  shadow-lg pt-2 mt-10 mx-4 '  onSubmit={handleSubmit(onSubmit)}>
      <div className=' w-full mx-6 flex flex-col space-y-2 '>

     <InputDashboard
     type='input' placeholder='First Name' state='firstName' name='firstName' icon={<FaRegUser className="fill-[#4c4945a1] "/>}/>
     <InputDashboard placeholder='Last Name' type='input' state='lastName' icon={<FaRegUser className="fill-[#4c4945a1] "/>}/>
     <InputDashboard placeholder='Contact' type='input' state='contact' icon={<LuContact2 className="stroke-[#4c4945] "/>}/>
     <InputDashboard type='select' placeholder='Hall of residence' state='hall' icon={<PiBuildingApartmentLight className="stroke-[#4c4945] "/>}/>

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
  );
}

export default PaymentForm
