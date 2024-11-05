import { FaArrowRight } from "react-icons/fa";

function InputEmail() {
  return (
    <div className="flex justify-center pb-4 relative">
      <input
        type="email"
        placeholder="@   Enter email address"
        className="border-2 w-[20rem]  px-10  py-2   "
      />

      <div className="   bg-[#FEF3E7] flex absolute  translate-x-[32%] mt-1 top-0  items-center  gap-2 px-6 py-2 font-rethink text-sm ">
        Get instant acess{" "}
        <span>
          <FaArrowRight />
        </span>
      </div>
      
    </div>
  );
}

export default InputEmail;
