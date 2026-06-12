import React, { useState } from "react";
import { motion } from "framer-motion";
import { 
  FaEnvelope,     // Replaces Mail
  FaPhoneAlt,     // Replaces Phone
  FaMapMarkerAlt, // Replaces MapPin
  FaGlobe,        // Replaces Globe
  FaRegClock,     // Replaces Clock (Regular outline)
  FaCheckCircle,  // Replaces CheckCircle
  FaArrowRight,   // Replaces ArrowRight
  FaBoxes ,         // Replaces MailBulk/FMCG asset visuals
} from "react-icons/fa";

export default function ContactPage() {
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => setFormSubmitted(false), 5000); // Reset after 5s
  };

  // Animation variants for consistency
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
  };

  // Office Hubs Data for Section 2
  const globalHubs = [
    { city: "Noida (HQ)", role: "Corporate & FMCG Export Desk", hours: "09:00 - 18:00 IST", status: "Open Now", phone: "+91 98XXX XXXXX" }
  ];

  return (
    <div className="min-h-screen  bg-[#f8f9fc] text-slate-800 font-sans overflow-x-hidden">
      
      {/* ==========================================================================
         SECTION 1: HERO, CORE CONTACT INFO, & INTERACTIVE FORM
         ========================================================================== */}
      <section className="py-16 lg:py-24 mt-[2rem] max-w-7xl mx-auto px-6 lg:px-12">
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-[#ffac1c] text-sm font-bold tracking-wider uppercase bg-blue-50 px-3 py-1 rounded-full">
            Global Trade & Postal Support
          </span>
          <h1 className="text-2xl lg:text-5xl font-extrabold text-zinc-800 mt-3 tracking-tight">
            Connect With Shambhu Corporation
          </h1>
          <p className="text-gray-600 mt-4 text-lg">
            Whether you need bulk FMCG export clearance or international postal network routing, our global logistics desks are ready to assist.
          </p>
        </motion.div>

        {/* Split Grid Component */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: Visual Brand Card & Quick Details (5 Columns) */}
          <motion.div 
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-5 bg-[#ffac1c] rounded-3xl p-8 lg:p-10 text-white flex flex-col justify-between shadow-xl relative overflow-hidden group"
          >
            {/* Decorative background overlay pattern */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,0.3),transparent_60%)] pointer-events-none" />
            
            <div>
              <h2 className="text-2xl font-bold mb-2">Contact Information</h2>
              <p className="text-zinc-100 text-sm mb-8">Reach out directly to our central management lines.</p>
              
              {/* Info Rows */}
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-blue-500/10 rounded-xl text-[#fff] border border-zinc-100">
                    <FaMapMarkerAlt className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-100">Headquarters</h4>
                    <p className="text-sm text-slate-100 mt-0.5">B-001,GF,TOWER-B,AAKRITI SHANTI NIKETAN , 143-B, NOIDA, 201304, Uttar Pradesh, India</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-blue-500/10 rounded-xl text-[#fff] border border-zinc-100">
                    <FaPhoneAlt className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-100">Global Trade Hotline</h4>
                    <p className="text-sm text-slate-100 mt-0.5">+91 98XXX XXXXX</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-blue-500/10 rounded-xl text-[#fff] border border-zinc-100">
                    <FaEnvelope className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-100">Official Channels</h4>
                    <p className="text-sm text-slate-100 mt-0.5">operations@shambhucorp.com</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Visual Element */}
            <div className="mt-12 pt-8 border-t border-zinc-800">
              <div className="flex items-center gap-3 bg-blue-950/40 p-4 rounded-2xl border border-zinc-100">
                <FaRegClock className="w-5 h-5 text-[#3b82f6] shrink-0" />
                <span className="text-xs text-slate-300 leading-relaxed">
                  <strong>Maritime Notice:</strong> Global asset channels and vessel dispatch desks remain operational 24/7.
                </span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Interactive Secure Form (7 Columns) */}
          <motion.div 
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-7 bg-white rounded-3xl p-8 lg:p-10 shadow-md border border-slate-100 flex flex-col justify-center"
          >
            <h3 className="text-2xl font-bold text-slate-900 mb-5">Send an Official Inquiry</h3>
            {/* <p className="text-gray-500 text-sm mb-6">Our compliance and ticketing division will register and reply within 12 working hours.</p> */}

            {formSubmitted ? (
              <motion.div 
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="bg-emerald-50 border border-emerald-200 text-emerald-800 p-6 rounded-2xl text-center my-auto flex flex-col items-center gap-3"
              >
                <FaCheckCircle className="w-12 h-12 text-emerald-500" />
                <h4 className="text-lg font-bold">Inquiry Securely Transmitted</h4>
                <p className="text-sm max-w-md text-emerald-700">Your tracking ticket ID has been registered. An export or postal logistics officer will reach out via the provided email shortly.</p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex flex-col">
                    <label className="text-xs font-bold uppercase text-slate-500 mb-1.5 tracking-wide">Full Name</label>
                    <input required type="text" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:border-[#1a56db] focus:ring-2 focus:ring-blue-100 transition" placeholder="saurabh " />
                  </div>
                  <div className="flex flex-col">
                    <label className="text-xs font-bold uppercase text-slate-500 mb-1.5 tracking-wide">Company Corporate Name</label>
                    <input type="text" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:border-[#1a56db] focus:ring-2 focus:ring-blue-100 transition" placeholder="revagraphics" />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex flex-col">
                    <label className="text-xs font-bold uppercase text-slate-500 mb-1.5 tracking-wide">Email Address</label>
                    <input required type="email" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:border-[#1a56db] focus:ring-2 focus:ring-blue-100 transition" placeholder="name@company.com" />
                  </div>
                  <div className="flex flex-col">
                    <label className="text-xs font-bold uppercase text-slate-500 mb-1.5 tracking-wide">Primary Target Department</label>
                    <select className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white focus:outline-none focus:border-[#1a56db] focus:ring-2 focus:ring-blue-100 transition cursor-pointer">
                      <option>Import</option>
                      <option>FMCG Export Division</option>
                      <option>Trading Related</option>
                      <option>International Postal Networks</option>
                      <option>Customs Clearance & Regulatory</option>
                      <option>General Corporate Office</option>
                    </select>
                  </div>
                </div>

                <div className="flex flex-col">
                  <label className="text-xs font-bold uppercase text-slate-500 mb-1.5 tracking-wide">Cargo Manifest / Message Specification</label>
                  <textarea required rows="4" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:border-[#1a56db] focus:ring-2 focus:ring-blue-100 transition resize-none" placeholder="Describe your container volumes or postal network scale requirements here..."></textarea>
                </div>

                <motion.button 
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit" 
                  className="w-full bg-[#ffac1c] text-white py-3.5 rounded-xl font-bold flex items-center justify-center gap-2 shadow-md hover:bg-[#E0920F] transition cursor-pointer"
                >
                  Transmit Manifest Data <FaArrowRight className="w-4 h-4" />
                </motion.button>
              </form>
            )}
          </motion.div>
        </div>
      </section>

      {/* ==========================================================================
         SECTION 2: SOMETHING UNIQUE - GLOBAL LOGISTICS HUB STATUS BOARDS
         ========================================================================== */}
      <section className="bg-white border-t border-slate-100 py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          
          <div className="mb-12">
            <h2 className="text-2xl lg:text-3xl font-bold text-[#ffac1c]">Global Operational Hub Status</h2>
            <p className="text-gray-500 text-sm mt-1">Live structural updates across Shambhu Corporation transaction zones.</p>
          </div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {globalHubs.map((hub, idx) => (
              <motion.div 
                key={idx}
                variants={fadeInUp}
                whileHover={{ y: -5, boxShadow: "0 12px 20px -5px rgba(0,0,0,0.05)" }}
                className="border border-slate-200/80 rounded-2xl p-6 bg-[#f8f9fc]/50 flex flex-col justify-between transition-all duration-300"
              >
                <div>
                  <div className="flex justify-between items-center mb-4">
                    <span className="font-bold text-lg text-slate-900 flex items-center gap-1.5">
                      <FaGlobe className="w-4 h-4 text-[#ffac1c]" /> {hub.city}
                    </span>
                    <span className={`text-xs font-bold px-2.5 py-0.5 rounded-full ${
                      hub.status === "Open Now" ? "bg-emerald-100 text-emerald-800" : "bg-slate-200 text-slate-600"
                    }`}>
                      {hub.status}
                    </span>
                  </div>
                  
                  <p className="text-sm font-semibold text-[#ffac1c]">{hub.role}</p>
                  
                  <div className="flex items-center gap-1.5 text-gray-500 text-xs mt-3">
                    <FaRegClock className="w-3.5 h-3.5" /> <span>Local Shift Hours: {hub.hours}</span>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-200/60 flex items-center justify-between text-xs font-semibold text-slate-600">
                  <span>Direct Line:</span>
                  <span className="text-slate-900 font-mono font-bold">{hub.phone}</span>
                </div>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </section>

    </div>
  );
}