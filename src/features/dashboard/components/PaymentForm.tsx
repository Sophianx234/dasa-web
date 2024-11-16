import { useForm } from 'react-hook-form';
import InputDashboard from './InputDashboard';
import { FaRegUser } from 'react-icons/fa6';
import { LuContact2 } from 'react-icons/lu';
function PaymentForm() {

  const {
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <form className='flex   justify-center  shadow-lg pt-2 mt-10 mx-4 '  onSubmit={handleSubmit((data) => console.log(data))}>
      <div className=' w-full mx-6 flex flex-col space-y-2'>

     <InputDashboard placeholder='First Name' state='firstName' icon={<FaRegUser className="fill-[#4c4945a1] "/>}/>
     <InputDashboard placeholder='Last Name' type='input' state='lastName' icon={<FaRegUser className="fill-[#4c4945a1] "/>}/>
     <InputDashboard placeholder='Contact' type='input' state='contact' icon={<LuContact2 className="stroke-[#4c4945] "/>}/>
     <InputDashboard type='select' placeholder='Hall of residence' state='hall' icon={<LuContact2 className="stroke-[#4c4945] "/>}/>
      
      <input type="submit" />
      </div>
    </form>
  );
}

export default PaymentForm
