import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

/**
 * Reusable content slider — drop-in replacement for one-off sliders
 * scattered across pages (e.g. the inline services slider in About.jsx).
 *
 * Usage:
 *   <Slider
 *     items={services}
 *     interval={3500}
 *     renderItem={(service) => (
 *       <>
 *         <h3>{service.title}</h3>
 *         <p>{service.text}</p>
 *       </>
 *     )}
 *   />
 */
const Slider = ({
  items = [],
  renderItem,
  interval = 4000,
  autoPlay = true,
  showArrows = true,
  showDots = true,
  className = "",
}) => {
  const [current, setCurrent] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const handleNext = useCallback(() => {
    setCurrent((prev) => (prev + 1) % items.length);
  }, [items.length]);

  const handlePrev = useCallback(() => {
    setCurrent((prev) => (prev - 1 + items.length) % items.length);
  }, [items.length]);

  useEffect(() => {
    if (!autoPlay || isHovered || items.length <= 1) return;
    const timer = setInterval(handleNext, interval);
    return () => clearInterval(timer);
  }, [autoPlay, isHovered, interval, handleNext, items.length]);

  if (!items.length) return null;

  return (
    <div
      className={`relative ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative min-h-[220px] overflow-hidden rounded-3xl">
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -40 }}
            transition={{ duration: 0.45, ease: "easeInOut" }}
            className="absolute inset-0 flex flex-col justify-center items-center text-center p-8 bg-white border border-slate-100 rounded-3xl"
          >
            {renderItem ? renderItem(items[current], current) : null}
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="flex items-center justify-center gap-4 mt-6">
        {showArrows && items.length > 1 && (
          <button
            onClick={handlePrev}
            aria-label="Previous"
            className="w-9 h-9 flex items-center justify-center rounded-full bg-slate-100 text-[#0B1E33] hover:bg-[#0B1E33] hover:text-white transition"
          >
            <FaChevronLeft className="text-xs" />
          </button>
        )}

        {showDots && items.length > 1 && (
          <div className="flex gap-2">
            {items.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrent(index)}
                aria-label={`Go to slide ${index + 1}`}
                className={`h-2.5 rounded-full transition-all duration-300 ${
                  current === index
                    ? "w-7 bg-[#D98E2C]"
                    : "w-2.5 bg-slate-300 hover:bg-slate-400"
                }`}
              />
            ))}
          </div>
        )}

        {showArrows && items.length > 1 && (
          <button
            onClick={handleNext}
            aria-label="Next"
            className="w-9 h-9 flex items-center justify-center rounded-full bg-slate-100 text-[#0B1E33] hover:bg-[#0B1E33] hover:text-white transition"
          >
            <FaChevronRight className="text-xs" />
          </button>
        )}
      </div>
    </div>
  );
};

export default Slider;
