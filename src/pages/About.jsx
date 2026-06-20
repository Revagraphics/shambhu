import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaGlobeAsia,
  FaShippingFast,
  FaUsers,
  FaBoxOpen,
} from "react-icons/fa";

// import WhyChooseUs from "../components/WhyChooseUs";
import about from "../assets/about3.png";

const About = () => {
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

  // Slider State Management
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  // Autoplay Logic
  useEffect(() => {
    if (isHovered) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % services.length);
    }, 3500); // Autoplay Speed: 3500ms

    return () => clearInterval(interval);
  }, [isHovered, services.length]);

  return (
    <div className="bg-white overflow-x-hidden">
      {/* ================= HERO SECTION ================= */}
      <section className="mt-5 py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: -80 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <img
                src={about}
                alt="Shambhu Corporation"
                className="rounded-3xl"
              />
            </motion.div>

            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: 80 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <span className="inline-block px-4 py-2 rounded-full bg-[#ffac1c] text-zinc-100 font-medium">
                About Shambhu Corporation
              </span>

              <h2 className="text-2xl md:text-5xl   font-bold mt-6 text-gray-900 leading-tight">
                Delivering Excellence Across
                <span className="text-[#E0920F]"> Borders</span>
              </h2>

              <p className="mt-6 text-gray-600 text-lg leading-relaxed">
                Shambhu Corporation is a trusted partner in global trade,
                business development, and distribution network management.
                Backed by over 20 years of experience in FMCG and IT products,
                we specialize in cross-cultural business operations, national
                and international sales, enterprise management, government
                sales, and strategic market expansion.
              </p>

              <p className="mt-4 text-gray-600 text-lg leading-relaxed">
                Our expertise lies in formulating and implementing effective
                business strategies that help establish and grow both new and
                existing products in competitive markets.
              </p>

              <button className="mt-8 px-8 py-4 bg-[#ffac1c] text-white rounded-xl hover:bg-[#E0920F] transition">
                Explore Services
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ================= STATS SECTION ================= */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <FaGlobeAsia />,
                value: "Globaly",
                title: "Countries Served",
              },
              {
                icon: <FaShippingFast />,
                value: "10K+",
                title: "Shipments Delivered",
              },
              {
                icon: <FaUsers />,
                value: "10K+",
                title: "Happy Clients",
              },
              {
                icon: <FaBoxOpen />,
                value: "5+",
                title: "Years Experience",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.15,
                }}
                whileHover={{
                  y: -10,
                  scale: 1.03,
                }}
                className="bg-white rounded-3xl shadow-lg p-8 text-center"
              >
                <div className="text-5xl text-[#E0920F] flex justify-center mb-4">
                  {item.icon}
                </div>

                <h3 className="text-4xl font-bold text-gray-900">
                  {item.value}
                </h3>

                <p className="text-gray-600 mt-2">{item.title}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= CUSTOM FRAMER MOTION SLIDER SECTION ================= */}
      <section className="py-24">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <span className="inline-block px-4 py-2 rounded-full bg-zinc-100 text-[#ffac1c]">
              Our Expertise
            </span>

            <h2 className="text-2xl md:text-5xl  font-semibold mt-5">
              Why Choose
            </h2>
          </motion.div>

          {/* Slider Container */}
          <div
            className="relative min-h-[340px] flex flex-col justify-between"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <div className="relative w-full overflow-hidden rounded-3xl min-h-[260px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentSlide}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                  className="absolute inset-0 bg-[#fff] text-[#ffac1c] rounded-3xl border p-[2rem] text-center flex flex-col justify-center items-center"
                >
                  <h3 className="text-2xl font-bold mb-5">
                    {services[currentSlide].title}
                  </h3>

                  <p className="text-lg max-w-2xl mx-auto">
                    {services[currentSlide].text}
                  </p>

                  <button className="mt-8 bg-white text-[#000] px-8 py-3 rounded-full font-semibold hover:scale-105 transition shadow-md">
                    Learn More
                  </button>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Custom Dot Navigation */}
            <div className="flex justify-center items-center space-x-3 mt-8">
              {services.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`h-3 rounded-full transition-all duration-300 ${
                    currentSlide === index
                      ? "w-8 bg-[#03689e]"
                      : "w-3 bg-gray-300 hover:bg-gray-400"
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
