import { RiMoneyDollarCircleLine } from "react-icons/ri"

function PaymentHistoryItem() {
    return (
        <tr className="text-center border-4 border-white text-sm  bg-dasalight font-semibold h-16">
      <td className=" "><RiMoneyDollarCircleLine className="size-12 ml-4   fill-[#4c4945] "/> </td>
      <td>Malcolm Lockyer</td>
      <td>₵1961</td>
      <td className="">Recieved</td>
    </tr>
    )
}

export default PaymentHistoryItem
