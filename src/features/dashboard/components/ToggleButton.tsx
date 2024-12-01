import { useState } from "react";
import { Link } from "react-router-dom";

function ToggleButton() {
  const [togglePayment, setTogglePayment] = useState<
    "payment" | "history" | null
  >("payment");
  return (
    <div className=" flex items-center justify-center  ">
      <div className=" w-full  rounded-full font-Montserrat font-semibold flex items-center justify-center bg-gray-100 overflow-hidden relative mx-4">
        <div className="flex justify-between w-full   ">
          <Link to='form'
            onClick={() => setTogglePayment("payment")}
            className={`  py-3  px-4 rounded-full flex items-center justify-center text-center w-full ${
              togglePayment == "payment" && "bg-dasadeep"
            }`}
          >
            Payment
          </Link>
          <Link to='history'
            onClick={() => setTogglePayment("history")}
            className={`py-3 px-6 rounded-full  w-full transition-all flex justify-center ${
              togglePayment == "history" && "bg-dasadeep"
            }`}
          >
            History
          </Link>

        
        </div>
      </div>
    </div>
  );
}

export default ToggleButton;
