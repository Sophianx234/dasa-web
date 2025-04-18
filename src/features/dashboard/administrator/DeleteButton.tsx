import { IoCloseOutline } from "react-icons/io5"
type deleteButtonProps = {
  dispatch?: ()=>void
  handleDelete?: (id:string)=> Promise<void> 
}
function DeleteButton({handleDelete,dispatch}:deleteButtonProps) {
  return (
        
                        <div className="p-1  rounded-full  top-0 right-1 absolute bg-white shadow-lg border z-20">
                            <IoCloseOutline onClick={handleDelete?handleDelete as ()=>Promise<void>:dispatch} className="size-6  stroke-red-400  "/>
                                </div>
                              
                            )}
                    
  
                              

export default DeleteButton
