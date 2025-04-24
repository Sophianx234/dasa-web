import { LucideReceiptText } from "lucide-react";
import { useState } from "react";
import { GoHistory } from "react-icons/go";
import { Link } from "react-router-dom";

function ToggleButton() {
  const [togglePayment, setTogglePayment] = useState<
    "payment" | "history" | null
  >("payment");
  return (
    <div className="   fixed shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)] -bottom-1 left-0 right-0 flex items-center justify-center z-40 bg-white py-3  ">
      <div className=" w-full   font-Montserrat font-semibold flex items-center justify-center  gap-12   ">
        

          <Link to='form'
            onClick={() => setTogglePayment("payment")}
            className={`text-sm flex flex-col items-center ${togglePayment==='payment' && 'scale-125'} transition-all duration-150`}
            >
        <LucideReceiptText className="size-7"/>
        <span>
            Payment

        </span>
          </Link>
            
            

          <Link to='history'
            onClick={() => setTogglePayment("history")}
            className={`text-sm flex flex-col items-center ${togglePayment=='history' && 'scale-125'}`}
            >
              <GoHistory className="size-7"/>
            <span>History</span>
          </Link>
            

        
        </div>
      
    </div>
  );
}

export default ToggleButton;
