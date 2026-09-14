import { useState } from "react";
import { motion } from "framer-motion";
import care1 from "../assets/personal-care/11.png";
import care2 from "../assets/personal-care/22.png";
import care3 from "../assets/personal-care/33.png";
import care4 from "../assets/personal-care/44.png";
import care5 from "../assets/personal-care/55.png";
import care6 from "../assets/personal-care/66.png";
import care7 from "../assets/personal-care/7.png";

import Seo from "../components/Seo";
const categories = [
  "All",
  "Food",
  "Beverages",
  "Harbals",
  "Personal Care",
  "Household",
];

const products = [
  {
    id: 1,
    name: "Organic Tea",
    category: "Beverages",
    image: "https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=500",
  },
  {
    id: 2,
    name: "Body Wash",
    category: "Personal Care",
    image: "https://images.unsplash.com/photo-1607619056574-7b8d3ee536b2?w=500",
  },
  {
    id: 3,
    name: "Dish Cleaner",
    category: "Household",
    image: "https://images.unsplash.com/photo-1583947582886-f40ec95dd752?w=500",
  },
  {
    id: 4,
    name: "Fruit Juice",
    category: "Beverages",
    image: "https://images.unsplash.com/photo-1621506289937-a8e4df240d0b?w=500",
  },
  {
    id: 5,
    name: "Instant Noodles",
    category: "Food",
    image: "https://images.unsplash.com/photo-1617093727343-374698b1b08d?w=500",
  },
  {
    id: 6,
    name: "Shampoo",
    category: "Personal Care",
    image: "https://images.unsplash.com/photo-1526947425960-945c6e72858f?w=500",
  },
  {
    id: 7,
    name: "Floor Cleaner",
    category: "Household",
    image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=500",
  },
  {
    id: 8,
    name: "Premium Basmati Rice",
    category: "Food",
    image: "https://images.unsplash.com/photo-1586201375761-83865001e31c?w=500",
  },
  // care-product
  {
    id: 9,
    name: "DENTI BUONGIORNO",
    category: "Personal Care",
    image: care1,
  },
  {
    id: 10,
    name: "DENTI BUONGIORNO",
    category: "Personal Care",
    image: care2,
  },
  {
    id: 11,
    name: "DENTI BUONGIORNO",
    category: "Personal Care",
    image: care3,
  },
  {
    id: 12,
    name: "Premium Basmati Rice",
    category: "Personal Care",
    image: care4,
  },
  {
    id: 13,
    name: "Céragenic 365+",
    category: "Personal Care",
    image: care5,
  },
  {
    id: 14,
    name: "Céragenic 365+",
    category: "Personal Care",
    image: care6,
  },
  {
    id: 15,
    name: "Céragenic 365+",
    category: "Personal Care",
    image: care7,
  },
  // Herbal Products
  {
    id: 16,
    name: "Pure Ashwagandha Powder",
    category: "Harbals",
    image:
      "https://images.unsplash.com/photo-1569936906148-06de87cb0681?q=80&w=1176&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 17,
    name: "Organic Turmeric Supplement",
    category: "Harbals",
    image:
      "https://plus.unsplash.com/premium_photo-1726862790171-0d6208559224?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8VHVybWVyaWN8ZW58MHx8MHx8fDA%3D",
  },
  {
    id: 18,
    name: "Neem Leaves Extract",
    category: "Harbals",
    image: "https://images.unsplash.com/photo-1607623814075-e51df1bdc82f?w=500",
  },
  {
    id: 19,
    name: "Brahmi Herbal Capsules",
    category: "Harbals",
    image:
      "https://images.unsplash.com/photo-1492552085122-36706c238263?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGhlcmJhbHxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    id: 20,
    name: "Triphala Digestive Powder",
    category: "Harbals",
    image:
      "https://images.unsplash.com/photo-1693996046865-19217d179161?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8RGlnZXN0aXZlJTIwcG93ZGVyfGVufDB8fDB8fHww",
  },
];

const WHATSAPP_NUMBER = "919876543210";

