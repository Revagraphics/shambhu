import React from "react";
import { motion } from "framer-motion";
import {
  FaHandshake,
  FaChartLine,
  FaSitemap,
  FaArrowRight,
} from "react-icons/fa";

import about from "../assets/about3.png";
import trade from "../assets/trade.jpg";
import sustainable from "../assets/sustainable.jpg";

const stats = [
  { value: "20+", label: "Years in Trade" },
  { value: "300+", label: "Distribution Partners" },
  { value: "50+", label: "Countries Reached" },
];

const sectors = [
  { name: "FMCG & Consumer Goods", icon: <FaSitemap /> },
  { name: "IT & Electronics", icon: <FaChartLine /> },
  { name: "Government & Enterprise Sales", icon: <FaHandshake /> },
];

const Trading = () => {
  return (
    <div className="bg-white overflow-x-hidden">
      {/* ================= HERO ================= */}
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
              Global Trading Solutions
            </span>

            <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-[1.1]">
              Connecting Businesses Across{" "}
              <span className="text-[#D98E2C]">International Markets</span>
            </h1>

            <p className="mt-6 max-w-3xl mx-auto text-lg text-slate-300 leading-relaxed">
              Shambhu Corporation facilitates seamless global trade by
              bridging manufacturers, suppliers, distributors, and buyers
              through trusted business networks and strategic market
              expertise.
            </p>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="grid grid-cols-3 gap-6 max-w-xl mx-auto mt-16 border-t border-white/10 pt-8"
          >
            {stats.map((s) => (
              <div key={s.label}>
                <h3 className="text-2xl sm:text-3xl font-bold text-white">
                  {s.value}
                </h3>
                <p className="text-slate-400 text-xs sm:text-sm mt-1">
                  {s.label}
                </p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Section 1 */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <img
                src={trade}
                alt="Global Trading"
                className="w-full rounded-3xl shadow-xl"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <div className="w-12 h-12 rounded-xl bg-[#0B1E33] text-[#D98E2C] flex items-center justify-center text-xl mb-5">
                <FaHandshake />
              </div>
              <span className="text-[#D98E2C] font-semibold uppercase tracking-wider text-sm">
                International Trade
              </span>

              <h2 className="mt-4 text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900">
                Expanding Business Beyond{" "}
                <span className="text-[#D98E2C]">Borders</span>
              </h2>

              <p className="mt-6 text-slate-600 leading-relaxed">
                We help businesses unlock growth opportunities in
                international markets by establishing strong trade
                connections across multiple countries. Our expertise in
                global commerce enables smooth transactions, market
                penetration, and long-term business expansion.
              </p>

              <p className="mt-4 text-slate-600 leading-relaxed">
                Through our extensive network of partners and distributors,
                we facilitate efficient sourcing, procurement, and movement
                of goods while ensuring compliance with international trade
                standards.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section 2 */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="order-2 lg:order-1"
            >
              <div className="w-12 h-12 rounded-xl bg-[#0B1E33] text-[#D98E2C] flex items-center justify-center text-xl mb-5">
                <FaSitemap />
              </div>
              <span className="text-[#D98E2C] font-semibold uppercase tracking-wider text-sm">
                Distribution Excellence
              </span>

              <h2 className="mt-4 text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900">
                Building Strong Global{" "}
                <span className="text-[#D98E2C]">Distribution</span> Networks
              </h2>

              <p className="mt-6 text-slate-600 leading-relaxed">
                Our distribution-focused approach helps brands strengthen
                their presence in domestic and international markets. We
                work closely with manufacturers, wholesalers, retailers, and
                channel partners to ensure products reach customers
                efficiently.
              </p>

              <p className="mt-4 text-slate-600 leading-relaxed">
                With over two decades of industry experience, we develop
                sustainable distribution strategies that improve market
                reach, optimize supply chains, and drive profitable growth.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="order-1 lg:order-2"
            >
              <img
                src={about}
                alt="Distribution Network"
                className="w-full rounded-3xl shadow-xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section 3 */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <img
                src={sustainable}
                alt="Business Development"
                className="w-full rounded-3xl shadow-xl"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <div className="w-12 h-12 rounded-xl bg-[#0B1E33] text-[#D98E2C] flex items-center justify-center text-xl mb-5">
                <FaChartLine />
              </div>
              <span className="text-[#D98E2C] font-semibold uppercase tracking-wider text-sm">
                Strategic Business Development
              </span>

              <h2 className="mt-4 text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900">
                Creating <span className="text-[#D98E2C]">Sustainable</span>{" "}
                Global Partnerships
              </h2>

              <p className="mt-6 text-slate-600 leading-relaxed">
                At Shambhu Corporation, we focus on building long-term
                business relationships that create value for suppliers,
                distributors, government organizations, and corporate
                clients worldwide.
              </p>

              <p className="mt-4 text-slate-600 leading-relaxed">
                From market research and product positioning to sales
                strategy and channel development, our team delivers tailored
                solutions that help businesses establish a strong global
                footprint and achieve sustainable success.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ================= SECTORS ================= */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <span className="text-[#D98E2C] font-semibold uppercase tracking-wider text-sm">
              Where We Operate
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mt-3">
              Sectors We Trade In
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {sectors.map((s, i) => (
              <motion.div
                key={s.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white rounded-2xl p-8 text-center shadow-sm border border-slate-100 hover:shadow-lg hover:border-[#D98E2C]/40 transition-all"
              >
                <div className="w-16 h-16 mx-auto rounded-2xl bg-[#0B1E33] text-[#D98E2C] flex items-center justify-center text-2xl mb-5">
                  {s.icon}
                </div>
                <h3 className="font-bold text-lg text-slate-900">
                  {s.name}
                </h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="relative py-24 bg-[#0B1E33] overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(217,142,44,0.15),transparent_55%)]" />
        <div className="relative max-w-4xl mx-auto px-6 text-center text-white">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Let's Build Your Trade Network
          </h2>
          <p className="text-lg mb-10 text-slate-300">
            Talk to our trading desk about market entry, distribution, or
            sourcing partnerships
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

export default Trading;
