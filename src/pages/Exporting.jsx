import { motion } from "framer-motion";
// import { useNavigate } from "react-router-dom";
import Seo from "../components/Seo";
import {
  FaClipboardCheck,
  FaBoxOpen,
  FaPlaneDeparture,
  FaWarehouse,
} from "react-icons/fa";

import WhyChooseUs from "../components/WhyChooseUs";
import about from "../assets/com-4.png";
import {
  PortalDirectory,
  ProductRequestForm,
} from "../components/PostalComponents";

const exportProcess = [
  {
    title: "Sourcing & Packaging",
    desc: "Products are sourced, quality-checked, and export-packed to international standards.",
    icon: <FaBoxOpen />,
  },
  {
    title: "Documentation & Compliance",
    desc: "Customs paperwork, certificates of origin, and trade compliance handled in-house.",
    icon: <FaClipboardCheck />,
  },
  {
    title: "Freight & Shipping",
    desc: "Air, sea, or land freight arranged through our vetted logistics partners.",
    icon: <FaPlaneDeparture />,
  },
  {
    title: "Warehousing & Delivery",
    desc: "Bonded warehousing on either end ensures a smooth final-mile handover.",
    icon: <FaWarehouse />,
  },
];

const regions = [
  { name: "Middle East", volume: "GCC & Levant" },
  { name: "Southeast Asia", volume: "ASEAN corridor" },
  { name: "Africa", volume: "East & West coast" },
  { name: "Europe", volume: "EU & UK ports" },
];

const Exporting = () => {
  return (
    <>
      <Seo
        title="Global Export Services | Shambhu Corporation"
        description="Expand your market reach with Shambhu Corporation's robust export infrastructure, documentation assistance, and global freighting."
      />

      <div className="w-full bg-white overflow-x-hidden">
        {/* ================= HERO ================= */}
        <section className="relative pt-32 pb-20 lg:py-28 bg-[#0B1E33] overflow-hidden">
          <svg
            className="absolute inset-0 h-full w-full opacity-[0.25] pointer-events-none"
            viewBox="0 0 1200 800"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <motion.path
              d="M -50 120 Q 320 220 650 140 T 1250 200"
              fill="none"
              stroke="#D98E2C"
              strokeWidth="3.5"
              strokeDasharray="2 10"
              strokeLinecap="round"
              initial={{ strokeDashoffset: 0 }}
              animate={{ strokeDashoffset: 240 }}
              transition={{ duration: 16, repeat: Infinity, ease: "linear" }}
            />
          </svg>

          <div className="relative z-10 max-w-7xl mt-6 mx-auto px-6 lg:px-12">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -60 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <img
                  src={about}
                  alt="Shambhu Exporting"
                  className="rounded-3xl shadow-2xl"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 60 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 backdrop-blur-sm text-[#D98E2C] text-xs font-semibold tracking-[0.15em] uppercase">
                  Outbound Trade Desk
                </span>

                <h1 className="mt-6 text-4xl sm:text-3xl lg:text-6xl font-bold leading-[1.1] text-white">
                  {" "}
                  Exporting Excellence Across{" "}
                  <span className="text-[#D98E2C]">Borders</span>
                </h1>

                <p className="mt-6 text-lg text-slate-300 leading-relaxed max-w-xl">
                  Shambhu Exporting is a trusted name in export, logistics,
                  courier, and postal services. We help businesses expand
                  globally with reliable transportation, customs support, and
                  seamless delivery.
                </p>

                {/* <div className="flex gap-4 mt-10">
                  <button
                    onClick={() => navigate("/contact")}
                    className="group inline-flex items-center gap-2 px-2 lg:px-8 py-4 bg-[#D98E2C] text-white rounded-xl font-semibold hover:bg-[#B5721B] transition-colors"
                  >
                    Request Quote
                    <FaArrowRight className="text-sm transition-transform group-hover:translate-x-1" />
                  </button>
                </div> */}
              </motion.div>
            </div>
          </div>
        </section>

        {/* ================= EXPORT PROCESS ================= */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <div className="text-center mb-16">
              <span className="text-[#D98E2C] font-semibold uppercase tracking-wider text-sm">
                End To End
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mt-3">
                How We Take Goods Global
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {exportProcess.map((step, index) => (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-slate-50 rounded-2xl p-7 border border-slate-100 hover:border-[#D98E2C]/40 hover:shadow-lg transition-all"
                >
                  <div className="w-14 h-14 rounded-xl bg-[#0B1E33] text-[#D98E2C] flex items-center justify-center text-2xl mb-5">
                    {step.icon}
                  </div>
                  <h3 className="font-bold text-slate-900 text-lg mb-2">
                    {step.title}
                  </h3>
                  <p className="text-slate-500 text-sm leading-relaxed">
                    {step.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <>
          <PortalDirectory />
          <ProductRequestForm />
        </>

        {/* ================= REGIONS SERVED ================= */}
        <section className="py-24 bg-slate-50">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <span className="text-[#D98E2C] font-semibold uppercase tracking-wider text-sm">
                  Global Reach
                </span>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mt-3 mb-6">
                  Trade Corridors We Actively Serve
                </h2>
                <p className="text-slate-600 leading-relaxed mb-8">
                  Our export desk maintains active shipping lanes and customs
                  relationships across four major trade corridors, so your goods
                  move with fewer delays and clearer paperwork.
                </p>
                {/* <button className="inline-flex items-center gap-2 text-[#0B1E33] font-semibold border-b-2 border-[#D98E2C] pb-1 hover:gap-3 transition-all">
                See full network on the map
                <FaArrowRight className="text-sm" />
              </button> */}
              </div>

              <div className="grid grid-cols-2 gap-5">
                {regions.map((r, i) => (
                  <motion.div
                    key={r.name}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100"
                  >
                    <span className="w-8 h-1 bg-[#D98E2C] rounded-full block mb-4" />
                    <h4 className="font-bold text-slate-900">{r.name}</h4>
                    <p className="text-slate-500 text-sm mt-1">{r.volume}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <WhyChooseUs />
      </div>
    </>
  );
};

export default Exporting;
