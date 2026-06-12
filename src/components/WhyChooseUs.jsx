import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {FaChevronDown,FaGlobe,FaShippingFast,FaShieldAlt,FaHeadset,} from "react-icons/fa";

import exportt from "../assets/export.jpg";



const faqs = [
  {
    id:1,
    icon: <FaGlobe />,
    question: "Do we provide international export services?",
    answer:"Yes, we facilitate exports to multiple countries with complete logistics, customs support, and documentation assistance.",
  },
  {
    id:2,
    icon: <FaShippingFast />,
    question: "How fast is our courier and postal services?",
    answer:"Our network ensures timely deliveries with real-time tracking and dependable transit schedules.",
  },
  {id:3,
    icon: <FaShieldAlt />,
    question: "Are shipments insured and secure?",
    answer:"Absolutely. We follow strict handling procedures and offer secure shipment options for valuable consignments.",
  },
  {
  id:4,
    icon: <FaHeadset />,
    question: "Do we provide customer support?",
    answer:"Our dedicated support team is available to assist with shipment tracking, export documentation, and service inquiries.",
  },
];

export default function WhyChooseUs() {
  const [active, setActive] = useState(0);

  return (
    <section className="py-24 bg-slate-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full border border-[#E0920F] text-[#E0920F] text-sm font-medium">
            Why Choose Us
          </span>

          <h2 className="text-2xl lg:text-5xl font-bold mt-5 text-slate-900">
            Trusted Logistics & Export
            <br />
            Partner For Your Business
          </h2>

          <p className="max-w-2xl mx-auto text-slate-500 mt-5">
            Delivering reliable export, courier, and postal solutions
            with professionalism, efficiency, and customer satisfaction.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* FAQ Section */}
          <div className="space-y-5">

            {faqs.map((faq) => (
              <motion.div
                key={faq.id}
                layout
                whileHover={{ y: -3 }}
                className="bg-white rounded-2xl shadow-md overflow-hidden"
              >
                <button
                  onClick={() =>
                    setActive(active === faq.id ? null : faq.id)
                  }
                  className="w-full p-6 flex items-center justify-between text-left"
                >
                  <div className="flex items-center gap-4">

                    <div className="w-12 h-12 rounded-xl bg-[#03689e]/10 flex items-center justify-center text-[#E0920F] text-xl">
                      {faq.icon}
                    </div>

                    <h3 className="font-semibold text-lg text-slate-900">
                      {faq.question}
                    </h3>
                  </div>

                  <motion.div
                    animate={{
                      rotate: active === faq.id ? 180 : 0,
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <FaChevronDown />
                  </motion.div>
                </button>

                <AnimatePresence>
                  {active === faq.id && (
                    <motion.div
                      initial={{
                        height: 0,
                        opacity: 0,
                      }}
                      animate={{
                        height: "auto",
                        opacity: 1,
                      }}
                      exit={{
                        height: 0,
                        opacity: 0,
                      }}
                      transition={{
                        duration: 0.3,
                      }}
                    >
                      <div className="px-6 pb-6 text-slate-600 leading-relaxed">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>

          {/* Right Image */}
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* Background Shape */}
            <div className="absolute inset-0 bg-[#03689e]/5 rounded-full blur-3xl"></div>

            <motion.img
              animate={{
                y: [0, -10, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              src={exportt}
              alt="Why Choose Us"
              className="relative z-10 w-full max-w-xl mx-auto"
            />

            {/* Floating Badge 1 */}
            <motion.div
              animate={{
                y: [0, -8, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
              }}
              className="absolute top-10 left-0 bg-white rounded-2xl shadow-lg px-5 py-4"
            >
              <h4 className="font-bold text-[#03689e] text-2xl">
                15+
              </h4>
              <p className="text-sm text-slate-500">
                Years Experience
              </p>
            </motion.div>

            {/* Floating Badge 2 */}
            <motion.div
              animate={{
                y: [0, 8, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
              }}
              className="absolute bottom-10 right-0 bg-white rounded-2xl shadow-lg px-5 py-4"
            >
              <h4 className="font-bold text-[#03689e] text-2xl">
                50+
              </h4>
              <p className="text-sm text-slate-500">
                Countries Served
              </p>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );


}