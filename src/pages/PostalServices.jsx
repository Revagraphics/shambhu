import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const categories = ["All", "E-Commerce", "Fashion", "Electronics", "Health"];

const portals = [
  {
    id: 1,
    name: "Amazon",
    category: "E-Commerce",
    logo: "/logos/amazon.png",
  },
  {
    id: 2,
    name: "Flipkart",
    category: "E-Commerce",
    logo: "/logos/flipkart.png",
  },
  {
    id: 3,
    name: "Nykaa",
    category: "Fashion",
    logo: "/logos/nykaa.png",
  },
  {
    id: 4,
    name: "boAt",
    category: "Electronics",
    logo: "/logos/boat.png",
  },
  {
    id: 5,
    name: "Derma Co",
    category: "Health",
    logo: "/logos/dermaco.png",
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
        <div className="sm:flex flex-wrap overflow-x-auto justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-5 py-2 rounded-full transition-all
              ${
                activeCategory === category
                  ? "bg-[#03689e] text-white"
                  : "bg-white text-slate-700 shadow"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Portal Cards */}
        <motion.div layout className="grid md:grid-cols-3 sm:grid-rows-6 lg:grid-cols-5 gap-5">
          {filteredData.map((portal) => (
            <motion.div
              key={portal.id}
              layout
              whileHover={{
                y: -8,
                scale: 1.03,
              }}
              className="bg-white rounded-2xl p-5 shadow-md cursor-pointer"
            >
              <img
                src={portal.logo}
                alt={portal.name}
                className="h-12 object-contain mx-auto"
              />

              <h3 className="text-center mt-4 font-medium">{portal.name}</h3>
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
            className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-5 overflow-y-auto"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 30 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 30 }}
              transition={{ duration: 0.3 }}
              className="bg-white w-full max-w-3xl rounded-3xl p-8"
            >
              <h3 className="text-3xl font-bold mb-2">Customer Details</h3>

              <p className="text-slate-500 mb-6">
                Please provide your shipping and contact details.
              </p>

              <div className="grid md:grid-cols-2 gap-4">
                {/* Full Name */}
                <input
                  type="text"
                  placeholder="Full Name *"
                  className="w-full border rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-[#03689e]"
                />

                {/* Phone */}
                <input
                  type="tel"
                  placeholder="Phone Number *"
                  className="w-full border rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-[#03689e]"
                />

                {/* Email */}
                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full border rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-[#03689e]"
                />

                {/* Alternate Phone */}
                <input
                  type="tel"
                  placeholder="Alternate Phone"
                  className="w-full border rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-[#03689e]"
                />

                {/* Address Line 1 */}
                <input
                  type="text"
                  placeholder="Address Line 1 *"
                  className="md:col-span-2 w-full border rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-[#03689e]"
                />

                {/* Address Line 2 */}
                <input
                  type="text"
                  placeholder="Address Line 2"
                  className="md:col-span-2 w-full border rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-[#03689e]"
                />

                {/* City */}
                <input
                  type="text"
                  placeholder="City *"
                  className="w-full border rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-[#03689e]"
                />

                {/* District */}
                <input
                  type="text"
                  placeholder="District"
                  className="w-full border rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-[#03689e]"
                />

                {/* State */}
                <input
                  type="text"
                  placeholder="State *"
                  className="w-full border rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-[#03689e]"
                />

                {/* Country */}
                <input
                  type="text"
                  placeholder="Country *"
                  defaultValue="India"
                  className="w-full border rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-[#03689e]"
                />

                {/* Pincode */}
                <input
                  type="text"
                  placeholder="PIN Code *"
                  className="w-full border rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-[#03689e]"
                />

                {/* Landmark */}
                <input
                  type="text"
                  placeholder="Landmark"
                  className="w-full border rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-[#03689e]"
                />

                {/* Message */}
                <textarea
                  rows="4"
                  placeholder="Additional Instructions / Message"
                  className="md:col-span-2 w-full border rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-[#03689e]"
                />
              </div>

              <div className="flex gap-4 mt-8">
                <button
                  onClick={() => setShowModal(false)}
                  className="flex-1 border border-slate-300 rounded-xl py-3 font-medium hover:bg-slate-100 transition"
                >
                  Cancel
                </button>

                <button className="flex-1 bg-[#03689e] text-white rounded-xl py-3 font-medium hover:bg-[#02557f] transition">
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


