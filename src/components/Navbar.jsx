
import { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react"; // Lucide icons (you can install: npm install lucide-react)
import { AuthContext } from "../AuthProvider/AuthProvider";
import Swal from "sweetalert2";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { users, userSignOut } = useContext(AuthContext);

  // console.log(users?.displayName)


  const toggleMenu = () => {
    setIsOpen(!isOpen);
  }; 
  const handleLogout = () => {
     userSignOut()
     .then(()=>{
      Swal.fire({
                  position: "center",
                  icon: "success",
                  title: "Logout Successfully",
                  showConfirmButton: false,
                  timer: 1500,
                });
     })
  }

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
        to="/public-ledger"
        onClick={() => setIsOpen(false)}
        className={({ isActive }) =>
          `block py-2 md:inline-block md:py-0 px-3 text-sm font-medium ${
            isActive ? "text-[#6cb996]" : "text-white hover:text-[#6cb996]"
          }`
        }
      >
        Blockchain Ledger
      </NavLink>

      {users && (
        <div>
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
            to="/data-collection"
            onClick={() => setIsOpen(false)}
            className={({ isActive }) =>
              `block py-2 md:inline-block md:py-0 px-3 text-sm font-medium ${
                isActive ? "text-[#6cb996]" : "text-white hover:text-[#6cb996]"
              }`
            }
          >
            Data Collection
          </NavLink>
          <NavLink
            to="/market-recommendations"
            onClick={() => setIsOpen(false)}
            className={({ isActive }) =>
              `block py-2 md:inline-block md:py-0 px-3 text-sm font-medium ${
                isActive ? "text-[#6cb996]" : "text-white hover:text-[#6cb996]"
              }`
            }
          >
            Market Recommendations
          </NavLink>
          <NavLink
            to="/blockchain-ledger"
            onClick={() => setIsOpen(false)}
            className={({ isActive }) =>
              `block py-2 md:inline-block md:py-0 px-3 text-sm font-medium ${
                isActive ? "text-[#6cb996]" : "text-white hover:text-[#6cb996]"
              }`
            }
          >
            Blockchain Ledger
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
        </div>
      )}
    </>
  );


  const [isHovered, setIsHovered] = useState(false);

  // Mock user data for UI
  const user = {
    name: "John Doe",
    email: "john@example.com",
    avatar: "https://i.pravatar.cc/40", // placeholder profile image
  };

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
          {users ? (
            <div>
             

              <div
                className="relative inline-block text-left"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                {/* Profile Image */}
                <img
                  src={users?.photoURL || `${user.avatar}`} 
                  alt="Profile"
                  className="w-10 h-10 rounded-full border-2 border-white cursor-pointer"
                />

                {/* Dropdown */}
                {isHovered && (
                  <div className="absolute right-0 mt-2 w-64 bg-white rounded-lg shadow-lg z-50 p-4 space-y-2 text-[#27391C]">
                    <div>
                      <p className="text-sm font-semibold">{users?.displayName}</p>
                      <p className="text-xs text-gray-600">{users?.email}</p>
                    </div>
                    <button
                      onClick={handleLogout}
                      className="w-full mt-2 text-sm bg-[#1F7D53] hover:bg-[#18230F] text-white py-2 px-4 rounded-lg transition-colors"
                    >
                      Logout
                    </button>
                  </div>
                )}
              </div>
            </div>
          ) : (
            <div>
              <Link
                to="/login"
                className="bg-[#1F7D53] hover:bg-[#18230F] text-white px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 mr-2"
              >
                Login
              </Link>
              <Link
                to="/signup"
                className="bg-[#1F7D53] hover:bg-[#18230F] text-white px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300"
              >
                signup
              </Link>
            </div>
          )}
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
          {users ? (
            <div>
              <button
                onClick={handleLogout}
                className="block bg-[#1F7D53] hover:bg-[#18230F] text-white px-4 py-2 rounded-lg text-sm font-medium text-center transition-all duration-300"
              >
                Logout
              </button>
            </div>
          ) : (
            <div>
              <Link
                to="/login"
                onClick={() => setIsOpen(false)}
                className="block bg-[#1F7D53] hover:bg-[#18230F] text-white px-4 py-2 rounded-lg text-sm font-medium text-center transition-all duration-300 mb-2"
              >
                Login
              </Link>
              <Link
                to="/signup"
                onClick={() => setIsOpen(false)}
                className="block bg-[#1F7D53] hover:bg-[#18230F] text-white px-4 py-2 rounded-lg text-sm font-medium text-center transition-all duration-300"
              >
                Signup
              </Link>
            </div>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;



