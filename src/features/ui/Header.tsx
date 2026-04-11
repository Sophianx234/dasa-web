import { IoMenu } from "react-icons/io5";
import { NavLink, Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { toggleNav } from "../slices/navSlice";
import { DasaLogo } from "./DasaLogo";

// --------------------------------------------------------
// HEADER COMPONENT (Default Export)
// --------------------------------------------------------
export default function Header() {
  const dispatch = useDispatch();

  // Navigation Links Array for easy mapping and maintenance
  const navItems = [
    { name: "Home", path: "/homepage" },
    { name: "About", path: "/about" },
    { name: "Events", path: "/events" },
    { name: "Leadership", path: "/leadership" },
    { name: "Gallery", path: "/gallery" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header className="fixed left-0 right-0 top-0 z-50 bg-[#FEF3E7]/80 backdrop-blur-md border-b border-zinc-200/50 shadow-sm transition-all duration-300">
      <div className="max-w-[90rem] mx-auto flex items-center justify-between px-3 sm:px-8 h-[5.6rem]">
        
        {/* Logo Section */}
        <Link to="/" className="flex-shrink-0 group">
          <DasaLogo 
            title="Dagbon Students Association" 
            clns="group-hover:opacity-80 transition-opacity duration-300" 
          />
        </Link>

        {/* Desktop Navigation (Hidden on Mobile) */}
        <nav className="hidden lg:flex items-center gap-8">
          {navItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              className={({ isActive }) =>
                `relative text-sm font-semibold tracking-wide py-2 transition-colors duration-300 group ${
                  isActive ? "text-zinc-900" : "text-zinc-600 hover:text-zinc-900"
                }`
              }
            >
              {({ isActive }) => (
                <>
                  {item.name}
                  {/* Animated Bottom Border */}
                  <span
                    className={`absolute bottom-0 left-0 h-[2px] bg-dasadeep transition-all duration-300 ${
                      isActive ? "w-full" : "w-0 group-hover:w-full"
                    }`}
                  />
                </>
              )}
            </NavLink>
          ))}
        </nav>

        {/* Right Action Area */}
        <div className="flex items-center gap-3 lg:gap-6">
          {/* Desktop Login Button */}
          <Link
            to="/login"
            className="hidden sm:flex items-center justify-center bg-zinc-900 text-[#FEF3E7]   font-bold text-sm py-2.5 px-7 rounded-full shadow-md hover:shadow-lg transition-all duration-300  "
          >
            Login
          </Link>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => dispatch(toggleNav())}
            className="lg:hidden p-2 rounded-xl  text-zinc-800  hover:text-zinc-900    transition-all duration-300  active:scale-95"
            aria-label="Open Menu"
          >
            <IoMenu className="w-7 h-7" />
          </button>
        </div>
      </div>
    </header>
  );
}

// --------------------------------------------------------
// LOGO SUB-COMPONENT (Named Export)
// --------------------------------------------------------
