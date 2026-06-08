import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import amazon from "../assets/amazon.jpg";
import boat from "../assets/boat.png";
import derma from "../assets/derma.png";
import flipcart from "../assets/flipcart.png";
import jockey from "../assets/jocky.png"; // renamed for consistency
import myntra from "../assets/myntra.webp";
import nyka from "../assets/nyka.png";
import shaving from "../assets/shaving.png";

const categories = ["All", "E-Commerce", "Fashion", "Electronics", "Health"];

const portals = [
  { id: 1, name: "Amazon", category: "E-Commerce", logo: amazon },
  { id: 2, name: "Flipkart", category: "E-Commerce", logo: flipcart },
  { id: 3, name: "Nykaa", category: "Fashion", logo: nyka },
  { id: 4, name: "boAt", category: "Electronics", logo: boat },
  { id: 5, name: "Derma Co", category: "Health", logo: derma },
  { id: 6, name: "Jockey", category: "Fashion", logo: jockey },
  { id: 7, name: "Myntra", category: "Fashion", logo: myntra },
  { id: 8, name: "Shaving Company", category: "Health", logo: shaving },
];

const detectPlatform = (url) => {
  if (!url || typeof url !== "string") return "Unknown Platform";

  try {
    let formattedUrl = url.trim();
    if (!formattedUrl.startsWith("http://") && !formattedUrl.startsWith("https://")) {
      formattedUrl = `https://${formattedUrl}`;
    }

    const hostname = new URL(formattedUrl).hostname.toLowerCase();

    if (hostname.includes("amazon")) return "Amazon";
    if (hostname.includes("flipkart")) return "Flipkart";
    if (hostname.includes("nykaa")) return "Nykaa";
    if (hostname.includes("myntra")) return "Myntra";
    if (hostname.includes("boat-lifestyle") || hostname.includes("boat")) return "boAt";
    if (hostname.includes("jockey")) return "Jockey";
    if (hostname.includes("themancompany") || hostname.includes("shaving")) return "Shaving Company";
    if (hostname.includes("ajio")) return "Ajio";
    if (hostname.includes("meesho")) return "Meesho";
    if (hostname.includes("blinkIt")) return "BlinkIt";
    if (hostname.includes("Patanjali")) return "Patanjali";

    return "Unknown Platform";
  } catch {
    return "Invalid URL";
  }
};

