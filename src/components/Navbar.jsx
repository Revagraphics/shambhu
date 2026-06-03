import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/logo.png";

const Navbar = () => {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="fixed top-4 left-1/2 -translate-x-1/2 w-[95%] max-w-[90%] z-[999] bg-white rounded-3xl border border-gray-200 shadow-lg">
      <div className="max-w-[90vw] mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-20">

          {/* Logo with Image */}
          <Link to="/" className="flex items-center gap-3">
            <img 
              src={logo}
              alt="Commerce Logo" 
              className="h-auto w-[100px]"
            />
            
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-10">
            <Link
              to="/"
              className={`font-medium transition ${isActive("/") ? "text-[#ffac1c]" : "text-gray-700 hover:text-[#E0920F]"}`}
            >
              Home
            </Link>

            <Link
              to="/about"
              className={`font-medium transition ${isActive("/about") ? "text-[#ffac1c]" : "text-gray-700 hover:text-[#E0920F]"}`}
            >
              About
            </Link>

            {/* Services Dropdown */}
            <div className="relative group">
              <button
                className={`flex items-center gap-1 font-medium transition ${isActive("/services") ? "text-[#ffac1c]" : "text-gray-700 hover:text-[#E0920F]"}`}
                onClick={() => setIsServicesOpen(!isServicesOpen)}
              >
                Services
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  className="w-4 h-4 transition group-hover:rotate-180" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {/* Dropdown Menu */}
              <div className="absolute left-0 mt-3 w-56 bg-white rounded-2xl shadow-xl border border-gray-100 py-3 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <Link
                  to="/exporting"
                  className="block px-6 py-3 hover:bg-gray-50 text-gray-700 hover:text-[#E0920F]"
                >
                  Exporting
                </Link>
                <Link
                  to="/postal"
                  className="block px-6 py-3 hover:bg-gray-50 text-gray-700 hover:text-[#E0920F]"
                >
                  Postal Services
                </Link>
                <Link
                  to="/fmcg"
                  className="block px-6 py-3 hover:bg-gray-50 text-gray-700 hover:text-[#E0920F]"
                >
                  FMCG Products
                </Link>
              </div>
            </div>

            

            <Link
              to="/contact"
              className={`font-medium transition ${isActive("/contact") ? "text-[#ffac1c]" : "text-gray-700 hover:text-[#E0920F]"}`}
            >
              Contact
            </Link>
          </div>

          {/* Login Button */}
          <Link
            to="/login"
            className="hidden md:block px-6 py-2.5 rounded-2xl bg-[#ffac1c] text-white hover:bg-[#E0920F] transition font-medium"
          >
            Login
          </Link>

          {/* Hamburger Button */}
          <button
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            className="md:hidden p-2 text-gray-700"
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="w-7 h-7" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              {isMobileOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6h12v12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileOpen && (
          <div className="md:hidden border-t py-6 space-y-4">
            <Link
              to="/"
              className={`block px-4 py-3 rounded-2xl ${isActive("/") ? "bg-[#ffac1c] text-white" : "text-gray-700 hover:bg-gray-50"}`}
              onClick={() => setIsMobileOpen(false)}
            >
              Home
            </Link>

            <Link
              to="/about"
              className={`block px-4 py-3 rounded-2xl ${isActive("/about") ? "bg-[#ffac1c] text-white" : "text-gray-700 hover:bg-gray-50"}`}
              onClick={() => setIsMobileOpen(false)}
            >
              About
            </Link>

            <div>
              <button
                onClick={() => setIsServicesOpen(!isServicesOpen)}
                className={`w-full text-left px-4 py-3 flex items-center justify-between rounded-2xl ${isActive("/services") ? "bg-[#03689e] text-white" : "text-gray-700 hover:bg-gray-50"}`}
              >
                Services
                <span>{isServicesOpen ? "▲" : "▼"}</span>
              </button>

              {isServicesOpen && (
                <div className="ml-6 mt-2 space-y-2">
                  <Link
                    to="/exporting"
                    className="block px-4 py-2 text-gray-600 hover:text-[#ffac1c]"
                    onClick={() => setIsMobileOpen(false)}
                  >
                    Exporting
                  </Link>
                  <Link
                    to="/postal"
                    className="block px-4 py-2 text-gray-600 hover:text-[#ffac1c]"
                    onClick={() => setIsMobileOpen(false)}
                  >
                    Postal Services
                  </Link>
                  <Link
                    to="/fmcg"
                    className="block px-4 py-2 text-gray-600 hover:text-[#ffac1c]"
                    onClick={() => setIsMobileOpen(false)}
                  >
                    FMCG Products
                  </Link>
                </div>
              )}
            </div>

            

            <Link
              to="/contact"
              className={`block px-4 py-3 rounded-2xl ${isActive("/contact") ? "bg-[#ffac1c] text-white" : "text-gray-700 hover:bg-gray-50"}`}
              onClick={() => setIsMobileOpen(false)}
            >
              Contact
            </Link>

            <Link
              to="/login"
              className="block w-full text-center mt-6 px-6 py-3 bg-[#ffac1c] text-white rounded-2xl hover:bg-[#E0920F]"
              onClick={() => setIsMobileOpen(false)}
            >
              Login
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;