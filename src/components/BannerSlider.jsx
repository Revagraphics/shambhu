import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

import slider1 from "../assets/slider-4.jpg";
import slider2 from "../assets/slider-2.jpg";
import slider3 from "../assets/slider-3.jpg";

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

const AUTO_DELAY = 6000;

const BannerSlider = () => {

  const navigate = useNavigate();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, AUTO_DELAY);

    return () => clearInterval(timer);
  }, []);

  // const handleNext = () => {
  //   setCurrent((prev) => (prev + 1) % slides.length);
  // };

  // const handlePrev = () => {
  //   setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  // };

  return (
    <section className="relative h-[80vh] w-full overflow-hidden bg-black md:h-screen">
      {/* Slider Track Container */}
      <motion.div
        animate={{ translateX: `-${current * 100}%` }}
        transition={{ type: "spring", stiffness: 120, damping: 20 }}
        className="flex h-full w-full"
      >
        {slides.map((slide) => (
          <div key={slide.id} className="relative h-full w-full shrink-0">
            {/* Background Image */}
            <img
              src={slide.image}
              alt={slide.title}
              className="absolute inset-0 h-full w-full object-cover"
              loading="eager"
            />
            {/* Dark Overlay tint */}
            <div className="absolute inset-0 bg-black/20" />

            {/* Typography Content Placement */}
            <div className="banner-content absolute inset-0 flex items-end md:items-center pb-14 md:pb-0">
              <div className="max-w-[90vw] mx-auto px-2 lg:px-10 w-full">
                <div className="banner-copy max-w-3xl">
                  <span className="inline-block mb-5 px-4 py-2 rounded-full bg-yellow-500 text-black font-semibold text-sm">
                    SHAMBHU CORPORATION
                  </span>

                  <h1 className="banner-title text-white text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
                    {slide.title}
                  </h1>

                  <p className="banner-subtitle text-gray-200 text-lg md:text-xl mt-2 lg:mt-6 leading-relaxed max-w-2xl">
                    {slide.subtitle}
                  </p>

                  <div className="flex gap-4 mt-4">
                    <button onClick={() => navigate("/exporting")} className="px-3 lg:px-8 py-2 lg:py-4 bg-yellow-500 text-black font-semibold rounded-lg hover:bg-yellow-400 transition">
                      {slide.btn1}
                    </button>
                    <button onClick={() => navigate("/contact")} className="px-3 lg:px-8 py-2 lg:py-4 border border-white text-white rounded-lg hover:bg-white hover:text-black transition">
                      {slide.btn2}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </motion.div>

      {/* Progress Indicators */}
      <div className="absolute bottom-6 lg:bottom-10 left-1/2 -translate-x-1/2 flex gap-3 z-20">
        {slides.map((_, index) => (
          <button
            key={_.id}
            onClick={() => setCurrent(index)}
            className={`h-3 rounded-full transition-all duration-300 ${
              current === index ? "w-10 bg-yellow-500" : "w-3 bg-white/50"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default BannerSlider;
