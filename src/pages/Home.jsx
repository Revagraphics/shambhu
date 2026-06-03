import React from "react";
import { motion } from "framer-motion";
import hero from "../assets/com-1.png";
import hero2 from "../assets/com-2.png";
import logo1 from "../assets/logo1.svg";
import logo2 from "../assets/logo2.svg";
import logo3 from "../assets/logo3.svg";
import logo4 from "../assets/logo4.svg";
import logo5 from "../assets/logo5.svg";
import logo6 from "../assets/logo6.svg";
import planeImg from "../assets/com-3.png";

const logos = [
  { id: 1, logo: logo1 },
  { id: 2, logo: logo2 },
  { id: 3, logo: logo3 },
  { id: 4, logo: logo4 },
  { id: 5, logo: logo5 },
  { id: 6, logo: logo6 },
];

const features = [
  {
    title: "Global FMCG Export",
    desc: "Premium consumer goods delivered worldwide.",
    icon: "🌍",
    position: "top-[10%] left-[5%]",
  },
  {
    title: "Trade Compliance",
    desc: "Navigate international regulations seamlessly.",
    icon: "📋",
    position: "top-[10%] right-[5%]",
  },
  {
    title: "Secure Logistics",
    desc: "Dependable supply chain management.",
    icon: "🚚",
    position: "top-[40%] left-0",
  },
  {
    title: "Postal Network",
    desc: "Connected communities through reliable delivery.",
    icon: "📮",
    position: "top-[40%] right-0",
  },
  {
    title: "Infrastructure",
    desc: "Robust systems for efficient operations.",
    icon: "🏗️",
    position: "bottom-[8%] left-[5%]",
  },
  {
    title: "Business Connectivity",
    desc: "Keeping enterprises and communities linked.",
    icon: "🤝",
    position: "bottom-[8%] right-[5%]",
  },
];

