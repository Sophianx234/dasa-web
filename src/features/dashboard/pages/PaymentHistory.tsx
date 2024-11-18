import { RiMoneyDollarCircleLine } from "react-icons/ri"
import PaymentHistoryItem from "../components/PaymentHistoryItem"

function PaymentHistory() {
    return (
        <>
            <h1 className="dash-title text-center pt-6 pb-3">Transaction History</h1>
        <div className="flex items-center justify-center  mx-3 ">
            <table className=" w-full border-collapse border-none  ">
  <thead className="bg-dasadeep text-[#33312e]  ">
    <tr className="border text-lg font-mulish font-bold">
      <th className="w-12">Name</th>
      <th className="w-12">Date</th>
      <th className="w-12">Amount</th>
      <th className="w-12">Status</th>

    </tr>
  </thead>
  <tbody>
    <PaymentHistoryItem/>
    <PaymentHistoryItem/>
    <PaymentHistoryItem/>
    <PaymentHistoryItem/>
    <PaymentHistoryItem/>
    <PaymentHistoryItem/>
    
  </tbody>
</table>
        </div>
        </>
    )
}

export default PaymentHistory
