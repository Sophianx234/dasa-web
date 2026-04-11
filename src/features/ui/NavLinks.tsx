import React from "react";
import { Link, NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import { X } from "lucide-react";
import { useAppDispatch } from "../utils/hooks";
import { toggleNav } from "../slices/navSlice";
import { DasaLogo } from "./DasaLogo"; // Assuming you have this from previous components

const navItems = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Gallery", path: "/gallery" },
  { name: "Login", path: "/login" },
];

// Framer motion variants
const menuVariants = {
  closed: { y: "-100%", opacity: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
  open: { 
    y: 0, 
    opacity: 1, 
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1], staggerChildren: 0.1, delayChildren: 0.2 } 
  },
};

const linkVariants = {
  closed: { opacity: 0, y: 20 },
  open: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

function NavLinks() {
  const dispatch = useAppDispatch();

  const handleClose = () => {
    dispatch(toggleNav());
  };

  return (
    <motion.div
      variants={menuVariants}
      initial="closed"
      animate="open"
      exit="closed"
      className="fixed inset-0 z-[100] bg-white/95 backdrop-blur-2xl flex flex-col px-6 py-8"
    >
      {/* === TOP BAR === */}
      <div className="flex items-center justify-between">
        <Link to="/" onClick={handleClose} className="focus:outline-none">
          <DasaLogo clns="text-sm" title="UG-DaSA" />
        </Link>
        <button 
          onClick={handleClose}
          className="p-2 bg-gray-100 rounded-full text-[#33312e] hover:bg-dasalight hover:text-white transition-colors duration-300 focus:outline-none"
          aria-label="Close menu"
        >
          <X className="w-6 h-6" />
        </button>
      </div>

      {/* === HUGE EDITORIAL LINKS === */}
      <div className="flex-1 flex flex-col justify-center gap-6 mt-10">
        {navItems.map((item) => (
          <motion.div key={item.name} variants={linkVariants} className="overflow-hidden">
            <NavLink
              to={item.path}
              onClick={handleClose}
              className={({ isActive }) =>
                `block text-4xl md:text-6xl font-extrabold font-rethink tracking-tighter transition-colors duration-300 ${
                  isActive ? "text-dasadeep" : "text-[#33312e] hover:text-zinc-900"
                }`
              }
            >
              {item.name}.
            </NavLink>
          </motion.div>
        ))}
      </div>

      {/* === BOTTOM CTA === */}
      <motion.div variants={linkVariants} className="w-full pb-8">
        <Link
          to="/signup"
          onClick={handleClose}
          className="flex items-center justify-center w-full py-5 bg-[#33312e] text-white font-bold tracking-wide uppercase rounded-2xl   transition-all duration-300 focus:outline-none"
        >
          Join the Community
        </Link>
        <p className="text-center text-sm font-poppins text-gray-500 mt-4">
          Empowering Dagbon students globally.
        </p>
      </motion.div>
    </motion.div>
  );
}

export default NavLinks;