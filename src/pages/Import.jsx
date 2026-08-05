import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import {
  FaFileAlt,
  FaGlobeAmericas,
  FaCheckCircle,
  FaShip,
  FaArrowRight,
} from "react-icons/fa";
import Seo from "../components/Seo";
import {
  PortalDirectory,
  ProductRequestForm,
} from "../components/PostalComponents";

const importProcess = [
  {
    id: 1,
    title: "Product Selection",
    desc: "Browse and select from our wide range of premium international products available for import.",
    icon: <FaGlobeAmericas />,
  },
  {
    id: 2,
    title: "Documentation",
    desc: "We handle all import documentation, customs clearance, and compliance requirements.",
    icon: <FaFileAlt />,
  },
  {
    id: 3,
    title: "Logistics & Shipping",
    desc: "Reliable shipping and logistics partners ensure safe and timely delivery to your location.",
    icon: <FaShip />,
  },
  {
    id: 4,
    title: "Quality Inspection",
    desc: "Every shipment undergoes rigorous quality checks before being released.",
    icon: <FaCheckCircle />,
  },
];

const importCategories = [
  {
    name: "Electronics",
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600",
  },
  {
    name: "Machinery",
    image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=600",
  },
  {
    name: "Textiles",
    image:
      "https://images.unsplash.com/photo-1562869929-bda0650edb1f?q=80&w=1484&auto=format&fit=crop",
  },
  {
    name: "Raw Materials",
    image:
      "https://images.unsplash.com/photo-1763950866531-82630c26a66b?q=80&w=1148&auto=format&fit=crop",
  },
  {
    name: "Chemicals",
    image:
      "https://plus.unsplash.com/premium_photo-1681426678542-613c306013e1?w=600&auto=format&fit=crop",
  },
  {
    name: "Food & Beverages",
    image: "https://images.unsplash.com/photo-1621506289937-a8e4df240d0b?w=600",
  },
];

const stats = [
  { value: "40+", label: "Countries Sourced" },
  { value: "1,200+", label: "Shipments Cleared" },
  { value: "99.2%", label: "On-Time Delivery" },
  { value: "24/7", label: "Documentation Desk" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: "easeOut" },
  }),
};

