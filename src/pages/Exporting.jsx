import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaGlobeAsia,
  FaShippingFast,
  FaUsers,
  FaBoxOpen,
} from "react-icons/fa";

import WhyChooseUs from "../components/WhyChooseUs";


import about from "../assets/com-4.png";

const Exporting = () => {
  return (
    <div className=" w-full bg-white overflow-x-hidden">
      <section className="mt-5 py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: -80 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <img
                src={about}
                alt="Shambhu Corporation"
                className="rounded-3xl"
              />
            </motion.div>

            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: 80 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <span className="inline-block px-4 py-2 rounded-full bg-[#ffac1c] text-zinc-100 font-medium">
                About Shambhu Exporting
              </span>

              <h2 className="text-2xl md:text-5xl  font-bold mt-6 text-gray-900 leading-tight">
                Exporting Excellence Across
                <span className="text-[#E0920F]"> Borders</span>
              </h2>

              <p className="mt-6 text-gray-600 text-lg leading-relaxed">
                Shambhu Exporting is a trusted name in export, logistics,
                Courier, and postal services. We help businesses expand Globally
                by providing reliable transportation, customs support, And
                seamless delivery solutions.
              </p>

              <p className="mt-4 text-gray-600 text-lg leading-relaxed">
                With years of experience and a strong network, we ensure every
                Shipment reaches its destination safely, efficiently, and on
                Time.
              </p>

              <button className="mt-8 px-8 py-4 bg-[#ffac1c] text-white rounded-xl hover:bg-[#E0920F] transition">
                Explore Services
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      <WhyChooseUs />
    </div>
  );
};

export default Exporting;
