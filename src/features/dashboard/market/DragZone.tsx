import React, { ReactElement, useCallback, useState } from "react";
import { FileRejection, useDropzone } from "react-dropzone";
import { IoMdClose } from "react-icons/io";
export type extendFile = File & {
  preview: string;
};

function DragZone() {
  const [files, setFiles] = useState<extendFile[]>([]);
  const imgs = ["https://i.ibb.co/5T0GmMy/sneaker-2.png","https://i.ibb.co/F7K9fjg/sneaker-3.png","https://i.ibb.co/L5Z1hNM/sneaker-4.png","https://i.ibb.co/PcPBVyC/sneaker-1.jpg"
  ]

  const onDrop = useCallback(
    (acceptedFiles: File[], rejectedFiles: FileRejection[]) => {
      // Do something with the files
      console.log(acceptedFiles);
      const validFiles = acceptedFiles.map((file) =>
        Object.assign(file, {
          preview: URL.createObjectURL(file),
        })
      );
      setFiles(validFiles);
      if (rejectedFiles.length > 0)
        return alert("Some files were rejected due to validation errors!");
    },
    []
  );
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  const renderPreviews = () =>
    files?.map((file) => (
      <div key={file?.name}>
        <div className="relative   ">
          <IoMdClose className="absolute left-0" />
          <img
            src={file?.preview}
            alt={file.name}
            className="size-44 object-cover object-center "
          />
          <p className="text-center text-xs tracking-tight">
            {file.name.split(".")[0]}
          </p>
        </div>
      </div>
    ));

  return (
    <div className="fixed bg-purple-50  top-0 bottom-0 left-0 right-0  flex justify-center items-center  z-40">

    <div {...getRootProps()} className="z-50  mx-4  ">
      <div className="border ,ax-w-screen  py-7 rounded-lg ">

      <div className="flex -space-x-3 justify-center pb-2 ">
        {imgs.map(img=><img className="size-14   rounded-full" src={img} key={img}/>)}
      </div>
      <input {...getInputProps()} />
      {isDragActive ? (
        <p className="text-center font-bold font-mulish text-sm">Drop the files here ...</p>
      ) : (
        <p className="text-center font-bold font-mulish text-sm">Drag 'n' drop some <span className="underline underline-offset-2 "> products</span>  here, <br /> or click to select files</p>
      )}
      <div className="text-center pt-3">

      <button className="hover-primary bg-dasadeep px-2 py-1">Select Files</button>
      </div>
      </div>
      <div className="grid grid-cols-4 mx-2 gap-3">{renderPreviews()}</div>
      </div>
    </div>
  );
}

export default DragZone;
