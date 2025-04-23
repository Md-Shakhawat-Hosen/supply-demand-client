// src/components/Navbar.jsx
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react"; // Lucide icons (you can install: npm install lucide-react)

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const menuItems = (
    <>
      <NavLink
        to="/"
        onClick={() => setIsOpen(false)}
        className={({ isActive }) =>
          `block py-2 md:inline-block md:py-0 px-3 text-sm font-medium ${
            isActive ? "text-[#6cb996]" : "text-white hover:text-[#6cb996]"
          }`
        }
      >
        Home
      </NavLink>
      <NavLink
        to="/dashboard"
        onClick={() => setIsOpen(false)}
        className={({ isActive }) =>
          `block py-2 md:inline-block md:py-0 px-3 text-sm font-medium ${
            isActive ? "text-[#6cb996]" : "text-white hover:text-[#6cb996]"
          }`
        }
      >
        Dashboard
      </NavLink>
      <NavLink
        to="/reports"
        onClick={() => setIsOpen(false)}
        className={({ isActive }) =>
          `block py-2 md:inline-block md:py-0 px-3 text-sm font-medium ${
            isActive ? "text-[#6cb996]" : "text-white hover:text-[#6cb996]"
          }`
        }
      >
        Reports
      </NavLink>
      <NavLink
        to="/profile"
        onClick={() => setIsOpen(false)}
        className={({ isActive }) =>
          `block py-2 md:inline-block md:py-0 px-3 text-sm font-medium ${
            isActive ? "text-[#6cb996]" : "text-white hover:text-[#6cb996]"
          }`
        }
      >
        Profile
      </NavLink>
    </>
  );

  return (
    <nav className="bg-[#255F38] text-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16">
        {/* Logo */}
        <div className="flex-shrink-0">
          <Link to="/" className="text-2xl font-bold text-white">
            AgriForecast
          </Link>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6 items-center">
          {menuItems}
          <Link
            to="/login"
            className="bg-[#1F7D53] hover:bg-[#18230F] text-white px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300"
          >
            Login
          </Link>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="md:hidden flex items-center">
          <button onClick={toggleMenu}>
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden bg-[#255F38] px-4 pb-4 space-y-2 transition-all duration-300">
          {menuItems}
          <Link
            to="/login"
            onClick={() => setIsOpen(false)}
            className="block bg-[#1F7D53] hover:bg-[#18230F] text-white px-4 py-2 rounded-lg text-sm font-medium text-center transition-all duration-300"
          >
            Login
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
