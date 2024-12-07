function Checkbox() {
    return (
        <input type="checkbox" defaultChecked className="appearance-none size-5  rounded-sm border border-dasadeep checked:bg-dasadeep checked:border-transparent focus:outline-none focus:ring-1 focus:ring-dasadeep  
             checked:before:content-['✓'] checked:before:text-white
             checked:before:text-sm checked:before:font-bold
             checked:before:font-Montserrat
             duration-150
             checked:before:flex checked:before:justify-center checked:before:items-center bg-white text-purple-200  " />
    )
}

export default Checkbox
