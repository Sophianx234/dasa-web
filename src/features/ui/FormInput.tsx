import { ReactElement } from "react";
import {
  FieldValues,
  Path,
  UseFormRegister
} from "react-hook-form";
import { setAnnex } from "../slices/userSlice";
import { useAppDispatch } from "../utils/hooks";

export type formInputProps<T extends FieldValues> = {
  icon: ReactElement;
  type?: string;
  form?: string;
  placeholder: string;
  addClass?: string;
  style?: string;
  register: UseFormRegister<T>;
  inputName: Path<T>;
};
export type hallProps = {
  name: string;
  type: string;
  description: string;
  style: string;
};
function FormInput<T extends FieldValues>({
  icon,
  type,
  placeholder,
  addClass,
  style,
  inputName,
  register, 
}: formInputProps<T>) {
  const universityOfGhanaHostels = [
    {
      name: "Legon Hall",
      type: "Traditional Hall",
      description:
        "Offers single and shared rooms with a central location ideal for socializing.",
    },
    {
      name: "Legon Hall Annexes",
      type: "Annex",
      description:
        "Additional accommodations part of Legon Hall, with similar amenities and shared rooms.",
    },
    {
      name: "Akuafo Hall",
      type: "Traditional Hall",
      description:
        "Affordable shared and single rooms with close access to campus facilities.",
    },
    {
      name: "Akuafo Hall Annexes",
      type: "Annex",
      description:
        "Provides extra capacity for Akuafo Hall, maintaining the same vibrant community.",
    },
    {
      name: "Commonwealth Hall",
      type: "Traditional Hall",
      description: "Male-only hall known for its spirited traditions.",
    },
    {
      name: "Volta Hall",
      type: "Traditional Hall",
      description: "Female-only hall offering a quieter environment.",
    },
    {
      name: "Mensah Sarbah Hall",
      type: "Traditional Hall",
      description:
        "Known for its community and proximity to lecture halls and amenities.",
    },
    {
      name: "Mensah Sarbah Hall Annexes",
      type: "Annex",
      description:
        "Additional rooms as part of Mensah Sarbah Hall, providing extra capacity.",
    },
    {
      name: "International Students Hostel (ISH)",
      type: "Private Hostel",
      description:
        "Offers privacy and modern facilities, catering mainly to international students.",
    },
    {
      name: "Jubilee Hall",
      type: "Private Hostel",
      description: "Provides relatively modern amenities for students.",
    },
    {
      name: "Valco Hostel",
      type: "Private Hostel",
      description:
        "Comfortable living space with additional facilities like study areas.",
    },
    {
      name: "UGEL Hostels (Pentagon)",
      type: "UGEL Hostel",
      description:
        "Managed by the University of Ghana Enterprise Limited, offering modern accommodation options for students.",
    },
  ];
  const dispatch = useAppDispatch();

  return (
    <div className={`flex  items-center relative ${addClass}`}>
      {icon}
      {type !== "select" ? (
        <input
          type={type}
          placeholder={placeholder}
          className={`py-2 pl-7 ${style} rounded-sm px-1 font-poppins h-full w-full outline-none focus:outline-offset-1 focus:outline-orange-300 `}
          {...register(inputName,{})}
        required />
      ) : (
        <select
          onChange={(e) => dispatch(setAnnex(e.target.value))}
          name=""
          id=""
          className={`indent-6 font-poppins h-full w-full text-gray-400 ${style}`}
        >
          <option value="">Select hall</option>
          {universityOfGhanaHostels &&
            universityOfGhanaHostels.map((hall) => (
              <option value={hall.type}>{hall.name}</option>
            ))}
        </select>
      )}
    </div>
  );
}

export default FormInput;
