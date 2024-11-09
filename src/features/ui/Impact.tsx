import CountUp from 'react-countup';
function Impact() {
    return (
        <div className='py-10 bg-dasalight space-y-2'>
            <h1 className='text-xl text-center font-mulish font-bold '>
                Our impact in numbers
            </h1>

            <div className='flex items-center gap-10 justify-center '>
                <div className='flex flex-col '>

               <p className='text-center font-Montserrat font-bold text-xl text-[#33312e]'><span><CountUp start={0}  end={100} duration={10} /></span>M</p>
               <p className='font-mulish'>Messages sent</p> 
                </div>
                <div>

               <p className='text-center font-Montserrat  font-bold text-xl text-[#33312e]'><span><CountUp start={0} duration={10}  end={100} /></span>+</p>
               <p className='font-mulish'>Active users</p>
                </div>
            </div>
        </div>
    )
}

export default Impact
