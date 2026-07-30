import React from "react";
import { motion } from "framer-motion";
import {
  FaGlobeAsia,
  FaShippingFast,
  FaUsers,
  FaBoxOpen,
  FaBullseye,
  FaHandshake,
  FaChartLine,
  FaArrowRight,
} from "react-icons/fa";

import Slider from "../components/Slider";
import about from "../assets/about3.png";

const stats = [
  { icon: <FaGlobeAsia />, value: "Global", title: "Countries Served" },
  { icon: <FaShippingFast />, value: "10K+", title: "Shipments Delivered" },
  { icon: <FaUsers />, value: "10K+", title: "Happy Clients" },
  { icon: <FaBoxOpen />, value: "20+", title: "Years Experience" },
];

const values = [
  {
    icon: <FaBullseye />,
    title: "Precision Trade Execution",
    desc: "Every shipment is documented, compliant, and tracked — nothing moves without a clear paper trail.",
  },
  {
    icon: <FaHandshake />,
    title: "Long-Term Partnerships",
    desc: "We build distributor and supplier relationships measured in years, not single transactions.",
  },
  {
    icon: <FaChartLine />,
    title: "Strategic Market Growth",
    desc: "From product positioning to channel development, we help brands scale into new territories.",
  },
];

const services = [
  {
    title: "Global Export Services",
    text: "Connecting businesses to international markets through reliable export solutions.",
  },
  {
    title: "Postal & Courier Solutions",
    text: "Fast and secure delivery services for documents and parcels worldwide.",
  },
  {
    title: "Supply Chain Support",
    text: "Efficient logistics and transportation management tailored to your needs.",
  },
];

