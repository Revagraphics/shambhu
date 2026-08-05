import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaChevronLeft, FaChevronRight, FaQuoteLeft } from "react-icons/fa";

import avatar1 from "../assets/personal-care/11.png";
import avatar2 from "../assets/personal-care/22.png";
import avatar3 from "../assets/personal-care/33.png";
import avatar4 from "../assets/personal-care/44.png";

const testimonials = [
  {
    name: "Amit Sharma",
    title: "Operations Head",
    company: "Global FMCG Partners",
    quote:
      "Shambhu Corporation transformed our import flow with responsive logistics, real-time delivery updates, and a team that truly understands cross-border trade.",
    image: avatar1,
  },
  {
    name: "Riya Patel",
    title: "Supply Chain Lead",
    company: "Elite Retail Distributors",
    quote:
      "Their customer-first service and consistent communication made every shipment feel secure. The results were faster customs clearance and fewer delays.",
    image: avatar2,
  },
  {
    name: "Deepak Verma",
    title: "Export Manager",
    company: "Eastern Export Co.",
    quote:
      "The team’s market insights and hands-on support helped us enter new geographies with confidence. Every shipment was handled with precision.",
    image: avatar3,
  },
  {
    name: "Nina Kapoor",
    title: "Business Development Director",
    company: "National Trade Networks",
    quote:
      "We value Shambhu Corporation’s reliability and quick problem-solving. Their logistics expertise gives our clients a seamless experience.",
    image: avatar4,
  },
];

const slideVariants = {
  enter: { opacity: 0, y: 24 },
  center: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -24 },
};

const TestimonialSlider = ({ interval = 5500, autoPlay = true }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (!autoPlay) return undefined;

    const timer = window.setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, interval);

    return () => window.clearInterval(timer);
  }, [autoPlay, interval]);

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const handleDragEnd = (_, info) => {
    if (info.offset.x < -80) {
      handleNext();
    } else if (info.offset.x > 80) {
      handlePrev();
    }
  };

  return (
    <div className="relative">
      <div className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-[0_28px_90px_rgba(15,23,42,0.07)]">
        <div className="relative overflow-hidden px-4 py-10 sm:px-6 lg:px-8">
          <div className="absolute inset-y-0 left-0 w-28 bg-gradient-to-r from-white via-white/90 to-transparent pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-28 bg-gradient-to-l from-white via-white/90 to-transparent pointer-events-none" />

          <motion.div
            className="flex min-h-[320px] cursor-grab sm:cursor-auto"
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.16}
            onDragEnd={handleDragEnd}
            animate={{ x: `-${activeIndex * 100}%` }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
          >
            {testimonials.map((item, index) => (
              <motion.div
                key={item.name}
                className="w-full flex-shrink-0 px-4 sm:px-6 lg:px-8"
                variants={slideVariants}
                initial="enter"
                animate={activeIndex === index ? "center" : "exit"}
                transition={{ duration: 0.6, ease: "easeOut" }}
              >
                <div className="mx-auto max-w-4xl rounded-[2rem] bg-white p-8 sm:p-10">
                  <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-6">
                    
                    <div>
                      <p className="text-base font-semibold text-slate-900">{item.name}</p>
                      <p className="text-sm text-slate-500 mt-1">
                        {item.title} • {item.company}
                      </p>
                    </div>
                  </div>

                  <div className="text-[#D98E2C]/20 text-5xl leading-none mb-6">
                    <FaQuoteLeft />
                  </div>

                  <p className="text-slate-700 text-lg leading-relaxed sm:text-xl">
                    {item.quote}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">

        <div className="flex items-center justify-center gap-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              type="button"
              onClick={() => setActiveIndex(index)}
              aria-label={`Go to testimonial ${index + 1}`}
              className={`h-3.5 rounded-full transition-all duration-300 ${
                activeIndex === index
                  ? "w-10 bg-[#D98E2C]"
                  : "w-3.5 bg-slate-300 hover:bg-slate-400"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TestimonialSlider;
