import React, { memo } from "react";
import { motion } from "framer-motion";
import hero from "../assets/com-1.png";
import hero2 from "../assets/com-2.png";
import hero3 from "../assets/about3.png";
import logo1 from "../assets/logo1.svg";
import logo2 from "../assets/logo2.svg";
import logo3 from "../assets/logo3.svg";
import logo4 from "../assets/logo4.svg";
import logo5 from "../assets/logo5.svg";
import logo6 from "../assets/logo6.svg";
import planeImg from "../assets/com-3.png";
import BannerSlider from "../components/BannerSlider"
import map from "../assets/map.jpg"

import {FaGlobe, FaStickyNote  , FaTruck , FaPassport  , FaBuilding  , FaMeetup , FaSuperpowers  } from "react-icons/fa";

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
    id:1,
    title: "Global FMCG Export",
    desc: "Premium consumer goods delivered worldwide.",
    icon: <FaGlobe />,
    position: "top-[10%] left-[5%]",
  },
  {
    id:2,
    title: "Trade Compliance",
    desc: "Navigate international regulations seamlessly.",
    icon: <FaStickyNote   />,
    position: "top-[10%] right-[5%]",
  },
  {
    id:3,
    title: "Secure Logistics",
    desc: "Dependable supply chain management.",
    icon: <FaTruck  />,
    position: "top-[40%] left-0",
  },
  {
    id:4,
    title: "Postal Network",
    desc: "Connected communities through reliable delivery.",
    icon: <FaPassport />,
    position: "top-[40%] right-0",
  },
  {
    id:5,
    title: "Infrastructure",
    desc: "Robust systems for efficient operations.",
    icon: <FaBuilding  />,
    position: "bottom-[8%] left-[5%]",
  },
  {
    id:6,
    title: "Business Connectivity",
    desc: "Keeping enterprises and communities linked.",
    icon: <FaMeetup  />,
    position: "bottom-[8%] right-[5%]",
  },
];

// Memoized FeatureCard Component
const FeatureCard = memo(({ item, isHovering }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.9 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true, amount: 0.3 }}
    transition={{ duration: 0.5 }}
    className={`absolute ${item.position} bg-white rounded-2xl shadow-md p-5 w-80 cursor-pointer hover:shadow-lg transition-shadow`}
  >
    <div className="flex gap-4 items-start">
      <div className="w-16 h-16 rounded-xl bg-[#03689e]/10 flex items-center justify-center text-3xl flex-shrink-0">
        {item.icon}
      </div>

      <div>
        <h4 className="font-semibold text-xl text-slate-900">
          {item.title}
        </h4>

        <p className="text-slate-500 mt-2 text-sm">{item.desc}</p>
      </div>
    </div>
  </motion.div>
));

FeatureCard.displayName = "FeatureCard";

// Memoized Solution Card Component
const SolutionCard = memo(({ icon, title, desc }) => (
  <div className="bg-white rounded-2xl shadow-md p-5 flex gap-5 hover:shadow-lg transition-shadow">
    <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center text-3xl flex-shrink-0">
      {icon}
    </div>

    <div>
      <h4 className="font-semibold text-xl">{title}</h4>
      <p className="text-gray-600 mt-1 text-sm">{desc}</p>
    </div>
  </div>
));

SolutionCard.displayName = "SolutionCard";