const Import = () => {
  const navigate = useNavigate();
  return (
    <>
      <Seo
        title="Global Import Solutions | Shambhu Corporation"
        description="Streamline your sourcing strategy with Shambhu Corporation's reliable global import network and customs handling services."
      />
      <div className="bg-white overflow-x-hidden">
        {/* ================= HERO ================= */}
        <section className="relative min-h-[92svh] flex items-center bg-[#0B1E33] overflow-hidden">
          {/* Signature route lines */}
          <svg
            className="absolute inset-0 h-full w-full opacity-[0.25] pointer-events-none"
            viewBox="0 0 1200 800"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <motion.path
              d="M -50 180 Q 300 100 650 160 T 1250 120"
              fill="none"
              stroke="#D98E2C"
              strokeWidth="2.8"
              strokeDasharray="2 10"
              strokeLinecap="round"
              initial={{ strokeDashoffset: 0 }}
              animate={{ strokeDashoffset: -240 }}
              transition={{ duration: 16, repeat: Infinity, ease: "linear" }}
            />
            <motion.path
              d="M -50 680 Q 350 760 700 700 T 1250 740"
              fill="none"
              stroke="#D98E2C"
              strokeWidth="2.8"
              strokeDasharray="2 12"
              strokeLinecap="round"
              initial={{ strokeDashoffset: 0 }}
              animate={{ strokeDashoffset: -260 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            />
          </svg>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(217,142,44,0.12),transparent_55%)]" />

          <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 py-24 w-full">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              className="max-w-3xl"
            >
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 backdrop-blur-sm text-[#D98E2C] text-xs font-semibold tracking-[0.15em] uppercase">
                Inbound Trade Desk
              </span>

              <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.1] text-white">
                Import Solutions Built for{" "}
                <span className="text-[#D98E2C]">Reliable Sourcing</span>
              </h1>

              <p className="mt-6 text-lg text-slate-300 max-w-2xl leading-relaxed">
                Seamless import logistics, expert documentation handling, and
                reliable delivery of international goods to India — end to end.
              </p>

              <div className="flex gap-4 mt-10 sm:flex">
                <button
                  onClick={() => navigate("/contact")}
                  className="group inline-flex items-center gap-2 px-2 lg:px-8 py-4 bg-[#D98E2C] text-white rounded-xl font-semibold hover:bg-[#B5721B] transition-colors"
                >
                  Talk to a Specialist
                  <FaArrowRight className="text-sm transition-transform group-hover:translate-x-1" />
                </button>
              </div>
            </motion.div>

            {/* Stats row */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-8 lg:mt-16 border-t border-white/10 pt-10"
            >
              {stats.map((s, i) => (
                <motion.div key={s.label} custom={i} variants={fadeUp}>
                  <h3 className="text-3xl lg:text-4xl font-bold text-white">
                    {s.value}
                  </h3>
                  <p className="text-slate-400 text-sm mt-1">{s.label}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* ================= PROCESS TIMELINE ================= */}
        <section className="py-24 bg-slate-50">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <div className="text-center mb-16">
              <span className="text-[#D98E2C] font-semibold uppercase tracking-wider text-sm">
                How It Works
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mt-3">
                Our Import Process
              </h2>
              <p className="text-lg text-slate-500 mt-4">
                Four steps from selection to your doorstep
              </p>
            </div>

            <div className="relative grid md:grid-cols-4 gap-8">
              {/* connecting line — desktop only */}
              <div className="hidden md:block absolute top-10 left-[12.5%] right-[12.5%] h-px bg-slate-200" />

              {importProcess.map((process, index) => (
                <motion.div
                  key={process.id}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.12, duration: 0.5 }}
                  className="relative bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl border border-slate-100 transition-all text-center"
                >
                  <div className="relative w-20 h-20 mx-auto mb-6">
                    <div className="w-20 h-20 rounded-2xl bg-[#0B1E33] flex items-center justify-center text-3xl text-[#D98E2C]">
                      {process.icon}
                    </div>
                    <span className="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-[#D98E2C] text-white text-xs font-bold flex items-center justify-center">
                      {process.id}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">
                    {process.title}
                  </h3>
                  <p className="text-slate-500 text-sm leading-relaxed">
                    {process.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ================= CATEGORIES ================= */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <div className="text-center mb-16">
              <span className="text-[#D98E2C] font-semibold uppercase tracking-wider text-sm">
                Sourced Worldwide
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mt-3">
                Popular Import Categories
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {importCategories.map((category, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08 }}
                  whileHover={{ y: -6 }}
                  className="group relative h-64 overflow-hidden rounded-2xl shadow-md hover:shadow-2xl transition-all cursor-pointer"
                >
                  <img
                    src={category.image}
                    alt={category.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B1E33]/90 via-[#0B1E33]/10 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <span className="w-8 h-1 bg-[#D98E2C] rounded-full block mb-3" />
                    <h3 className="text-xl font-bold text-white">
                      {category.name}
                    </h3>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <>
          <PortalDirectory />
          <ProductRequestForm />
        </>

        {/* ================= WHY CHOOSE US ================= */}
        <section className="py-24 bg-slate-50">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <span className="text-[#D98E2C] font-semibold uppercase tracking-wider text-sm">
                  Built On Trust
                </span>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mt-3 mb-8">
                  Why Choose Our Import Services?
                </h2>

                <div className="space-y-6">
                  {[
                    [
                      "Expert Documentation",
                      "Comprehensive handling of all import regulations and customs clearance",
                    ],
                    [
                      "Cost-Effective Solutions",
                      "Competitive pricing with transparent costing structures",
                    ],
                    [
                      "Reliable Logistics",
                      "Trusted shipping partners with real-time tracking",
                    ],
                    [
                      "Quality Assurance",
                      "Rigorous inspection and quality checks at every stage",
                    ],
                  ].map(([title, desc]) => (
                    <div key={title} className="flex gap-4">
                      <div className="w-9 h-9 rounded-lg bg-[#0B1E33] text-[#D98E2C] flex items-center justify-center flex-shrink-0 mt-0.5">
                        <FaCheckCircle className="text-sm" />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-slate-900">
                          {title}
                        </h3>
                        <p className="text-slate-500 text-sm mt-1">{desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="hidden md:block relative">
                <div className="absolute -inset-4 bg-[#D98E2C]/10 rounded-3xl" />
                <img
                  src="https://images.unsplash.com/photo-1659353741664-f8d3ae82f90b?q=80&w=1170&auto=format&fit=crop"
                  alt="Import Services"
                  className="relative rounded-2xl shadow-lg w-full"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </section>

        {/* ================= CTA ================= */}
        <section className="relative py-24 bg-[#0B1E33] overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_50%,rgba(217,142,44,0.15),transparent_55%)]" />
          <div className="relative max-w-4xl mx-auto px-6 text-center text-white">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Ready to Import?
            </h2>
            <p className="text-lg mb-10 text-slate-300">
              Get in touch with our import specialists today to discuss your
              requirements
            </p>
            <button
              onClick={() => navigate("/contact")}
              className="inline-flex items-center gap-2 px-10 py-4 bg-[#D98E2C] text-white rounded-xl font-bold hover:bg-[#B5721B] transition text-lg"
            >
              Contact Our Team
              <FaArrowRight />
            </button>
          </div>
        </section>
      </div>
    </>
  );
};

export default Import;
