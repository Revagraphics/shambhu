import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import amazon from "../assets/amazon.jpg";
import boat from "../assets/boat.png";
import derma from "../assets/derma.png";
import flipcart from "../assets/flipcart.png";
import jocky from "../assets/jocky.png";
import myntra from "../assets/myntra.webp";
import nyka from "../assets/nyka.png";
import shaving from "../assets/shaving.png";

const categories = ["All", "E-Commerce", "Fashion", "Electronics", "Health"];

const portals = [
  {
    id: 1,
    name: "Amazon",
    category: "E-Commerce",
    logo: amazon,
  },
  {
    id: 2,
    name: "Flipkart",
    category: "E-Commerce",
    logo: flipcart,
  },
  {
    id: 3,
    name: "Nykaa",
    category: "Fashion",
    logo: nyka,
  },
  {
    id: 4,
    name: "boAt",
    category: "Electronics",
    logo: boat,
  },
  {
    id: 5,
    name: "Derma Co",
    category: "Health",
    logo: derma,
  },
  {
    id: 6,
    name: "Jocky",
    category: "Fashion",
    logo: jocky,
  },
  {
    id: 7,
    name: "Myntra",
    category: "Fashion",
    logo: myntra,
  },
  {
    id: 8,
    name: "Shaving Company",
    category: "Health",
    logo: shaving,
  },

];

export default function PostalServices() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [showModal, setShowModal] = useState(false);

  const filteredData =
    activeCategory === "All"
      ? portals
      : portals.filter((item) => item.category === activeCategory);

  return (
    <section className="py-20 mt-6 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold">Postal Services</h2>

          <p className="text-slate-500 mt-3">
            Choose your preferred portal and submit details.
          </p>
        </div>

        {/* Categories */}
        <div className="mb-10">
          <div className="flex gap-3 overflow-x-auto whitespace-nowrap pb-2 scrollbar-hide">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`flex-shrink-0 px-5 py-2 rounded-full transition-all duration-300
              ${
                activeCategory === category
                  ? "bg-[#03689e] text-white shadow-md"
                  : "bg-white text-slate-700 shadow hover:bg-slate-100"
              }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Portal Cards */}
        <motion.div
          layout
          className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 md:gap-5"
        >
          {filteredData.map((portal) => (
            <motion.div
              key={portal.id}
              layout
              whileHover={{
                y: -6,
                scale: 1.03,
              }}
              transition={{
                duration: 0.25,
              }}
              className="bg-white rounded-2xl p-5 shadow-md hover:shadow-xl transition-all cursor-pointer"
            >
              <img
                src={portal.logo}
                alt={portal.name}
                className="h-12 md:h-14 object-contain mx-auto"
              />

              <h3 className="text-center mt-4 font-medium text-sm md:text-base">
                {portal.name}
              </h3>
            </motion.div>
          ))}
        </motion.div>

        {/* URL Section */}
        <div className="mt-16 bg-white rounded-3xl p-8 shadow-lg">
          <h3 className="text-2xl font-semibold mb-6">Submit Product URL</h3>

          <div className="space-y-5">
            <input
              type="text"
              placeholder="Product URL"
              className="w-full border rounded-xl px-4 py-4 outline-none"
            />

            <textarea
              rows="4"
              placeholder="Product Details (Optional)"
              className="w-full border rounded-xl px-4 py-4 outline-none"
            />

            <button
              onClick={() => setShowModal(true)}
              className="bg-[#03689e] text-white px-8 py-4 rounded-xl hover:bg-[#02557f] transition"
            >
              Submit Request
            </button>
          </div>
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {showModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 flex items-center z-[9999]  justify-center p-3 md:p-5 overflow-y-auto"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 30 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 30 }}
              transition={{ duration: 0.3 }}
              className="bg-white w-full max-w-xl rounded-2xl p-4 md:p-6 my-4"
            >
              <h3 className="text-2xl md:text-3xl font-bold mb-2">
                Customer Details
              </h3>

              <p className="text-sm md:text-base text-slate-500 mb-6">
                Please provide your shipping and contact details.
              </p>

              <div className="grid grid-cols-2 gap-3">
                {/* Full Name */}
                <div className="col-span-2">
                  <input
                    type="text"
                    placeholder="Full Name *"
                    className="w-full border rounded-lg px-3 py-2.5 text-sm outline-none focus:ring-2 focus:ring-[#03689e]"
                  />
                </div>

                {/* Phone + Email */}
                <input
                  type="tel"
                  placeholder="Phone *"
                  className="w-full border rounded-lg px-3 py-2.5 text-sm outline-none focus:ring-2 focus:ring-[#03689e]"
                />

                <input
                  type="email"
                  placeholder="Email"
                  className="w-full border rounded-lg px-3 py-2.5 text-sm outline-none focus:ring-2 focus:ring-[#03689e]"
                />

                {/* Address */}
                <div className="col-span-2">
                  <input
                    type="text"
                    placeholder="Address *"
                    className="w-full border rounded-lg px-3 py-2.5 text-sm outline-none focus:ring-2 focus:ring-[#03689e]"
                  />
                </div>

                {/* City + State */}
                <input
                  type="text"
                  placeholder="City"
                  className="w-full border rounded-lg px-3 py-2.5 text-sm outline-none focus:ring-2 focus:ring-[#03689e]"
                />

                <input
                  type="text"
                  placeholder="State"
                  className="w-full border rounded-lg px-3 py-2.5 text-sm outline-none focus:ring-2 focus:ring-[#03689e]"
                />

                {/* PIN + Country */}
                <input
                  type="text"
                  placeholder="PIN Code"
                  className="w-full border rounded-lg px-3 py-2.5 text-sm outline-none focus:ring-2 focus:ring-[#03689e]"
                />

                <input
                  type="text"
                  defaultValue="India"
                  placeholder="Country"
                  className="w-full border rounded-lg px-3 py-2.5 text-sm outline-none focus:ring-2 focus:ring-[#03689e]"
                />

                {/* Message */}
                <div className="col-span-2">
                  <textarea
                    rows="2"
                    placeholder="Message"
                    className="w-full border rounded-lg px-3 py-2.5 text-sm outline-none resize-none focus:ring-2 focus:ring-[#03689e]"
                  />
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 mt-8">
                <button
                  onClick={() => setShowModal(false)}
                  className="w-full sm:flex-1 border border-slate-300 rounded-xl py-3 font-medium hover:bg-slate-100 transition"
                >
                  Cancel
                </button>

                <button className="w-full sm:flex-1 bg-[#03689e] text-white rounded-xl py-3 font-medium hover:bg-[#02557f] transition">
                  Submit Request
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
