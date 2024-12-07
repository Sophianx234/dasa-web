    import React, {ReactElement, useCallback, useState} from 'react'
    import {FileRejection, useDropzone} from 'react-dropzone'
import { IoMdClose } from 'react-icons/io'
    export type extendFile = File & {
        preview: string
    }
    function DragZone() {
        const [files, setFiles] = useState<extendFile[]>([])
 
  const onDrop = useCallback((acceptedFiles: File[], rejectedFiles: FileRejection[]) => {
    // Do something with the files
    console.log(acceptedFiles)
    const validFiles = acceptedFiles.map(file=>Object.assign(file,{
        preview: URL.createObjectURL(file)

    }))
    setFiles(validFiles)
if(rejectedFiles.length>0) return alert('Some files were rejected due to validation errors!')
        
    
  }, [])
  const {getRootProps, getInputProps, isDragActive} = useDropzone({onDrop});

  const renderPreviews  = () =>
    files?.map((file) => (
        
      <div key={file?.name}  >
        <div className='relative   '>
        <IoMdClose className='absolute left-0'/>
        <img src={file?.preview} alt={file.name} className='size-44 object-cover object-center ' />
        <p className='text-center text-xs tracking-tight'>{file.name.split('.')[0]}</p>
        </div>
      </div>
    ));

  return (
    <div {...getRootProps()}>
      <input {...getInputProps()} />
      {
        isDragActive ?
          <p>Drop the files here ...</p> :
          <p>Drag 'n' drop some files here, or click to select files</p>
      }
      <div className='grid grid-cols-4 mx-2 gap-3'>{renderPreviews()}</div>
    </div>
  )
}
 

export default DragZone