const About = () => {
  return (
    <div className="bg-white overflow-x-hidden">
      {/* banner */}
      <section className="relative py-28 lg:py-32 bg-[#0B1E33] overflow-hidden">
        <svg
          className="absolute inset-0 h-full w-full opacity-[0.25] pointer-events-none"
          viewBox="0 0 1200 800"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <motion.path
            d="M -50 640 Q 320 540 650 600 T 1250 560"
            fill="none"
            stroke="#D98E2C"
            strokeWidth="3.5"
            strokeDasharray="2 10"
            strokeLinecap="round"
            initial={{ strokeDashoffset: 0 }}
            animate={{ strokeDashoffset: -240 }}
            transition={{ duration: 16, repeat: Infinity, ease: "linear" }}
          />
        </svg>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(217,142,44,0.15),transparent_55%)]" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 backdrop-blur-sm text-[#D98E2C] text-xs font-semibold tracking-[0.15em] uppercase">
              About Shambhu Corporation
            </span>

            <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-[1.1]">
              Connecting Businesses Across{" "}
              <span className="text-[#D98E2C]">International Markets</span>
            </h1>

            <p className="mt-6 max-w-3xl mx-auto text-lg text-slate-300 leading-relaxed">
              Shambhu Corporation facilitates seamless global trade by bridging
              manufacturers, suppliers, distributors, and buyers through trusted
              business networks and strategic market expertise.
            </p>
          </motion.div>
        </div>
      </section>
      {/* ================= HERO ================= */}
      <section className="relative pt-32 pb-20 lg:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_85%_15%,rgba(217,142,44,0.08),transparent_55%)]" />

        <div className="relative max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="absolute -inset-4 bg-[#0B1E33]/5 rounded-[2rem] -z-10" />
              <img
                src={about}
                alt="Shambhu Corporation"
                className="rounded-3xl shadow-xl w-full"
              />
              <div className="hidden sm:flex absolute -bottom-6 -right-6 bg-white rounded-2xl shadow-lg px-6 py-5 border border-slate-100 items-center gap-3">
                <div className="w-11 h-11 rounded-xl bg-[#0B1E33] text-[#D98E2C] flex items-center justify-center text-lg">
                  <FaGlobeAsia />
                </div>
                <div>
                  <h4 className="font-bold text-[#0B1E33] text-lg leading-none">
                    20+ Years
                  </h4>
                  <p className="text-slate-500 text-xs mt-1">
                    In FMCG & IT Trade
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#0B1E33]/5 border border-[#0B1E33]/10 text-[#0B1E33] text-xs font-semibold tracking-[0.15em] uppercase">
                About Shambhu Corporation
              </span>

              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-6 text-slate-900 leading-[1.15]">
                Delivering Excellence Across
                <span className="text-[#D98E2C]"> Borders</span>
              </h1>

              <p className="mt-6 text-slate-600 text-lg leading-relaxed">
                Shambhu Corporation is a trusted partner in global trade,
                business development, and distribution network management.
                Backed by over 20 years of experience in FMCG and IT products,
                we specialize in cross-cultural business operations, national
                and international sales, enterprise management, government
                sales, and strategic market expansion.
              </p>

              <p className="mt-4 text-slate-600 text-lg leading-relaxed">
                Our expertise lies in formulating and implementing effective
                business strategies that help establish and grow both new and
                existing products in competitive markets.
              </p>

              <button className="group mt-8 inline-flex items-center gap-2 px-8 py-4 bg-[#D98E2C] text-white rounded-xl font-semibold hover:bg-[#B5721B] transition-colors">
                Explore Services
                <FaArrowRight className="text-sm transition-transform group-hover:translate-x-1" />
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ================= STATS ================= */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -6 }}
                className="bg-white rounded-2xl shadow-sm border border-slate-100 p-6 sm:p-8 text-center hover:shadow-lg transition-shadow"
              >
                <div className="w-14 h-14 mx-auto rounded-xl bg-[#0B1E33] text-[#D98E2C] flex items-center justify-center text-2xl mb-4">
                  {item.icon}
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-slate-900">
                  {item.value}
                </h3>
                <p className="text-slate-500 text-sm mt-1">{item.title}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= VALUES ================= */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16 max-w-2xl mx-auto">
            <span className="text-[#D98E2C] font-semibold uppercase tracking-wider text-sm">
              What Drives Us
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mt-3">
              Principles Behind Every Shipment
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {values.map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-slate-50 rounded-2xl p-8 border border-slate-100 hover:border-[#D98E2C]/40 hover:shadow-lg transition-all"
              >
                <div className="w-14 h-14 rounded-xl bg-[#0B1E33] text-[#D98E2C] flex items-center justify-center text-2xl mb-6">
                  {v.icon}
                </div>
                <h3 className="font-bold text-slate-900 text-lg mb-2">
                  {v.title}
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed">
                  {v.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= EXPERTISE SLIDER ================= */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-center mb-12"
          >
            <span className="inline-block px-4 py-2 rounded-full bg-[#0B1E33]/5 border border-[#0B1E33]/10 text-[#0B1E33] text-sm font-medium">
              Our Expertise
            </span>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold mt-5 text-slate-900">
              Why Choose Shambhu
            </h2>
          </motion.div>

          <Slider
            items={services}
            interval={3500}
            renderItem={(service) => (
              <>
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-4">
                  {service.title}
                </h3>
                <p className="text-slate-500 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
                  {service.text}
                </p>
                <button className="mt-8 bg-[#0B1E33] text-white px-7 py-3 rounded-full font-semibold hover:bg-[#0B1E33]/90 transition shadow-md">
                  Learn More
                </button>
              </>
            )}
          />
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="relative py-24 bg-[#0B1E33] overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_40%,rgba(217,142,44,0.15),transparent_55%)]" />
        <div className="relative max-w-4xl mx-auto px-6 text-center text-white">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Let's Grow Your Business Globally
          </h2>
          <p className="text-lg mb-10 text-slate-300">
            Talk to our team about export, import, trading, or postal solutions
            tailored to you
          </p>
          <button className="inline-flex items-center gap-2 px-10 py-4 bg-[#D98E2C] text-white rounded-xl font-bold hover:bg-[#B5721B] transition text-lg">
            Contact Our Team
            <FaArrowRight />
          </button>
        </div>
      </section>
    </div>
  );
};

export default About;