const handleProductEnquiry = (product) => {
  const message = [
    "Hello Shambhu Corporation, I am interested in this product:",
    `Product: ${product.name}`,
    `Category: ${product.category}`,
    "Please share the price, MOQ, availability, and export details.",
  ].join("\n");

  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
  window.open(whatsappUrl, "_blank", "noopener,noreferrer");
};

export default function Fmcg() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [search, setSearch] = useState("");

  const filteredProducts = products.filter((item) => {
    const categoryMatch =
      activeCategory === "All" || item.category === activeCategory;
    const searchMatch = item.name.toLowerCase().includes(search.toLowerCase());
    return categoryMatch && searchMatch;
  });

  return (
    <>
      <Seo
        title="shambhu corporation - FMCG Products"
        description="Explore our wide range of FMCG products including food, beverages, personal care, and household items. Quality and reliability guaranteed."
      />

      <section className="min-h-screen bg-slate-50 ">
      {/* banner */}
      <section className="relative py-28 lg:py-32 bg-[#0B1E33] overflow-hidden">
        <svg
          className="absolute inset-0 h-full w-full opacity-[0.25] pointer-events-none"
          viewBox="0 0 1200 800"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <motion.path
            d="M -50 640 Q 320 540 650 600 T 1250 560"
            fill="none"
            stroke="#D98E2C"
            strokeWidth="3.5"
            strokeDasharray="2 10"
            strokeLinecap="round"
            initial={{ strokeDashoffset: 0 }}
            animate={{ strokeDashoffset: -240 }}
            transition={{ duration: 16, repeat: Infinity, ease: "linear" }}
          />
        </svg>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(217,142,44,0.15),transparent_55%)]" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 backdrop-blur-sm text-[#D98E2C] text-xs font-semibold tracking-[0.15em] uppercase">
              FMCG Service
            </span>

            <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-[1.1]">
              Connecting Businesses Across{" "}
              <span className="text-[#D98E2C]">International Markets</span>
            </h1>

            <p className="mt-6 max-w-3xl mx-auto text-lg text-slate-300 leading-relaxed">
              Shambhu Corporation facilitates seamless global trade by bridging
              manufacturers, suppliers, distributors, and buyers through trusted
              business networks and strategic market expertise.
            </p>
          </motion.div>
        </div>
      </section>

      <div className="max-w-7xl mt-[4rem] mx-auto px-4">
        <div className="text-center mb-10">
          <h1 className="text-2xl md:text-3xl font-bold text-slate-800">
            FMCG <span className="text-[#E0920F]">Products</span>
          </h1>

        </div>

        {/* Search */}
        <div className="mb-6">
          <input
            type="text"
            placeholder="Search Products..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full bg-white border border-slate-200 rounded-xl px-5 py-4 outline-none focus:border-[#E0920F]"
          />
        </div>

        {/* Categories */}
        <div className="flex gap-3 overflow-x-auto pb-4 mb-10 scrollbar-hide">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`flex-shrink-0 px-5 py-2 rounded-full transition-all
                ${
                  activeCategory === category
                    ? "bg-[#E0920F] text-white"
                    : "bg-white shadow text-slate-700"
                }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Products */}
        <motion.div
          layout
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mb-14 xl:grid-cols-5 gap-4"
        >
          {filteredProducts.map((product) => (
            <motion.div
              key={product.id}
              layout
              whileHover={{
                y: -8,
                scale: 1.03,
              }}
              className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all"
            >
              <div className="h-44 overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="p-4">
                <span className="inline-block text-xs bg-slate-100 px-3 py-1 rounded-full text-slate-600">
                  {product.category}
                </span>

                <h3 className="font-semibold text-slate-800 mt-3">
                  {product.name}
                </h3>

                <button
                  type="button"
                  onClick={() => handleProductEnquiry(product)}
                  className="w-full mt-4 bg-[#ffac1c] text-white py-2 rounded-lg hover:bg-[#E0920F] transition"
                >
                  Enquiry Now
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>


        {/* Empty State */}
        {filteredProducts.length === 0 && (
          <div className="text-center py-20">
            <h3 className="text-xl font-semibold">No Products Found</h3>

            <p className="text-slate-500 mt-2">
              Try changing your search or category.
            </p>
          </div>
        )}
      </div>
    </section>
    </>
  );
}
