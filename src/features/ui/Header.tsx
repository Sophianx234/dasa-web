import { IoMenu } from "react-icons/io5";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { toggleNav } from "../slices/navSlice";
import DasaLogo from "./DasaLogo";

function Header() {
  const dispatch = useDispatch();

  return (
    <header className="fixed left-0 right-0 top-0 z-40 bg-[#FEF3E7] shadow-md">
      <div className="sm:grid flex grid-cols-[2.5fr_3fr_0.5fr] items-center text-lg justify-between sm:px-4 sm:py-1 px-2 py-3">

        {/* Logo */}
        <Link to="/homepage" className="flex items-center">
          <DasaLogo title="Dagbon Students Association" />
        </Link>

        {/* Desktop Nav (hidden on mobile) */}
        <nav className="hidden  font-semibold text-sm md:flex items-center gap-10 ">
          <Link to="/homepage" className="hover:bg-dasadeep py-2 px-3 rounded-md">
            Home
          </Link>

          <Link to="/homepage/about" className="hover:bg-dasadeep py-2 px-3 rounded-md">
            About
          </Link>

          

          <Link
            to="/homepage/gallery"
            className=" py-2 px-4  rounded-md
               hover:bg-dasadeep transition"
          >
            Gallery
          </Link>
        </nav>

        {/* Mobile Menu Button (hidden on desktop) */}
        <button
          onClick={() => dispatch(toggleNav())}
          className="md:hidden"
        >
          <IoMenu className="size-10" />
        </button>
        <Link to="/homepage/login" className="bg-dasadeep hover:py-2 transition-all duration-200 border-2 border-transparent hover:border-zinc-700 hover:bg-transparent font-bold  text-sm  border sm:flex items-center hidden justify-center border-dasadeep py-1 px-1 rounded-md">
            Login
          </Link>

      </div>
    </header>
  );
}

export default Header;
