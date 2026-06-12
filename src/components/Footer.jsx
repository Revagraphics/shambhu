import { memo } from "react";
import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";

import logo from "../assets/logoo.png";

const Footer = () => {
  return (
    <footer className="bg-[#0f172a] text-gray-300 mt-20">
      <div className="max-w-[90vw] mx-auto px-6 lg:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          {/* Brand Section */}
          <div className="lg:col-span-5">
            <div className="flex items-center gap-3 mb-6">
              <img
                src={logo}
                alt="Commerce Logo"
                className="h-[100px] rounded-2xl w-[140px]"
                loading="lazy"
              />
            </div>

            <p className="text-gray-400 max-w-md text-[15px] leading-relaxed">
              Your trusted partner for global exporting, postal solutions, and
              premium FMCG products. Delivering excellence worldwide.
            </p>

            {/* Social Icons */}
            <div className="flex gap-4 mt-8">
              <a
                href="#"
                className="w-10 h-10 rounded-2xl bg-gray-800 hover:bg-[#E0920F] flex items-center justify-center transition-all"
                aria-label="Facebook"
              >
                <FaFacebookF />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-2xl bg-gray-800 hover:bg-[#E0920F] flex items-center justify-center transition-all"
                aria-label="Instagram"
              >
                <FaInstagram />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-2xl bg-gray-800 hover:bg-[#E0920F] flex items-center justify-center transition-all"
                aria-label="Twitter"
              >
                <FaTwitter />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-2xl bg-gray-800 hover:bg-[#E0920F] flex items-center justify-center transition-all"
                aria-label="LinkedIn"
              >
                <FaLinkedinIn />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2">
            <h3 className="text-white font-semibold text-lg mb-5">Company</h3>
            <ul className="space-y-3 text-[15px]">
              <li>
                <Link to="/about" className="hover:text-white transition">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/" className="hover:text-white transition">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-white transition">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="lg:col-span-2">
            <h3 className="text-white font-semibold text-lg mb-5">Services</h3>
            <ul className="space-y-3 text-[15px]">
              <li>
                <Link
                  to="/exporting"
                  className="hover:text-white transition"
                >
                  Exporting
                </Link>
              </li>
              <li>
                <Link
                  to="/postal"
                  className="hover:text-white transition"
                >
                  Postal Services
                </Link>
              </li>
              <li>
                <Link
                  to="/fmcg"
                  className="hover:text-white transition"
                >
                  FMCG Products
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="lg:col-span-3">
            <h3 className="text-white font-semibold text-lg mb-5">
              Get in Touch
            </h3>

            <div className="space-y-4 text-[15px]">
              <div>
                <p className="text-gray-400">Email</p>
                <a
                  href="mailto:shambhu220670@gmail.com"
                  className="hover:text-white transition"
                >
                  shambhu220670@gmail.com
                </a>{" "}
                <br />
                <a
                  href="mailto:shambhu22@yahoo.co.uk"
                  className="hover:text-white transition"
                >
                  shambhu22@yahoo.co.uk
                </a>
              </div>
              <div>
                <p className="text-gray-400">Phone</p>
                <a
                  href="tel:+919911161669"
                  className="hover:text-white transition"
                >
                  +91 99-1116-1669
                </a>
              </div>
              <div>
                <p className="text-gray-400">Address</p>
                <p>123 Commerce Street, Global Hub, GH 12345</p>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm">
              © 2024 Shambhu Corporation. All rights reserved.
            </p>
            <div className="flex gap-6 mt-4 md:mt-0 text-sm">
              <a href="#" className="text-gray-500 hover:text-white transition">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-500 hover:text-white transition">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default memo(Footer);
