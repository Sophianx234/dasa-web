import { IoCloseOutline } from "react-icons/io5"
type deleteButtonProps = {
  handleDelete?: ()=>void
}
function DeleteButton({handleDelete}:deleteButtonProps) {
  return (
        
                        <div className="p-1  rounded-full  top-0 right-1 absolute bg-white shadow-lg border">
                            <IoCloseOutline onClick={handleDelete} className="size-6  stroke-red-400  "/>
                                </div>
                              
                            )}
                    
  
                              

export default DeleteButton