const Home = () => {
  const duplicatedLogos = [...logos, ...logos];
  return (
    <>
      <section className="min-h-screen bg-[#f8f9fc] flex items-center">
        <div className="max-w-[90vw] mx-auto px-6 lg:px-12 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div>
              <span className="inline-flex items-center px-4 py-2 rounded-full border border-orange-300 text-orange-500 text-sm mb-6">
                🌍 Global Trade Solutions
              </span>

              <h1 className="text-5xl lg:text-7xl font-bold leading-tight text-gray-900">
                Bridge Supply
                <br />
                and Demand <span className="text-[#E0920F]">Globally</span>
              </h1>

              <p className="mt-6 text-lg text-gray-600 max-w-xl">
                At Shambhu Corporation, we bridge the gap between supply and demand. Through our robust infrastructure, we seamlessly navigate international trade regulations to export top-tier FMCG goods globally, while operating a dependable, secure postal service network that keeps businesses and communities connected.
              </p>

              <div className="flex flex-wrap gap-4 mt-10">
                <button className="px-8 py-4 bg-[#ffac1c] text-white rounded-xl font-medium hover:bg-[#E0920F] transition">
                  Get Started
                </button>

                <button className="px-8 py-4 border border-[#ffac1c] text-zinc-800 rounded-xl font-medium hover:bg-[#E0920F] hover:text-white transition">
                  Learn More
                </button>
              </div>

              {/* Reviews */}
              <div className="mt-14 inline-flex items-center gap-4 bg-white shadow-md rounded-full px-6 py-4">
                <div>
                  <span className="text-yellow-500 text-2xl">★</span>
                </div>

                <div>
                  <h4 className="font-bold text-2xl">4.9</h4>
                  <p className="text-gray-500 text-sm">15k+ reviews</p>
                </div>

                <div className="flex -space-x-3">
                  <img
                    src="https://i.pravatar.cc/50?img=1"
                    alt=""
                    className="w-10 h-10 rounded-full border-2 border-white"
                  />
                  <img
                    src="https://i.pravatar.cc/50?img=2"
                    alt=""
                    className="w-10 h-10 rounded-full border-2 border-white"
                  />
                  <img
                    src="https://i.pravatar.cc/50?img=3"
                    alt=""
                    className="w-10 h-10 rounded-full border-2 border-white"
                  />
                </div>
              </div>
            </div>

            {/* Right Image */}
            <div className="relative">
              <img
                src={hero}
                alt="AASK Hero"
                className="w-full h-auto object-contain"
              />

              {/* Floating Cards */}
              <div className="hidden lg:block absolute top-10 left-0 bg-white shadow-lg rounded-xl p-4">
                <p className="text-sm text-gray-500">Projects</p>
                <h4 className="font-bold text-xl">175,950</h4>
              </div>

              <div className="hidden lg:block absolute bottom-10 right-0 bg-white shadow-lg rounded-xl p-4">
                <p className="text-sm text-gray-500">Success Rate</p>
                <h4 className="font-bold text-xl text-green-600">98%</h4>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-[90vw] mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Image */}
            <div className="relative flex justify-center">
              <div className="absolute w-[450px] h-[450px] bg-[#03689e]/5 rounded-full"></div>

              <img
                src={hero2}
                alt="Recruitment Manager"
                className="relative z-10 max-w-md w-full"
              />
            </div>

            {/* Right Content */}
            <div>
              <span className="inline-block px-4 py-2 text-sm border border-[#ffac1c] text-[#E0920F] rounded-full mb-5">
                Why Choose Shambhu
              </span>

              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-6">
                Global Trade
                <br />
                Made Simple
              </h2>

              <p className="text-lg text-gray-600 mb-10">
                We simplify international commerce and postal operations through expert logistics, regulatory compliance, and reliable service networks.
              </p>

              {/* Feature Cards */}
              <div className="space-y-5">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  // The layout transition handles the mounting fade-in
                  transition={{ duration: 0.6, ease: "easeInOut" }}
                  // Combines scaling up slightly and a 3-degree subtle tilt
                  whileHover={{
                    scale: 1.05, // Changed from 1.2 to 1.05 so it doesn't look overly aggressive
                    rotate: 3, // Rotates 3 degrees clockwise (use -3 for counter-clockwise)
                    boxShadow:
                      "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)",
                  }}
                  // Added a custom spring transition just for the hover state to make it snappy yet smooth
                  hoverTransition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 20,
                  }}
                  className="bg-white rounded-2xl shadow-md p-5 flex gap-5 cursor-pointer"
                >
                  <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center text-3xl">
                    🌍
                  </div>

                  <div>
                    <h4 className="font-semibold text-xl">
                      Global FMCG Export
                    </h4>
                    <p className="text-gray-600 mt-1">
                      Access premium consumer goods distribution networks worldwide.
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, ease: "easeInOut" }}
                  whileHover={{
                    scale: 1.05,
                    rotate: -3,
                    boxShadow:
                      "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)",
                  }}
                  hoverTransition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 20,
                  }}
                  className="bg-white rounded-2xl shadow-md p-5 flex gap-5 cursor-pointer"
                >
                  <div className="w-16 h-16 bg-green-100 rounded-xl flex items-center justify-center text-3xl">
                    ⚡
                  </div>

                  <div>
                    <h4 className="font-semibold text-xl">
                      Seamless Compliance
                    </h4>
                    <p className="text-gray-600 mt-1">
                      Navigate international trade regulations with expert guidance.
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, ease: "easeInOut" }}
                  whileHover={{
                    scale: 1.05,
                    rotate: 3,
                    boxShadow:
                      "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)",
                  }}
                  hoverTransition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 20,
                  }}
                  className="bg-white rounded-2xl shadow-md p-5 flex gap-5 cursor-pointer"
                >
                  <div className="w-16 h-16 bg-yellow-100 rounded-xl flex items-center justify-center text-3xl">
                    🚚
                  </div>

                  <div>
                    <h4 className="font-semibold text-xl">
                      Reliable Postal Service
                    </h4>
                    <p className="text-gray-600 mt-1">
                      Dependable delivery networks connecting businesses and communities.
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, ease: "easeInOut" }}
                  whileHover={{
                    scale: 1.05,
                    rotate: -3,
                    boxShadow:
                      "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)",
                  }}
                  hoverTransition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 20,
                  }}
                  className="bg-white rounded-2xl shadow-md p-5 flex gap-5 cursor-pointer"
                >
                  <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center text-3xl">
                    🏗️
                  </div>

                  <div>
                    <h4 className="font-semibold text-xl">
                      Robust Infrastructure
                    </h4>
                    <p className="text-gray-600 mt-1">
                      Efficient systems supporting comprehensive supply chain operations.
                    </p>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* logo marquee */}

      <section className="py-12 bg-[#f8f9fc] overflow-hidden w-full">
        {/* 1. Mask Container: Hides horizontal scrollbars and creates a wrapper boundary */}
        <div className="max-w-[90vw] mx-auto px-6 lg:px-12 overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]">
          {/* 2. Motion Track Container */}
          <motion.div
            className="flex gap-12 whitespace-nowrap min-w-full w-max pr-12"
            // Animate from 0 to negative half of the overall combined track width
            animate={{ x: [0, "-50%"] }}
            transition={{
              ease: "linear", // MUST be linear for constant, unbroken speed
              duration: 20, // Adjust this number to make it faster (lower) or slower (higher)
              repeat: Infinity, // Keeps looping forever
            }}
          >
            {duplicatedLogos.map((logo, index) => (
              <img
                // Use combined index strings to guarantee unique layout keys
                key={`${logo.id}-${index}`}
                src={logo.logo}
                alt={`Logo ${logo.id}`}
                className="h-12 w-auto object-contain opacity-80 hover:opacity-100 transition-opacity duration-200 cursor-pointer inline-block"
              />
            ))}
          </motion.div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="py-24 bg-[#f8f9fc]">
        <div className="max-w-[90vw] mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <div>
              <span className="inline-block px-4 py-2 text-sm border border-[#ffac1c] text-[#E0920F] rounded-full mb-5">
                Our Solutions
              </span>

              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-6">
                Complete Trade
                <br />
                & Postal Support
              </h2>

              <p className="text-lg text-gray-600 mb-10">
                From FMCG export to postal operations, we provide comprehensive solutions tailored to bridge supply and demand globally.
              </p>

              {/* Solution Cards */}
              <div className="space-y-5">
                <div className="bg-white rounded-2xl shadow-md p-5 flex gap-5 hover:shadow-lg transition">
                  <div className="w-16 h-16 bg-indigo-100 rounded-xl flex items-center justify-center text-3xl">
                    �
                  </div>

                  <div>
                    <h4 className="font-semibold text-xl">
                      Global Export Solutions
                    </h4>
                    <p className="text-gray-600 mt-1">
                      Premium FMCG products distributed across international markets.
                    </p>
                  </div>
                </div>

                <div className="bg-white rounded-2xl shadow-md p-5 flex gap-5 hover:shadow-lg transition">
                  <div className="w-16 h-16 bg-pink-100 rounded-xl flex items-center justify-center text-3xl">
                    📋
                  </div>

                  <div>
                    <h4 className="font-semibold text-xl">Trade Compliance</h4>
                    <p className="text-gray-600 mt-1">
                      Navigate regulations and documentation for smooth international trade.
                    </p>
                  </div>
                </div>

                <div className="bg-white rounded-2xl shadow-md p-5 flex gap-5 hover:shadow-lg transition">
                  <div className="w-16 h-16 bg-cyan-100 rounded-xl flex items-center justify-center text-3xl">
                    🚚
                  </div>

                  <div>
                    <h4 className="font-semibold text-xl">
                      Secure Logistics Network
                    </h4>
                    <p className="text-gray-600 mt-1">
                      Dependable supply chain and delivery infrastructure.
                    </p>
                  </div>
                </div>

                <div className="bg-white rounded-2xl shadow-md p-5 flex gap-5 hover:shadow-lg transition">
                  <div className="w-16 h-16 bg-orange-100 rounded-xl flex items-center justify-center text-3xl">
                    📮
                  </div>

                  <div>
                    <h4 className="font-semibold text-xl">Postal Services</h4>
                    <p className="text-gray-600 mt-1">
                      Reliable connectivity keeping businesses and communities connected.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Image */}
            <div className="relative flex justify-center">
              <div className="absolute w-[450px] h-[450px] bg-[#03689e]/5 rounded-full"></div>

              <img
                src={hero2}
                alt="Solutions"
                className="relative z-10 max-w-md w-full"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-slate-50 overflow-hidden">
        <div className="max-w-[90vw] mx-auto px-6">
          {/* Heading */}
          <div className="text-center mb-20">
            <span className="inline-block px-4 py-2 border border-[#ffac1c] text-[#E0920F] rounded-full text-sm">
              Shambhu Features
            </span>

            <h2 className="text-4xl md:text-5xl font-bold mt-5 text-slate-900">
              Solutions Built For
              <br />
              Global Commerce
            </h2>

            <p className="text-slate-500 mt-5 max-w-2xl mx-auto">
              Trade facilitation, postal services, and logistics solutions built for connecting businesses and communities worldwide.
            </p>
          </div>

          {/* Main Layout */}
          <div className="relative min-h-[700px] hidden lg:block">
            {/* Center Image */}
            <motion.div
              animate={{
                y: [0, -12, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute inset-0 flex justify-center items-center"
            >
              <img
                src={planeImg}
                alt="Recruitment Solutions"
                className="max-w-[850px] w-full"
              />
            </motion.div>

            {/* Cards */}
            {features.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                  ease: "easeInOut",
                }}
                whileHover={{
                  y: -10,
                  scale: 1.03,
                  boxShadow: "0 20px 40px rgba(3,104,158,0.15)",
                }}
                className={`absolute ${item.position} bg-white rounded-2xl shadow-md p-5 w-80 cursor-pointer`}
              >
                <div className="flex gap-4 items-start">
                  <div className="w-16 h-16 rounded-xl bg-[#03689e]/10 flex items-center justify-center text-3xl">
                    {item.icon}
                  </div>

                  <div>
                    <h4 className="font-semibold text-xl text-slate-900">
                      {item.title}
                    </h4>

                    <p className="text-slate-500 mt-2">{item.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Mobile Layout */}
          <div className="lg:hidden">
            <img src={planeImg} alt="" className="mx-auto mb-10" />

            <div className="grid gap-5">
              {features.map((item, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.02 }}
                  className="bg-white rounded-2xl shadow-md p-5"
                >
                  <div className="flex gap-4">
                    <div className="w-14 h-14 rounded-xl bg-[#03689e]/10 flex items-center justify-center text-2xl">
                      {item.icon}
                    </div>

                    <div>
                      <h4 className="font-semibold">{item.title}</h4>
                      <p className="text-slate-500 text-sm mt-1">{item.desc}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
