import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const slides = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=2000",
    title: "Building Tomorrow's Infrastructure",
    subtitle: "Delivering excellence in construction, engineering, and industrial solutions with unmatched quality and reliability.",
    btn1: "Our Services",
    btn2: "Get Quote",
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=2000",
    title: "Trusted Industrial Partner",
    subtitle: "From planning to execution, Shambhu Corporation ensures precision, safety, and long-term value for every project.",
    btn1: "Explore Projects",
    btn2: "Contact Us",
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=2000",
    title: "Innovation Meets Expertise",
    subtitle: "Combining technology, skilled professionals, and proven processes to create sustainable business solutions.",
    btn1: "View Portfolio",
    btn2: "Learn More",
  },
];

export default function BannerSlider() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 6000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative h-screen overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={slides[current].id}
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="absolute inset-0"
        >
          <img
            src={slides[current].image}
            alt={slides[current].title}
            className="w-full h-full object-cover"
          />

          <div className="absolute inset-0 bg-black/60" />

          <div className="absolute inset-0 flex items-center">
            <div className="max-w-7xl mx-auto px-6 lg:px-10 w-full">
              <div className="max-w-3xl">

                <motion.span
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  className="inline-block mb-5 px-4 py-2 rounded-full bg-yellow-500 text-black font-semibold text-sm"
                >
                  SHAMBHU CORPORATION
                </motion.span>

                <motion.h1
                  initial={{ y: 60, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  className="text-white text-4xl md:text-6xl lg:text-7xl font-bold leading-tight"
                >
                  {slides[current].title}
                </motion.h1>

                <motion.p
                  initial={{ y: 60, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  className="text-gray-200 text-lg md:text-xl mt-6 leading-relaxed max-w-2xl"
                >
                  {slides[current].subtitle}
                </motion.p>

                <motion.div
                  initial={{ y: 60, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.7 }}
                  className="flex flex-wrap gap-4 mt-10"
                >
                  <button className="px-8 py-4 bg-yellow-500 text-black font-semibold rounded-lg hover:bg-yellow-400 transition">
                    {slides[current].btn1}
                  </button>

                  <button className="px-8 py-4 border border-white text-white rounded-lg hover:bg-white hover:text-black transition">
                    {slides[current].btn2}
                  </button>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Indicators */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex gap-3 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`h-3 rounded-full transition-all duration-300 ${
              current === index
                ? "w-10 bg-yellow-500"
                : "w-3 bg-white/50"
            }`}
          />
        ))}
      </div>
    </section>
  );
}