const Home = () => {
  const duplicatedLogos = [...logos, ...logos];
  
  return (
    <div className="bg-white overflow-x-hidden">

      <BannerSlider/>

      <section className="min-h-screen bg-[#f8f9fc] flex items-center">
        <div className="max-w-[90vw] mx-auto px-6 lg:px-12 py-20">
          <div className="grid lg:grid-cols-2 gap-12 sm:gap-5 items-center">
            {/* Left image */}
            <div className="relative mt-4 lg:order-2">
              <img
                src={hero}
                alt="AASK Hero"
                className="w-full h-auto object-contain"
                loading="lazy"
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

            <div className="lg:order-1">
              <span className="inline-flex items-center px-4 py-2 rounded-full border border-orange-300 text-orange-500 text-sm mb-6">
                < FaGlobe/> Trade Solutions
              </span>

              <h1 className="text-2xl lg:text-7xl font-bold leading-tight text-gray-900">
                Bridge Supply
                <br />
                and Demand <span className="text-[#E0920F]">Globally</span>
              </h1>

              <p className="mt-6 text-lg text-gray-600 max-w-xl">
                At Shambhu Corporation, we bridge the gap between supply and
                demand. Through our robust infrastructure, we seamlessly
                navigate international trade regulations to export top-tier FMCG
                goods globally.
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
              <div className="mt-14 sm:mt-8 inline-flex items-center gap-4 bg-white shadow-md rounded-full sm:px-3 sm:py-2 px-6 py-4">
                <div>
                  <span className="text-yellow-500 sm:text-xl text-2xl">★</span>
                </div>

                <div>
                  <h4 className="font-bold text-2xl">4.9</h4>
                  <p className="text-gray-500 text-sm">15k+ reviews</p>
                </div>

                <div className="flex -space-x-3">
                  <img
                    src="https://i.pravatar.cc/50?img=1"
                    alt="Reviewer 1"
                    className="w-10 h-10 rounded-full border-2 border-white"
                    loading="lazy"
                  />
                  <img
                    src="https://i.pravatar.cc/50?img=2"
                    alt="Reviewer 2"
                    className="w-10 h-10 rounded-full border-2 border-white"
                    loading="lazy"
                  />
                  <img
                    src="https://i.pravatar.cc/50?img=3"
                    alt="Reviewer 3"
                    className="w-10 h-10 rounded-full border-2 border-white"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

   {/* logo marquee */}
      <section className="py-12 bg-[#f8f9fc] overflow-hidden w-full">
        <div className="max-w-[90vw] mx-auto px-6 lg:px-12 overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]">
          <motion.div
            className="flex gap-12 whitespace-nowrap min-w-full w-max pr-12"
            animate={{ x: [0, "-50%"] }}
            transition={{
              ease: "linear",
              duration: 25,
              repeat: Infinity,
            }}
          >
            {duplicatedLogos.map((logo, index) => (
              <img
                key={`${logo.id}-${index}`}
                src={logo.logo}
                alt={`Partner Logo ${logo.id}`}
                className="h-6 w-auto sm:h-12 object-contain opacity-80 hover:opacity-100 transition-opacity duration-200 cursor-pointer inline-block flex-shrink-0"
                loading="lazy"
              />
            ))}
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-[90vw] mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Image */}
            <div className="relative flex justify-center">
              <div className="absolute w-[400px] h-[400px] bg-[#03689e]/5 rounded-full"></div>

              <img
                src={hero2}
                alt="Global Trade Made Simple"
                className="relative z-10 max-w-md w-full"
                loading="lazy"
              />
            </div>

            {/* Right Content */}
            <div>
              <span className="inline-block px-4 py-2 text-sm border border-[#ffac1c] text-[#E0920F] rounded-full mb-5">
                Why Choose Shambhu
              </span>

              <h2 className="text-2xl lg:text-5xl font-bold text-gray-900 leading-tight mb-6">
                Global Trade
                <br />
                Made Simple
              </h2>

              <p className="text-lg text-gray-600 mb-10">
                We simplify international commerce and postal operations through
                expert logistics, regulatory compliance, and reliable service
                networks.
              </p>

              {/* Feature Cards */}
              <div className="space-y-5">
                <div className="bg-white rounded-2xl shadow-md p-5 flex gap-5 hover:shadow-lg transition-shadow">
                  <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center text-3xl flex-shrink-0">
                    <FaGlobe />
                  </div>

                  <div>
                    <h4 className="font-semibold text-xl">
                      Global FMCG Export
                    </h4>
                    <p className="text-gray-600 mt-1 text-sm">
                      Access premium consumer goods distribution networks
                      worldwide.
                    </p>
                  </div>
                </div>

                <div className="bg-white rounded-2xl shadow-md p-5 flex gap-5 hover:shadow-lg transition-shadow">
                  <div className="w-16 h-16 bg-green-100 rounded-xl flex items-center justify-center text-3xl flex-shrink-0">
                    <FaSuperpowers />
                  </div>

                  <div>
                    <h4 className="font-semibold text-xl">
                      Seamless Compliance
                    </h4>
                    <p className="text-gray-600 mt-1 text-sm">
                      Navigate international trade regulations with expert
                      guidance.
                    </p>
                  </div>
                </div>

                <div className="bg-white rounded-2xl shadow-md p-5 flex gap-5 hover:shadow-lg transition-shadow">
                  <div className="w-16 h-16 bg-yellow-100 rounded-xl flex items-center justify-center text-3xl flex-shrink-0">
                    <FaTruck/>
                  </div>

                  <div>
                    <h4 className="font-semibold text-xl">
                      Reliable Postal Service
                    </h4>
                    <p className="text-gray-600 mt-1 text-sm">
                      Dependable delivery networks connecting businesses and
                      communities.
                    </p>
                  </div>
                </div>

                <div className="bg-white rounded-2xl shadow-md p-5 flex gap-5 hover:shadow-lg transition-shadow">
                  <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center text-3xl flex-shrink-0">
                    <FaBuilding />
                  </div>

                  <div>
                    <h4 className="font-semibold text-xl">
                      Robust Infrastructure
                    </h4>
                    <p className="text-gray-600 mt-1 text-sm">
                      Efficient systems supporting comprehensive supply chain
                      operations.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
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

              <h2 className="text-2xl lg:text-5xl font-bold text-gray-900 leading-tight mb-6">
                Complete Trade
                <br />& Postal Support
              </h2>

              <p className="text-lg text-gray-600 mb-10">
                From FMCG export to postal operations, we provide comprehensive
                solutions tailored to bridge supply and demand globally.
              </p>

              {/* Solution Cards */}
              <div className="space-y-5">
                <SolutionCard
                  icon={<FaGlobe />}
                  title="Global Export Solutions"
                  desc="Premium FMCG products distributed across international markets."
                />
                <SolutionCard
                  icon="📋"
                  title="Trade Compliance"
                  desc="Navigate regulations and documentation for smooth international trade."
                />
                <SolutionCard
                  icon="🚚"
                  title="Secure Logistics Network"
                  desc="Dependable supply chain and delivery infrastructure."
                />
                <SolutionCard
                  icon="📮"
                  title="Postal Services"
                  desc="Reliable connectivity keeping businesses and communities connected."
                />
              </div>
            </div>

            {/* Right Image */}
            <div className="relative flex justify-center">
              <div className="absolute w-[450px] h-[450px] bg-[#03689e]/5 rounded-full"></div>

              <img
                src={hero3}
                alt="Solutions"
                className="relative z-10 max-w-md w-full"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-slate-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          {/* Heading */}
          <div className="text-center mb-20">
            <span className="inline-block px-4 py-2 border border-[#ffac1c] text-[#E0920F] rounded-full text-sm">
              Shambhu Features
            </span>

            <h2 className="text-2xl md:text-5xl font-bold mt-5 text-slate-900">
              Solutions Built For
              <br />
              Global Commerce
            </h2>

            <p className="text-slate-500 mt-5 max-w-2xl mx-auto text-sm">
              Trade facilitation, postal services, and logistics solutions built
              for connecting businesses and communities worldwide.
            </p>
          </div>

          {/* Main Layout */}
          <div className="relative min-h-[700px] hidden lg:block">
            {/* Center Image */}
            <div className="absolute inset-0 flex justify-center items-center">
              <img
                src={planeImg}
                alt="Trade Solutions"
                className="max-w-[900px] w-full"
                loading="lazy"
              />
            </div>

            {/* Cards */}
            {features.map((item) => (
              <FeatureCard key={item.id} item={item} />
            ))}
          </div>

          {/* Mobile Layout */}
          <div className="lg:hidden">
            <img src={planeImg} alt="Trade Solutions" className="mx-auto mb-10 w-full" loading="lazy" />

            <div className="grid gap-5">
              {features.map((item) => (
                <div
                  key={item.id}
                  className="bg-white rounded-2xl shadow-md p-5 hover:shadow-lg transition-shadow"
                >
                  <div className="flex gap-4">
                    <div className="w-14 h-14 rounded-xl bg-[#03689e]/10 flex items-center justify-center text-2xl flex-shrink-0">
                      {item.icon}
                    </div>

                    <div>
                      <h4 className="font-semibold">{item.title}</h4>
                      <p className="text-slate-500 text-sm mt-1">{item.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

       <section className="min-h-screen bg-[#f8f9fc] flex items-center">
        <div className="max-w-[90vw] mx-auto px-6 lg:px-12 py-20">
          <div className="grid lg:grid-cols-2 gap-12 sm:gap-5 items-center">
            {/* Left image */}
            <div className="relative mt-4 lg:order-2">
              <img
                src={map}
                alt="Global Delivery Map"
                className="w-full h-auto object-contain"
                loading="lazy"
              />
            </div>

            <div className="lg:order-1">
              <span className="inline-flex items-center px-4 py-2 rounded-full border border-orange-300 text-orange-500 text-sm mb-6">
                🌍 Global Trade Solutions
              </span>

              <h1 className="text-2xl lg:text-7xl font-bold leading-tight text-gray-900">
                Delivering 
                <br />
                Quality Beyond <span className="text-[#E0920F]">Borders</span>
              </h1>

              <p className="mt-6 text-lg text-gray-600 max-w-xl">
                At Shambhu Corporation, we specialize in exporting premium FMCG products to global destinations. From sourcing and documentation to logistics and delivery, our end-to-end trade solutions ensure reliability, efficiency, and long-term value for our international partners.
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
              <div className="mt-14 sm:mt-8 inline-flex items-center gap-4 bg-white shadow-md rounded-full sm:px-3 sm:py-2 px-6 py-4">
                <div>
                  <span className="text-yellow-500 sm:text-xl text-2xl">★</span>
                </div>

                <div>
                  <h4 className="font-bold text-2xl">4.9</h4>
                  <p className="text-gray-500 text-sm">15k+ reviews</p>
                </div>

                <div className="flex -space-x-3">
                  <img
                    src="https://i.pravatar.cc/50?img=1"
                    alt="Reviewer 1"
                    className="w-10 h-10 rounded-full border-2 border-white"
                    loading="lazy"
                  />
                  <img
                    src="https://i.pravatar.cc/50?img=2"
                    alt="Reviewer 2"
                    className="w-10 h-10 rounded-full border-2 border-white"
                    loading="lazy"
                  />
                  <img
                    src="https://i.pravatar.cc/50?img=3"
                    alt="Reviewer 3"
                    className="w-10 h-10 rounded-full border-2 border-white"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default memo(Home);
