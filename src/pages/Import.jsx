
import React from "react";
import { motion } from "framer-motion";
import { FaFileAlt, FaTruck, FaGlobeAmericas, FaCheckCircle, FaClipboardList, FaShip } from "react-icons/fa";

const Import = () => {
  const importProcess = [
    {
      id: 1,
      step: "1",
      title: "Product Selection",
      desc: "Browse and select from our wide range of premium international products available for import.",
      icon: <FaGlobeAmericas />,
    },
    {
      id: 2,
      step: "2",
      title: "Documentation",
      desc: "We handle all import documentation, customs clearance, and compliance requirements.",
      icon: <FaFileAlt />,
    },
    {
      id: 3,
      step: "3",
      title: "Logistics & Shipping",
      desc: "Reliable shipping and logistics partners ensure safe and timely delivery to your location.",
      icon: <FaShip />,
    },
    {
      id: 4,
      step: "4",
      title: "Quality Inspection",
      desc: "Every shipment undergoes rigorous quality checks before being released.",
      icon: <FaCheckCircle />,
    },
  ];

  const importCategories = [
    { name: "Electronics", image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=400" },
    { name: "Machinery", image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=400" },
    { name: "Textiles", image: "https://images.unsplash.com/photo-1562869929-bda0650edb1f?q=80&w=1484&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { name: "Raw Materials", image: "https://images.unsplash.com/photo-1763950866531-82630c26a66b?q=80&w=1148&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { name: "Chemicals", image: "https://plus.unsplash.com/premium_photo-1681426678542-613c306013e1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y2hlbWljYWxzfGVufDB8fDB8fHww" },
    { name: "Food & Beverages", image: "https://images.unsplash.com/photo-1621506289937-a8e4df240d0b?w=400" },
  ];

  return (
    <div className="bg-white overflow-x-hidden">
      {/* Hero Section */}
      <section className="min-h-screen bg-gradient-to-r from-[#03689e] to-[#0551a0] flex items-center py-20">
        <div className="max-w-7xl mx-auto px-6 w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white text-center"
          >
            <h1 className="text-2xl lg:text-5xl font-bold leading-tight mb-6">
              Import Solutions for <span className="text-[#ffac1c]">Your Business</span>
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Seamless import logistics, expert documentation handling, and reliable delivery of international goods to India.
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <button className="px-8 py-4 bg-[#ffac1c] text-white rounded-xl font-bold hover:bg-[#E0920F] transition text-lg">
                Start Importing
              </button>
              <button className="px-8 py-4 bg-white text-[#03689e] rounded-xl font-bold hover:bg-blue-50 transition text-lg">
                Learn More
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Import Process */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-2xl lg:text-5xl font-bold text-slate-900 mb-4">Our Import Process</h2>
            <p className="text-xl text-slate-600">4 Simple Steps to Import Products Efficiently</p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {importProcess.map((process, index) => (
              <motion.div
                key={process.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition-all text-center"
              >
                <div className="w-20 h-20 bg-[#E0920F]/20 rounded-full flex items-center justify-center mx-auto mb-6 text-4xl text-[#E0920F]">
                  {process.icon}
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-3">{process.title}</h3>
                <p className="text-slate-600">{process.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Import Categories */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-slate-900 mb-4">Popular Import Categories</h2>
            <p className="text-xl text-slate-600">We handle imports across multiple product categories</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {importCategories.map((category, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -8 }}
                className="group overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all cursor-pointer"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={category.image}
                    alt={category.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-all flex items-center justify-center">
                    <h3 className="text-2xl font-bold text-white">{category.name}</h3>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-5xl font-bold text-slate-900 mb-6">Why Choose Our Import Services?</h2>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="text-3xl text-[#E0920F] flex-shrink-0">✓</div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900">Expert Documentation</h3>
                    <p className="text-slate-600">Comprehensive handling of all import regulations and customs clearance</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="text-3xl text-[#E0920F] flex-shrink-0">✓</div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900">Cost-Effective Solutions</h3>
                    <p className="text-slate-600">Competitive pricing with transparent costing structures</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="text-3xl text-[#E0920F] flex-shrink-0">✓</div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900">Reliable Logistics</h3>
                    <p className="text-slate-600">Trusted shipping partners with real-time tracking</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="text-3xl text-[#E0920F] flex-shrink-0">✓</div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900">Quality Assurance</h3>
                    <p className="text-slate-600">Rigorous inspection and quality checks at every stage</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="hidden md:block">
              <img
                src="https://images.unsplash.com/photo-1659353741664-f8d3ae82f90b?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Import Services"
                className="rounded-2xl shadow-lg w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-[#03689e]">
        <div className="max-w-4xl mx-auto px-6 text-center text-white">
          <h2 className="text-5xl font-bold mb-6">Ready to Import?</h2>
          <p className="text-xl mb-8 text-blue-100">Get in touch with our import specialists today to discuss your requirements</p>
          <button className="px-10 py-4 bg-[#ffac1c] text-white rounded-xl font-bold hover:bg-[#E0920F] transition text-lg">
            Contact Our Team
          </button>
        </div>
      </section>
    </div>
  );
};

export default Import;