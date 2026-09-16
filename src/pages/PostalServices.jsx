// import { useState } from "react";
// import toast from "react-hot-toast";
import { motion } from "framer-motion";
import { PortalDirectory, ProductRequestForm,} from "../components/PostalComponents";
import Seo from "../components/Seo";
import truck from "../assets/truck.svg";

export default function PostalService() {
  return (
    <>
      <Seo
        title="Postal Services | Shambhu Corporation"
        description="Explore our comprehensive postal services designed to streamline your international shipping and logistics needs."
      />

      <section className=" bg-slate-50 min-h-screen">
        {/* banner */}
        <section className="relative py-28 lg:py-32 bg-[#0B1E33] overflow-hidden">
          <svg
            className="absolute inset-0 h-full w-full pointer-events-none"
            viewBox="0 0 1200 800"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <motion.path
              d="M -50 640 Q 320 540 650 600 T 1250 560"
              fill="none"
              stroke="#ffffff"
              strokeWidth="3.5"
              strokeDasharray="2 10"
              strokeLinecap="round"
              initial={{ strokeDashoffset: 0 }}
              animate={{ strokeDashoffset: -240 }}
              opacity="0.25"
            />

            <image
              href={truck}
              x="-48"
              y="-82"
              width="100"
              height="120"
              opacity="1"
              preserveAspectRatio="xMidYMid meet"
            >
              <animateMotion
                dur="16s"
                repeatCount="indefinite"
                rotate="auto"
                path="M -50 640 Q 320 540 650 600 T 1250 560"
              />
            </image>
          </svg>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(217,142,44,0.15),transparent_55%)]" />

          <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 backdrop-blur-sm text-[#D98E2C] text-xs font-semibold tracking-[0.15em] uppercase">
                Our Postal Service
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
          </div>
        </section>

        <>
          <PortalDirectory />
          <ProductRequestForm />
        </>

      </section>
    </>
  );
}