export default function PostalServices() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [showModal, setShowModal] = useState(false);
  const [productUrl, setProductUrl] = useState("");
  const [productDetails, setProductDetails] = useState("");
  const [detectedPlatform, setDetectedPlatform] = useState("");
  const [isChecking, setIsChecking] = useState(false);

  // Customer details state
  const [customerData, setCustomerData] = useState({
    fullName: "",
    phone: "",
    email: "",
    address: "",
    city: "",
    state: "",
    pinCode: "",
    country: "India",
    message: "",
  });

  const handleCheckUrl = () => {
    if (!productUrl.trim()) {
      alert("Please enter a product URL");
      return;
    }

    setIsChecking(true);
    setTimeout(() => {
      const platform = detectPlatform(productUrl);
      setDetectedPlatform(platform);
      setIsChecking(false);
    }, 600);
  };

  const handleSubmitRequest = () => {
    if (!productUrl.trim()) {
      alert("Please enter a product URL");
      return;
    }
    setShowModal(true);
  };

  const handleCustomerSubmit = (e) => {
    e.preventDefault();
    
    if (!customerData.fullName || !customerData.phone || !customerData.address) {
      alert("Please fill all required fields (*)");
      return;
    }

    console.log("Submission Data:", {
      productUrl,
      productDetails,
      detectedPlatform,
      customer: customerData,
    });

    alert("Request submitted successfully! ✅");
    setShowModal(false);
    
    // Reset form
    setProductUrl("");
    setProductDetails("");
    setDetectedPlatform("");
    setCustomerData({
      fullName: "", phone: "", email: "", address: "", city: "", 
      state: "", pinCode: "", country: "India", message: ""
    });
  };

  const updateCustomerData = (field, value) => {
    setCustomerData(prev => ({ ...prev, [field]: value }));
  };

  const filteredData = activeCategory === "All"
    ? portals
    : portals.filter(item => item.category === activeCategory);

  return (
    <section className="py-20 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mt-6 mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-10">
          <h2 className="text-2xl font-bold text-gray-900">Postal <span className="text-[#E0920F]">Services</span></h2>
          <p className="text-slate-500 mt-3 text-lg">
            Choose your preferred portal and submit product details for delivery
          </p>
        </div>

        {/* Categories */}
        <div className="mb-10">
          <div className="flex gap-3 overflow-x-auto whitespace-nowrap pb-2 scrollbar-hide">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`flex-shrink-0 px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300
                  ${activeCategory === category
                    ? "bg-[#ffac1c] text-white shadow-md"
                    : "bg-white text-slate-700 shadow hover:bg-slate-100"
                  }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Portal Cards */}
        <motion.div
          layout
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4"
        >
          {filteredData.map((portal) => (
            <motion.div
              key={portal.id}
              layout
              whileHover={{ y: -6, scale: 1.03 }}
              transition={{ duration: 0.25 }}
              className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all cursor-pointer border border-transparent hover:border-[#03689e]/20"
            >
              <img
                src={portal.logo}
                alt={portal.name}
                className="h-14 w-auto object-contain mx-auto mb-4"
              />
              <h3 className="text-center font-semibold text-gray-800">{portal.name}</h3>
            </motion.div>
          ))}
        </motion.div>

        {/* URL Submission Section */}
        <div className="mt-16 bg-white rounded-3xl p-8 shadow-lg">
          <h3 className="text-2xl font-semibold mb-6">Submit <span className="text-[#E0920F]">Product</span>  URL</h3>

          <div className="space-y-6">
            <div className="lg:flex gap-3 ">
              <input
                type="url"
                value={productUrl}
                onChange={(e) => {
                  setProductUrl(e.target.value);
                  if (detectedPlatform) setDetectedPlatform(""); // reset detection when typing
                }}
                placeholder="Paste product URL here (Amazon, Flipkart, Myntra, etc.)"
                className="flex-1 border border-gray-300 rounded-xl px-5 py-4 outline-none focus:border-[#03689e] focus:ring-2 focus:ring-[#03689e]/20 transition"
              />



              <button
                onClick={handleCheckUrl}
                disabled={isChecking || !productUrl.trim()}
                className="bg-gray-700 hover:bg-gray-800 disabled:bg-gray-400 mt-3 text-white px-8 py-4 rounded-xl font-medium transition flex items-center gap-2"
              >
                {isChecking ? "Checking..." : "Check URL"}
              </button>
            </div>





            {detectedPlatform && (
              <div className="p-4 bg-green-50 border border-green-200 rounded-xl">
                <p className="font-medium text-green-800">
                  Detected Platform: <span className="text-green-600">{detectedPlatform}</span>
                </p>
              </div>
            )}



            <textarea
              rows="4"
              value={productDetails}
              onChange={(e) => setProductDetails(e.target.value)}
              placeholder="Product Details (Optional - size, color, quantity, etc.)"
              className="w-full border border-gray-300 rounded-xl px-5 py-4 outline-none focus:border-[#03689e] focus:ring-2 focus:ring-[#03689e]/20 resize-y"
            />

            <button
              onClick={handleSubmitRequest}
              className="w-full bg-[#ffac1c] hover:bg-[#E0920F] text-white py-4 rounded-xl font-semibold text-lg transition"
            >
              Add Product To Cart
            </button>
          </div>
        </div>
      </div>

      {/* Customer Details Modal */}
      <AnimatePresence>
        {showModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 flex items-center justify-center z-[9999] p-4"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 30 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 30 }}
              className="bg-white w-full max-w-xl rounded-2xl p-6 md:p-8"
            >
              <h3 className="text-2xl font-bold mb-1">Customer Details</h3>
              <p className="text-slate-500 mb-6">Please provide your shipping information</p>

              <form onSubmit={handleCustomerSubmit} className="space-y-4">
                <input
                  type="text"
                  placeholder="Full Name *"
                  value={customerData.fullName}
                  onChange={(e) => updateCustomerData("fullName", e.target.value)}
                  className="w-full border rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-[#03689e]"
                  required
                />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input
                    type="tel"
                    placeholder="Phone *"
                    value={customerData.phone}
                    onChange={(e) => updateCustomerData("phone", e.target.value)}
                    className="w-full border rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-[#03689e]"
                    required
                  />
                  <input
                    type="email"
                    placeholder="Email"
                    value={customerData.email}
                    onChange={(e) => updateCustomerData("email", e.target.value)}
                    className="w-full border rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-[#03689e]"
                  />
                </div>

                <input
                  type="text"
                  placeholder="Full Address *"
                  value={customerData.address}
                  onChange={(e) => updateCustomerData("address", e.target.value)}
                  className="w-full border rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-[#03689e]"
                  required
                />

                <div className="grid grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="City"
                    value={customerData.city}
                    onChange={(e) => updateCustomerData("city", e.target.value)}
                    className="w-full border rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-[#03689e]"
                  />
                  <input
                    type="text"
                    placeholder="State"
                    value={customerData.state}
                    onChange={(e) => updateCustomerData("state", e.target.value)}
                    className="w-full border rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-[#03689e]"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="PIN Code"
                    value={customerData.pinCode}
                    onChange={(e) => updateCustomerData("pinCode", e.target.value)}
                    className="w-full border rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-[#03689e]"
                  />
                  <input
                    type="text"
                    value={customerData.country}
                    onChange={(e) => updateCustomerData("country", e.target.value)}
                    className="w-full border rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-[#03689e]"
                  />
                </div>

                <textarea
                  rows="3"
                  placeholder="Additional Message (Optional)"
                  value={customerData.message}
                  onChange={(e) => updateCustomerData("message", e.target.value)}
                  className="w-full border rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-[#03689e] resize-y"
                />

                <div className="flex flex-col sm:flex-row gap-3 pt-4">
                  <button
                    type="button"
                    onClick={() => setShowModal(false)}
                    className="flex-1 border border-gray-300 py-3.5 rounded-xl font-medium hover:bg-gray-50 transition"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="flex-1 bg-[#03689e] text-white py-3.5 rounded-xl font-semibold hover:bg-[#02557f] transition"
                  >
                    Confirm & Submit
                  </button>
                </div>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}