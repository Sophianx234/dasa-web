import { IoCloseOutline } from "react-icons/io5"
type deleteButtonProps = {
  dispatch?: ()=>void
  handleDelete?: (id:string)=> Promise<void> ,
  abs?:boolean
}
function DeleteButton({handleDelete,dispatch,abs=true}:deleteButtonProps) {
  return (
        
                        <div className={`  rounded-full  top-0 right-1 ${abs&&'absolute p-1'} bg-white shadow-lg border z-20`}>
                            <IoCloseOutline onClick={handleDelete?handleDelete as ()=>Promise<void>:dispatch} className="size-6  stroke-red-400  "/>
                                </div>
                              
                            )}
                    
  
                              

export default DeleteButton
