import { FaRegUser } from "react-icons/fa6";
import {
  IoLockClosedOutline,
  IoLockOpenOutline,
  IoMailOutline,
} from "react-icons/io5";
import { LuContact2 } from "react-icons/lu";
import { PiBuildingApartmentLight } from "react-icons/pi";
import { Link, useNavigate } from "react-router-dom";
import FormInput from "../ui/FormInput";
import { useAppSelector, useSignup } from "../utils/hooks";
import Select from "./Select";
import SVGLite from "./SVGLite";
import { SubmitHandler, useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import { Toaster } from "react-hot-toast";

export type signupFormValues = {
  firstName: string;
  lastName: string;
  course: string;
  hall: string;
  annex: string;
  email: string;
  contact: string;
  password: string;
  sex: string;
  confirmPassword: string;
};
function Form() {
  const { handleSubmit, register, watch } = useForm<signupFormValues>();
  const navigate = useNavigate();
  const isAnnex = useAppSelector((store) => store.user.isAnnex);

  const { handleSignup } = useSignup(navigate);
  const onSubmit: SubmitHandler<signupFormValues> = (
    data: signupFormValues
  ) => {
    console.log(data);
    handleSignup(data);
  };
  const [passwordMatchError, setPasswordMatchError] = useState<string | null>();
  const password = watch("password");
  const confirmPassword = watch("confirmPassword");
  useEffect(() => {
    if (confirmPassword && password !== confirmPassword) {
      setPasswordMatchError("Passwords do not match");
    } else {
      setPasswordMatchError(null);
    }
  }, [password, confirmPassword]);

  return (
    <div className="bg-dasalight  h-dvh pt-6 overflow-y-hidden ">
      <div className="px-4">
        <div>
          <h1 className="text-[#33312e] font-bold pb-2 text-3xl ">
            Let's get started
          </h1>
          <p className=" font-mulish text-sm pb-4  ">
            Create your DaSA account. Already <br /> registered?{" "}
            <Link
              to="/homepage/login"
              className="text-blue-600 font-bold  hover:underline italic"
            >
              Login here
            </Link>
          </p>
        </div>
        <Toaster position="top-center" />
        <form action="" onSubmit={handleSubmit(onSubmit)}>
          <div className="grid grid-cols-2 gap-x-5 gap-y-3">
            <FormInput
              type="text"
              register={register}
              inputName="firstName"
              placeholder="First name"
              style="bg-transparent border-b-2 border-b-dasadeep focus:outline-none "
              icon={<FaRegUser className="absolute left-2  " />}
            />

            <FormInput
              type="text"
              register={register}
              inputName="lastName"
              placeholder="Last name"
              style="bg-transparent border-b-2 border-b-dasadeep focus:outline-none "
              icon={<FaRegUser className="absolute left-2  " />}
            />

            <FormInput
              type="email"
              register={register}
              inputName="email"
              addClass="col-span-2"
              style="bg-transparent border-b-2 border-b-dasadeep focus:outline-none "
              placeholder="Enter your email address"
              icon={<IoMailOutline className="absolute left-2  " />}
            />

            <FormInput
              type="select"
              register={register}
              inputName="hall"
              placeholder="Hall of Residence "
              style="bg-transparent border-b-2 border-b-dasadeep text-xs"
              icon={<PiBuildingApartmentLight className="absolute left-2   " />}
            />

            {isAnnex === "Annex" || isAnnex === "UGEL Hostel" ? (
              <Select
                register={register}
                inputName="annex"
                type="select"
                style="bg-transparent border-b-2 border-b-dasadeep"
                placeholder={`${isAnnex}`}
                icon={
                  <PiBuildingApartmentLight className="absolute left-2   " />
                }
              />
            ) : null}

            <Select
              register={register}
              inputName="course"
              style="bg-transparent border-b-2 border-b-dasadeep text-sm "
              type="select"
              form="course"
              placeholder={`Course`}
              icon={<PiBuildingApartmentLight className="absolute left-2   " />}
            />

            <Select
              register={register}
              inputName="sex"
              style="bg-transparent border-b-2 border-b-dasadeep text-sm "
              type="select"
              form="gender"
              placeholder={`gender`}
              icon={<PiBuildingApartmentLight className="absolute left-2   " />}
            />

            <FormInput
              style="bg-transparent border-b-2 border-b-dasadeep focus:outline-none indent-2 "
              register={register}
              inputName="contact"
              type="tel"
              placeholder="Contact "
              addClass="col-span-2"
              icon={<LuContact2 className="absolute left-2   " />}
            />
            <FormInput
              register={register}
              inputName="password"
              style="bg-transparent border-b-2 border-b-dasadeep focus:outline-none indent-2 "
              type="password"
              placeholder="Password "
              addClass="col-span-2"
              icon={<IoLockClosedOutline className="absolute left-2   " />}
            />

            <FormInput
              type="password"
              style="bg-transparent border-b-2 border-b-dasadeep focus:outline-none  indent-2 "
              addClass="col-span-2"
              register={register}
              inputName="confirmPassword"
              placeholder="Confirm Password "
              icon={<IoLockOpenOutline className="absolute left-2   " />}
            />
          </div>
          {passwordMatchError && (
            <p className="bg-red-200 mt-2 py-2 px-2 w-full">
              {passwordMatchError}
            </p>
          )}
          <p className="pt-7 pb-5">
            By signing up, you acknowledge that you’ve read and accepted our{" "}
            <Link
              to="/terms"
              className="text-blue-950 font-bold hover:underline italic"
            >
              {" "}
              Terms of Service
            </Link>{" "}
            and{" "}
            <Link
              to="/policy"
              className="text-blue-950 font-bold hover:underline italic"
            >
              Privacy Policy.
            </Link>
          </p>
          <div className="text-center pb-6">
            <button className="w-full py-2 font-Montserrat font-bold  bg-dasadeep text-[#33312e] hover:bg-transparent border-2 border-transparent hover:border-dasadeep rounded-lg duration-150 transition-all">
              Signup
            </button>
          </div>
        </form>
      </div>
      <SVGLite type="sticks" />
    </div>
  );
}

export default Form;
