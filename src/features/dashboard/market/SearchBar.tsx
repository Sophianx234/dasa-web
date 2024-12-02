import { IoSearch } from "react-icons/io5"

function SearchBar() {
    return (
        <form>
            <div className="mx-4 rounded-md relative border-2 px-2 py-2">
                <div className="flex justify-center  h-full items-center left-0 top-0 absolute w-9">

            <IoSearch className=" "/>
                </div>

            <input className="indent-6 w-full  bg-white outline-none  h-full" type="search" placeholder="Find what you need........." name="" id="" />
            </div>
        </form>
    )
}

export default SearchBar
