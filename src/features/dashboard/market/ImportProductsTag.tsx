import { IoMdClose } from "react-icons/io"
import { IoFastFoodOutline } from "react-icons/io5"

function ImportProductsTag() {
    return (
        <div className="flex relative mb-2">
        <div className="flex items-center gap-2">
          <div className="shadow-slate-50 border px-3 h-full flex items-center rounded-lg bg-dasalight">

          <IoFastFoodOutline className="size-8"/>
          </div>
          <div>
            <h1 className="font-bold ">Import products</h1>
            <p className="text-xs font-semibold tracking-tighter">Upload item images  to list  your products on <br />DaSA Market Center</p>
          </div>

        </div>

        <IoMdClose className="absolute right-0"/>
      </div>
    )
}

export default ImportProductsTag
