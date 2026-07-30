import { useState } from "react";
import { motion } from "framer-motion";
import {
  ComposableMap,
  Geographies,
  Geography,
  Line,
  Marker,
} from "react-simple-maps";

const geoUrl =
  "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json";

const routes = [
  { name: "UAE", coordinates: [55.2708, 25.2048], label: "Dubai Hub" },
  { name: "Singapore", coordinates: [103.8198, 1.3521], label: "APAC Gateway" },
  { name: "USA", coordinates: [-95.7129, 37.0902], label: "US Distribution" },
  { name: "UK", coordinates: [-3.436, 55.3781], label: "EU Entry Point" },
];

const indiaCoordinates = [78.9629, 20.5937];

const statCards = [
  { value: "50+", label: "Countries Served" },
  { value: "4", label: "Active Trade Corridors" },
  { value: "10K+", label: "Shipments Routed" },
];

export default function Map() {
  const [hovered, setHovered] = useState(null);

  return (
    <section className="relative bg-white py-20 overflow-hidden">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-2 rounded-full border border-[#D98E2C] text-[#D98E2C] text-sm font-medium">
            Global Network
          </span>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mt-5">
            Connecting Markets Worldwide
          </h2>

          <p className="text-slate-500 max-w-2xl mx-auto mt-4">
            Delivering import, export, trading and FMCG solutions across
            international markets through our trusted global network.
          </p>
        </div>

        {/* Map card */}
        <div className="relative bg-[#0B1E33] rounded-3xl p-4 sm:p-6 md:p-10 border border-white/10 shadow-2xl overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(217,142,44,0.1),transparent_60%)] pointer-events-none" />

          <style>{`
            @keyframes dashFlow {
              to { stroke-dashoffset: -200; }
            }
            .route-line {
              animation: dashFlow 12s linear infinite;
            }
          `}</style>

          <ComposableMap
            projectionConfig={{ scale: 140 }}
            className="relative z-10"
          >
            <Geographies geography={geoUrl}>
              {({ geographies }) =>
                geographies.map((geo) => (
                  <Geography
                    key={geo.rsmKey}
                    geography={geo}
                    fill="#132A47"
                    stroke="#1E3A5F"
                    strokeWidth={0.5}
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
            {routes.map((route, index) => (
              <Line
                key={index}
                from={indiaCoordinates}
                to={route.coordinates}
                stroke="#D98E2C"
                strokeWidth={hovered === index ? 1.6 : 1}
                strokeLinecap="round"
                strokeDasharray="6 6"
                strokeOpacity={hovered === null || hovered === index ? 0.9 : 0.25}
                className="route-line"
              />
            ))}

            {/* India Marker (origin) */}
            <Marker coordinates={indiaCoordinates}>
              <g>
                <circle r={10} fill="#D98E2C" opacity={0.25}>
                  <animate
                    attributeName="r"
                    values="8;16;8"
                    dur="2.5s"
                    repeatCount="indefinite"
                  />
                  <animate
                    attributeName="opacity"
                    values="0.35;0;0.35"
                    dur="2.5s"
                    repeatCount="indefinite"
                  />
                </circle>
                <circle r={6} fill="#D98E2C" stroke="#fff" strokeWidth={1.5} />
                <text
                  textAnchor="middle"
                  y={-16}
                  className="fill-white text-[11px] font-semibold"
                >
                  India (HQ)
                </text>
              </g>
            </Marker>

            {/* Destination Markers */}
            {routes.map((route, index) => (
              <Marker key={index} coordinates={route.coordinates}>
                <g
                  onMouseEnter={() => setHovered(index)}
                  onMouseLeave={() => setHovered(null)}
                  style={{ cursor: "pointer" }}
                >
                  <circle
                    r={hovered === index ? 8 : 6}
                    fill="#ffffff"
                    stroke="#D98E2C"
                    strokeWidth={2}
                    style={{ transition: "r 0.2s ease" }}
                  />
                  <text
                    textAnchor="middle"
                    y={-14}
                    className="fill-white text-[10px] font-semibold"
                  >
                    {route.name}
                  </text>
                  {hovered === index && (
                    <text
                      textAnchor="middle"
                      y={18}
                      className="fill-[#D98E2C] text-[9px] font-medium"
                    >
                      {route.label}
                    </text>
                  )}
                </g>
              </Marker>
            ))}
          </ComposableMap>

          {/* Legend */}
          <div className="relative z-10 flex flex-wrap gap-6 justify-center mt-6 pt-6 border-t border-white/10">
            <div className="flex items-center gap-2 text-white/70 text-xs">
              <span className="w-3 h-3 rounded-full bg-[#D98E2C]" />
              Origin — India HQ
            </div>
            <div className="flex items-center gap-2 text-white/70 text-xs">
              <span className="w-3 h-3 rounded-full bg-white border border-[#D98E2C]" />
              Active Destination Hub
            </div>
            <div className="flex items-center gap-2 text-white/70 text-xs">
              <span className="w-4 h-[2px] bg-[#D98E2C] inline-block" />
              Live Trade Route
            </div>
          </div>
        </div>

        {/* Stat cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mt-8">
          {statCards.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-slate-50 rounded-2xl p-6 text-center border border-slate-100"
            >
              <h3 className="text-3xl font-bold text-[#0B1E33]">{s.value}</h3>
              <p className="text-slate-500 text-sm mt-1">{s.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
