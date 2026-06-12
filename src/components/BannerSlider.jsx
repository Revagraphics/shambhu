import { useEffect, useState, useMemo, useCallback } from "react";
import { motion } from "framer-motion";

import slider1 from "../assets/slider-3.jpg"
import slider2 from "../assets/slider-2.jpg"
import slider3 from "../assets/slider-1.jpg"

const slides = [
  {
    id: 1,
    image: slider1,
    title: "Connecting Global Markets Through Trusted Trade",
    subtitle:
      "Delivering premium FMCG products and reliable export solutions to businesses across international markets with efficiency and confidence.",
    btn1: "Our Services",
    btn2: "Get Quote",
  },
  {
    id: 2,
    image: slider2,
    title: "Your Partner in Import & Export Excellence",
    subtitle:
      "From sourcing and documentation to logistics and delivery, we ensure seamless international trade experiences for our clients.",
    btn1: "Explore Services",
    btn2: "Contact Us",
  },
  {
    id: 3,
    image: slider3,
    title: "Driving Growth Through Global Commerce",
    subtitle:
      "Leveraging strong supply chains, trusted partnerships, and industry expertise to connect businesses with opportunities worldwide.",
    btn1: "View Network",
    btn2: "Learn More",
  },
];

const BannerSlider = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 6000);

    return () => clearInterval(timer);
  }, []);

  const handleIndicatorClick = useCallback((index) => {
    setCurrent(index);
  }, []);

  const slideContent = useMemo(() => slides[current], [current]);

  return (
    <section className="relative h-screen overflow-hidden">
      <motion.div
        key={slides[current].id}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.8 }}
        className="absolute inset-0"
      >
        <img
          src={slideContent.image}
          alt={slideContent.title}
          className="w-full h-full object-cover"
          loading="eager"
        />

        <div className="absolute inset-0 bg-black/60" />

        <div className="absolute inset-0 flex items-center">
          <div className="max-w-7xl mx-auto px-6 lg:px-10 w-full">
            <div className="max-w-3xl">
              <span className="inline-block mb-5 px-4 py-2 rounded-full bg-yellow-500 text-black font-semibold text-sm">
                SHAMBHU CORPORATION
              </span>

              <h1 className="text-white text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
                {slideContent.title}
              </h1>

              <p className="text-gray-200 text-lg md:text-xl mt-6 leading-relaxed max-w-2xl">
                {slideContent.subtitle}
              </p>

              <div className="flex flex-wrap gap-4 mt-10">
                <button className="px-8 py-4 bg-yellow-500 text-black font-semibold rounded-lg hover:bg-yellow-400 transition">
                  {slideContent.btn1}
                </button>

                <button className="px-8 py-4 border border-white text-white rounded-lg hover:bg-white hover:text-black transition">
                  {slideContent.btn2}
                </button>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Indicators */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex gap-3 z-20">
        {slides.map((_, index) => (
          <button
            key={_.id}
            onClick={() => handleIndicatorClick(index)}
            className={`h-3 rounded-full transition-all duration-300 ${
              current === index
                ? "w-10 bg-yellow-500"
                : "w-3 bg-white/50"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default BannerSlider;




