import { ReactElement } from "react"
import SVGLite from "./SVGLite"
type FormWrapperProps = {
  children: ReactElement
}
function FormWrapper({children}:FormWrapperProps) {
  return (
    <div className="flex flex-col overflow-hidden mx-4 items-center  h-dvh text-[60%] space-y-12 ">
      <div className="absolute top-1 overflow-hidden">
        <div className="overflow-x-hidden w-dvw">

        <SVGLite type="sticks" />
        </div>
      </div>
      <div className="   shadow-lg px-2 rounded-md border py-8  absolute top-16 w-[22rem]  ">
    {children}
      </div>
      <div className="absolute bottom-1">
      <div className="overflow-x-hidden w-dvw">

        <SVGLite type="sticks" />
      </div>
      </div>
    </div>
  )
}

export default FormWrapper
