import { useState } from "react"

function ToggleButton() {
    const [togglePayment,setTogglePayment ] = useState<'payment'|'history' |null>('payment')
    return (
        <div className=" flex items-center justify-center ">
            <div className="w-fit  rounded-full font-Montserrat font-semibold flex items-center justify-center bg-gray-100">

            <div className="flex -space-x-4">

                <button onClick={()=>setTogglePayment('payment')} className={`  py-3  px-4 rounded-full ${togglePayment=='payment'&&"bg-dasadeep"}`}>Payment</button>
                <button onClick={()=>setTogglePayment('history')} className={`py-2 px-6 rounded-full transition-all ${togglePayment=='history'&&"bg-dasadeep"}`}>History</button>
            </div>
            </div>
        </div>
    )
}

export default ToggleButton
