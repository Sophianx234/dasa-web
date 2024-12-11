import React, {
  ChangeEvent,
  FormEvent,
  ReactElement,
  useCallback,
  useState,
} from "react";
import { FileRejection, useDropzone } from "react-dropzone";
import { IoMdClose } from "react-icons/io";
import ImportProductsTag from "./ImportProductsTag";
import toast, { Toaster } from "react-hot-toast";
import { TiUploadOutline } from "react-icons/ti";
import { useAppDispatch } from "@/features/utils/hooks";
import UploadProductImg from "./uploadProductImg";
export type extendFile = File & {
  preview: string;
};

function DragZone() {
  const [files, setFiles] = useState<extendFile[] | null>();
  const [imgName,setImgName] = useState<string | null>()
  const notify = () => toast("Upload Complete");
  const imgs = [
    "https://i.ibb.co/5T0GmMy/sneaker-2.png",
    "https://i.ibb.co/F7K9fjg/sneaker-3.png",
    "https://i.ibb.co/L5Z1hNM/sneaker-4.png",
    "https://i.ibb.co/PcPBVyC/sneaker-1.jpg",
  ];
  function handleRename(e:ChangeEvent<HTMLInputElement>){
    setImgName(e.target.value)

  }
  function handleRemoveImage(id: number) {
    const filteredImgs = files?.filter((_, i) => i !== id);
    setFiles(filteredImgs);

    console.log("filtered", filteredImgs);
    console.log("clicked");
  }

  const onDrop = useCallback(
    (acceptedFiles: File[], rejectedFiles: FileRejection[]) => {
      // Do something with the files
      console.log(acceptedFiles);
      const validFiles = acceptedFiles.map((file) =>
        Object.assign(file, {
          preview: URL.createObjectURL(file),
        })
      );
      setFiles((file) => [...(file || []), ...validFiles]);
      if (rejectedFiles.length > 0)
        return alert("Some files were rejected due to validation errors!");
    },
    []
  );
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  const renderPreviews = () =>
    files?.map((file, id) => (
      <div key={file?.name}>
        <UploadProductImg file={file} handleRename={handleRename} imgName={imgName}/>
      </div>
    ));

  return (
    <div className="fixed bg-white  -top-1 bottom-0 left-0 right-0  flex   pt-12  z-50 overflow-y-scroll">
      <div className="z-50  mx-4 w-screen  ">
        <ImportProductsTag />
        <div className=" border-2 border-dotted  mb-4  py-7 rounded-lg ">
          <div className="flex -space-x-3 justify-center pb-2 ">
            {imgs.map((img) => (
              <img className="size-14   rounded-full" src={img} key={img} />
            ))}
          </div>
          <div {...getRootProps()}>
            <input {...getInputProps()} />
            {isDragActive ? (
              <p className="text-center font-bold font-mulish text-sm">
                Drop the files here ...
              </p>
            ) : (
              <p className="text-center font-bold font-mulish text-sm">
                Drag 'n' drop some{" "}
                <span className="underline decoration-2 underline-offset-2  decoration-dasadeep">
                  {" "}
                  products
                </span>{" "}
                here, <br /> or click to select files
              </p>
            )}
            <div className="text-center pt-3">
              <button className="hover-primary bg-dasadeep rounded-lg font-bold duration-150 px-2 py-1">
                Select Files
              </button>
            </div>
          </div>
        </div>
        <div className="h-fit  pb-10">

        <div className="grid grid-cols-4 mx-2 gap-3">{renderPreviews()}</div>
        {files && files?.length > 0 && (
          <div className="flex justify-center  pt-4">
            <Toaster position="top-center" />
            <button
              onClick={notify}
              className="text-sm font-bold bg-dasadeep hover-primary  px-3 py-1 rounded-lg flex items-center gap-2 justify-center"
            >
              Upload
              <TiUploadOutline className="size-6" />
            </button>
          </div>
        )}
      </div>
    </div>
</div>
  );
}

export default DragZone;
