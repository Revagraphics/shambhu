import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ComposableMap,
  Geographies,
  Geography,
  Line,
  Marker,
} from "react-simple-maps";

const geoUrl = "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json";

const routes = [
  {
    name: "UAE",
    coordinates: [55.2708, 25.2048],
    label: "Dubai Hub",
    desc: "Middle East & Africa gateway",
  },
  {
    name: "Singapore",
    coordinates: [103.8198, 1.3521],
    label: "APAC Gateway",
    desc: "Southeast Asia distribution",
  },
  {
    name: "USA",
    coordinates: [-95.7129, 37.0902],
    label: "US Distribution",
    desc: "North American network",
  },
  {
    name: "UK",
    coordinates: [-3.436, 55.3781],
    label: "EU Entry Point",
    desc: "European trade corridor",
  },
];

const indiaCoordinates = [78.9629, 20.5937];

const statCards = [
  { value: "50+", label: "Countries Served" },
  { value: "4", label: "Active Trade Corridors" },
  { value: "10K+", label: "Shipments Routed" },
];

export default function Map() {
  const [hovered, setHovered] = useState(null);
  const [active, setActive] = useState(null);

  const current = active ?? hovered;

  return (
    <section className="relative bg-white py-20 md:py-28 overflow-hidden">
      {/* Soft background accents */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#D98E2C]/[0.04] blur-[120px] rounded-full" />
      </div>

      <div className="container relative mx-auto px-4 max-w-7xl">
        {/* Header */}
        <div className="text-center mb-14 md:mb-16">
          <motion.span
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1.5 rounded-full border border-[#D98E2C]/40 bg-[#D98E2C]/5 text-[#D98E2C] text-sm font-medium tracking-wide"
          >
            Global Network
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.05 }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mt-5 tracking-tight"
          >
            Connecting Markets Worldwide
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-slate-500 max-w-2xl mx-auto mt-4 text-base md:text-lg leading-relaxed"
          >
            Delivering import, export, trading and FMCG solutions across
            international markets through our trusted global network.
          </motion.p>
        </div>

        {/* Main card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
          className="relative bg-[#0B1E33] rounded-[28px] border border-white/10 shadow-2xl overflow-hidden"
        >
          {/* Ambient glow */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_-20%,rgba(217,142,44,0.15),transparent_55%)] pointer-events-none" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#D98E2C]/[0.06] blur-[100px] rounded-full pointer-events-none" />

          <style>{`
            @keyframes dashFlow {
              to { stroke-dashoffset: -240; }
            }
            .route-line {
              animation: dashFlow 10s linear infinite;
            }
          `}</style>

          <div className="grid lg:grid-cols-[1fr_280px] gap-0">
            {/* Map area */}
            <div className="relative p-4 sm:p-6 md:p-8 lg:p-10">
              <ComposableMap
                projectionConfig={{
                  scale: 145,
                  center: [40, 20],
                }}
                className="relative z-10 w-full h-auto"
              >
                <Geographies geography={geoUrl}>
                  {({ geographies }) =>
                    geographies.map((geo) => (
                      <Geography
                        key={geo.rsmKey}
                        geography={geo}
                        fill="#132A47"
                        stroke="#1E3A5F"
                        strokeWidth={0.4}
                        style={{
                          default: { outline: "none" },
                          hover: { fill: "#1B3B63", outline: "none" },
                          pressed: { outline: "none" },
                        }}
                      />
                    ))
                  }
                </Geographies>

                {/* Trade Routes */}
                {routes.map((route, index) => {
                  const isHighlighted =
                    current === null || current === index;
                  return (
                    <Line
                      key={index}
                      from={indiaCoordinates}
                      to={route.coordinates}
                      stroke="#D98E2C"
                      strokeWidth={current === index ? 1.8 : 1.1}
                      strokeLinecap="round"
                      strokeDasharray="5 7"
                      strokeOpacity={isHighlighted ? 0.95 : 0.18}
                      className="route-line"
                      style={{
                        transition: "stroke-opacity 0.3s ease, stroke-width 0.3s ease",
                      }}
                    />
                  );
                })}

                {/* India Origin Marker */}
                <Marker coordinates={indiaCoordinates}>
                  <g>
                    <circle r={14} fill="#D98E2C" opacity={0.2}>
                      <animate
                        attributeName="r"
                        values="10;20;10"
                        dur="2.8s"
                        repeatCount="indefinite"
                      />
                      <animate
                        attributeName="opacity"
                        values="0.3;0;0.3"
                        dur="2.8s"
                        repeatCount="indefinite"
                      />
                    </circle>
                    <circle
                      r={7}
                      fill="#D98E2C"
                      stroke="#fff"
                      strokeWidth={2}
                    />
                    <text
                      textAnchor="middle"
                      y={-18}
                      className="fill-white text-[11px] font-semibold"
                      style={{ pointerEvents: "none" }}
                    >
                      India (HQ)
                    </text>
                  </g>
                </Marker>

                {/* Destination Markers */}
                {routes.map((route, index) => {
                  const isActive = current === index;
                  return (
                    <Marker key={index} coordinates={route.coordinates}>
                      <g
                        onMouseEnter={() => setHovered(index)}
                        onMouseLeave={() => setHovered(null)}
                        onClick={() =>
                          setActive(active === index ? null : index)
                        }
                        style={{ cursor: "pointer" }}
                      >
                        <circle
                          r={isActive ? 9 : 6.5}
                          fill="#ffffff"
                          stroke="#D98E2C"
                          strokeWidth={2.2}
                          style={{
                            transition: "r 0.25s ease",
                            filter: isActive
                              ? "drop-shadow(0 0 8px rgba(217,142,44,0.6))"
                              : "none",
                          }}
                        />
                        <text
                          textAnchor="middle"
                          y={-15}
                          className="fill-white text-[10px] font-semibold"
                          style={{ pointerEvents: "none" }}
                        >
                          {route.name}
                        </text>
                      </g>
                    </Marker>
                  );
                })}
              </ComposableMap>

              {/* Legend */}
              <div className="relative z-10 flex flex-wrap gap-5 justify-center mt-4 pt-5 border-t border-white/10">
                <div className="flex items-center gap-2 text-white/65 text-xs">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#D98E2C]" />
                  Origin — India HQ
                </div>
                <div className="flex items-center gap-2 text-white/65 text-xs">
                  <span className="w-2.5 h-2.5 rounded-full bg-white border-2 border-[#D98E2C]" />
                  Destination Hub
                </div>
                <div className="flex items-center gap-2 text-white/65 text-xs">
                  <span className="w-5 h-[2px] bg-[#D98E2C] rounded-full inline-block" />
                  Live Trade Route
                </div>
              </div>
            </div>

            {/* Side panel – Hubs (desktop) */}
            <div className="hidden lg:flex flex-col border-l border-white/10 bg-white/[0.03]">
              <div className="p-6 border-b border-white/10">
                <h3 className="text-white font-semibold text-sm tracking-wide">
                  Active Hubs
                </h3>
                <p className="text-white/40 text-xs mt-1">
                  Click a hub to highlight its route
                </p>
              </div>

              <div className="flex-1 p-4 space-y-2">
                {routes.map((route, index) => {
                  const isActive = current === index;
                  return (
                    <button
                      key={route.name}
                      onMouseEnter={() => setHovered(index)}
                      onMouseLeave={() => setHovered(null)}
                      onClick={() =>
                        setActive(active === index ? null : index)
                      }
                      className={`w-full text-left rounded-xl px-4 py-3.5 transition-all duration-200 border ${
                        isActive
                          ? "bg-[#D98E2C]/15 border-[#D98E2C]/40"
                          : "bg-transparent border-transparent hover:bg-white/5"
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <span
                          className={`w-2 h-2 rounded-full shrink-0 transition-colors ${
                            isActive ? "bg-[#D98E2C]" : "bg-white/30"
                          }`}
                        />
                        <div>
                          <p className="text-white text-sm font-medium">
                            {route.name}
                          </p>
                          <p className="text-white/45 text-xs mt-0.5">
                            {route.label}
                          </p>
                        </div>
                      </div>
                    </button>
                  );
                })}
              </div>

              {/* Active hub detail */}
              <AnimatePresence mode="wait">
                {current !== null && (
                  <motion.div
                    key={current}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 8 }}
                    className="p-5 border-t border-white/10 bg-[#D98E2C]/10"
                  >
                    <p className="text-[#D98E2C] text-xs font-medium uppercase tracking-wider">
                      {routes[current].label}
                    </p>
                    <p className="text-white/70 text-sm mt-1.5 leading-relaxed">
                      {routes[current].desc}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </motion.div>

        {/* Mobile hub pills */}
        <div className="lg:hidden mt-5 flex gap-2 overflow-x-auto pb-1 scrollbar-hide">
          {routes.map((route, index) => {
            const isActive = current === index;
            return (
              <button
                key={route.name}
                onClick={() => setActive(active === index ? null : index)}
                className={`shrink-0 px-4 py-2 rounded-full text-sm font-medium transition-all border ${
                  isActive
                    ? "bg-[#0B1E33] text-white border-[#0B1E33]"
                    : "bg-slate-50 text-slate-600 border-slate-200"
                }`}
              >
                {route.name}
              </button>
            );
          })}
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-5 mt-8 md:mt-10">
          {statCards.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 + i * 0.08 }}
              className="group relative bg-slate-50 hover:bg-white rounded-2xl p-6 text-center border border-slate-100 hover:border-[#D98E2C]/30 hover:shadow-lg hover:shadow-[#D98E2C]/5 transition-all duration-300"
            >
              <h3 className="text-3xl md:text-4xl font-bold text-[#0B1E33] tracking-tight">
                {s.value}
              </h3>
              <p className="text-slate-500 text-sm mt-1.5 font-medium">
                {s.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}