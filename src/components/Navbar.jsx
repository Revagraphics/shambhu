import { useState, useEffect, useRef, memo } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaChevronDown,
  FaBars,
  FaTimes,
  FaArrowRight,
  FaBoxOpen,
  FaShip,
  FaTruck,
  FaEnvelopeOpenText,
} from "react-icons/fa";
import logo from "../assets/logo.png";

const NAV_LINKS = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Trading", to: "/trading" },
];

const SERVICES = [
  {
    label: "Import",
    to: "/import",
    desc: "Global sourcing & customs clearance",
    icon: <FaShip />,
  },
  {
    label: "Exporting",
    to: "/exporting",
    desc: "Outbound trade & logistics",
    icon: <FaTruck />,
  },
  {
    label: "Postal Services",
    to: "/postal",
    desc: "Courier & parcel network",
    icon: <FaEnvelopeOpenText />,
  },
  {
    label: "FMCG Products",
    to: "/fmcg",
    desc: "Consumer goods distribution",
    icon: <FaBoxOpen />,
  },
];

const Navbar = () => {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const dropdownRef = useRef(null);

  const isActive = (path) => location.pathname === path;
  const isServiceRoute = SERVICES.some((s) => isActive(s.to));

  // Shrink / elevate navbar on scroll
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close everything whenever the route changes
  useEffect(() => {
    setIsMobileOpen(false);
    setIsServicesOpen(false);
    setIsMobileServicesOpen(false);
  }, [location.pathname]);

  // Close services dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setIsServicesOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const NavItem = ({ to, children, active }) => (
    <Link to={to} className="relative py-2 font-medium text-[15px]">
      <span
        className={`transition-colors ${
          active ? "text-[#0B1E33]" : "text-slate-600 hover:text-[#0B1E33]"
        }`}
      >
        {children}
      </span>
      {active && (
        <motion.span
          layoutId="nav-underline"
          className="absolute -bottom-0.5 left-0 right-0 h-[2px] rounded-full bg-[#D98E2C]"
          transition={{ type: "spring", stiffness: 380, damping: 30 }}
        />
      )}
    </Link>
  );

  return (
    <nav
      className={`fixed top-3 sm:top-4 left-1/2 -translate-x-1/2 w-[100%] max-w-[90vw] z-[999] rounded-2xl border transition-all duration-300 ${
        scrolled
          ? "bg-white/90 backdrop-blur-md border-slate-200 shadow-[0_8px_30px_-12px_rgba(11,30,51,0.25)]"
          : "bg-white/70 backdrop-blur-sm border-white/40 shadow-[0_4px_20px_-8px_rgba(11,30,51,0.15)]"
      }`}
    >
      <div className="px-5 lg:px-8">
        <div
          className={`flex items-center justify-between transition-all duration-300 ${
            scrolled ? "h-[68px]" : "h-20"
          }`}
        >
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 flex-shrink-0">
            <img
              src={logo}
              alt="Shambhu Corporation"
              className="h-auto w-[92px] lg:w-[100px] transition-all"
              loading="lazy"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-9">
            <NavItem to="/" active={isActive("/")}>
              Home
            </NavItem>
            <NavItem to="/about" active={isActive("/about")}>
              About
            </NavItem>

            {/* Services Dropdown */}
            <div className="relative" ref={dropdownRef}>
              <button
                type="button"
                className="relative flex items-center gap-1.5 py-2 font-medium text-[15px] text-slate-600 hover:text-[#0B1E33] transition-colors"
                onClick={() => setIsServicesOpen((prev) => !prev)}
                aria-expanded={isServicesOpen}
              >
                <span className={isServiceRoute ? "text-[#0B1E33]" : ""}>
                  Services
                </span>
                <FaChevronDown
                  className={`text-[10px] transition-transform duration-300 ${
                    isServicesOpen ? "rotate-180" : ""
                  }`}
                />
                {isServiceRoute && (
                  <motion.span
                    layoutId="nav-underline"
                    className="absolute -bottom-0.5 left-0 right-5 h-[2px] rounded-full bg-[#D98E2C]"
                  />
                )}
              </button>

              <AnimatePresence>
                {isServicesOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 8, scale: 0.98 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 8, scale: 0.98 }}
                    transition={{ duration: 0.18 }}
                    className="absolute left-1/2 -translate-x-1/2 mt-4 w-80 bg-white rounded-2xl shadow-2xl border border-slate-100 p-2 overflow-hidden"
                  >
                    {SERVICES.map((s) => (
                      <Link
                        key={s.to}
                        to={s.to}
                        onClick={() => setIsServicesOpen(false)}
                        className="flex items-start gap-3.5 px-4 py-3 rounded-xl hover:bg-[#FDF3E4] transition-colors group"
                      >
                        <div className="w-10 h-10 rounded-lg bg-[#0B1E33] text-[#D98E2C] flex items-center justify-center text-base flex-shrink-0 group-hover:bg-[#D98E2C] group-hover:text-white transition-colors">
                          {s.icon}
                        </div>
                        <div>
                          <p className="font-semibold text-slate-800 text-sm">
                            {s.label}
                          </p>
                          <p className="text-xs text-slate-500 mt-0.5">
                            {s.desc}
                          </p>
                        </div>
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <NavItem to="/trading" active={isActive("/trading")}>
              Trading
            </NavItem>
          </div>

          {/* CTA + Hamburger */}
          <div className="flex items-center gap-3">
            <Link
              to="/contact"
              className="hidden md:inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#0B1E33] text-white text-sm font-semibold hover:bg-[#0B1E33]/90 transition-all group"
            >
              Contact Us
              <FaArrowRight className="text-xs transition-transform group-hover:translate-x-0.5" />
            </Link>

            <button
              onClick={() => setIsMobileOpen((prev) => !prev)}
              className="md:hidden w-10 h-10 flex items-center justify-center rounded-xl text-[#0B1E33] hover:bg-slate-100 transition"
              aria-label="Toggle menu"
            >
              {isMobileOpen ? <FaTimes size={18} /> : <FaBars size={18} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.25, ease: "easeInOut" }}
              className="md:hidden overflow-hidden"
            >
              <div className="border-t border-slate-100 py-4 space-y-1">
                <Link
                  to="/"
                  className={`block px-4 py-3 rounded-xl font-medium transition ${
                    isActive("/")
                      ? "bg-[#0B1E33] text-white"
                      : "text-slate-700 hover:bg-slate-50"
                  }`}
                >
                  Home
                </Link>

                <Link
                  to="/about"
                  className={`block px-4 py-3 rounded-xl font-medium transition ${
                    isActive("/about")
                      ? "bg-[#0B1E33] text-white"
                      : "text-slate-700 hover:bg-slate-50"
                  }`}
                >
                  About
                </Link>

                <button
                  onClick={() => setIsMobileServicesOpen((prev) => !prev)}
                  className="w-full text-left px-4 py-3 rounded-xl text-slate-700 hover:bg-slate-50 font-medium flex justify-between items-center"
                >
                  Services
                  <FaChevronDown
                    className={`text-xs transition-transform ${
                      isMobileServicesOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                <AnimatePresence>
                  {isMobileServicesOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden"
                    >
                      <div className="bg-slate-50 rounded-xl py-2 px-2 mx-2 my-1 space-y-1">
                        {SERVICES.map((s) => (
                          <Link
                            key={s.to}
                            to={s.to}
                            className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-600 hover:bg-white hover:text-[#0B1E33] transition"
                          >
                            <span className="text-[#D98E2C]">{s.icon}</span>
                            <span className="text-sm font-medium">
                              {s.label}
                            </span>
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                <Link
                  to="/trading"
                  className={`block px-4 py-3 rounded-xl font-medium transition ${
                    isActive("/trading")
                      ? "bg-[#0B1E33] text-white"
                      : "text-slate-700 hover:bg-slate-50"
                  }`}
                >
                  Trading
                </Link>

                <Link
                  to="/contact"
                  className="flex items-center justify-center gap-2 mt-2 px-4 py-3 rounded-xl bg-[#D98E2C] text-white font-semibold hover:bg-[#B5721B] transition"
                >
                  Contact Us
                  <FaArrowRight className="text-xs" />
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default memo(Navbar);
