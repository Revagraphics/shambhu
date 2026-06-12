import React, { useState } from "react";
import { motion } from "framer-motion";
import care1 from "../assets/personal-care/11.png";
import care2 from "../assets/personal-care/22.png";
import care3 from "../assets/personal-care/33.png";
import care4 from "../assets/personal-care/44.png";
import care5 from "../assets/personal-care/55.png";
import care6 from "../assets/personal-care/66.png";
import care7 from "../assets/personal-care/7.png";
import care8 from "../assets/personal-care/8.png";

const categories = ["All", "Food", "Beverages","Harbals", "Personal Care", "Household"];

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
];

export default function FmcgProducts() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [search, setSearch] = useState("");

  const filteredProducts = products.filter((item) => {
    const categoryMatch =
      activeCategory === "All" || item.category === activeCategory;

    const searchMatch = item.name.toLowerCase().includes(search.toLowerCase());

    return categoryMatch && searchMatch;
  });

  return (
    <section className="min-h-screen bg-slate-50 py-16">
      <div className="max-w-7xl mt-[4rem] mx-auto px-4">
        {/* Heading */}
        <div className="text-center mb-10">
          <h1 className="text-2xl md:text-5xl font-bold text-slate-800">
            FMCG <span className="text-[#E0920F]">Products</span>
          </h1>

          <p className="text-slate-500 mt-3 max-w-2xl mx-auto">
            Browse our extensive range of fast-moving consumer goods including
            food, beverages, personal care, and household products.
          </p>
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
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4"
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

                <button className="w-full mt-4 bg-[#ffac1c] text-white py-2 rounded-lg hover:bg-[#E0920F] transition">
                  View Product
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
  );
}
