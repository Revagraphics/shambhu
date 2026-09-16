import { useState } from "react";
import toast from "react-hot-toast";
import { motion } from "framer-motion";
import Seo from "../components/Seo";
import truck from "../assets/truck.svg";
import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaCheckCircle,
  FaArrowRight,
} from "react-icons/fa";

const CONTACT_ENDPOINT = "/contact.php";

export default function ContactPage() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    department: "Import",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);

    const toastId = toast.loading("Sending inquiry...");

    try {
      const response = await fetch(CONTACT_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          phone: formData.phone,
          email: formData.email,
          department: formData.department,
          message: formData.message,
          source: "Shambhu Corporation Website",
        }),
      });

      const text = await response.text();
      let result = {};

      try {
        result = text ? JSON.parse(text) : {};
      } catch {
        result = {
          success: false,
          message: text || "Unexpected server response.",
        };
      }

      toast.dismiss(toastId);

      if (response.ok && result.success) {
        toast.success(result.message || "Inquiry submitted successfully!");

        setFormSubmitted(true);

        setFormData({
          name: "",
          phone: "",
          email: "",
          department: "Import",
          message: "",
        });

        setTimeout(() => {
          setFormSubmitted(false);
        }, 5000);
      } else {
        toast.error(
          result.message || "Unable to send inquiry. Please try again.",
        );
      }
    } catch (err) {
      console.error(err);

      toast.dismiss(toastId);

      toast.error("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  // Animation variants for consistency
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  // const staggerContainer = {
  //   hidden: { opacity: 0 },
  //   visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
  // };

  // const globalHubs = [
  //   {
  //     city: "Noida (HQ)",
  //     role: "Corporate & FMCG Export Desk",
  //     hours: "09:00 - 18:00 IST",
  //     status: "Open Now",
  //     phone: "+91 98XXX XXXXX",
  //   },
  // ];

  return (
    <>
      <Seo
        title="Contact Us | Shambhu Corporation"
        description="Get in touch with Shambhu Corporation for import, export, and trading inquiries. Reach out to our global team today."
      />

      <div className="min-h-screen  bg-[#f8f9fc] text-slate-800 font-sans overflow-x-hidden">
        {/* banner */}
        <section className="relative py-28 lg:py-32 bg-[#0B1E33] overflow-hidden">
          <svg
            className="absolute inset-0 h-full w-full  pointer-events-none"
            viewBox="0 0 1200 800"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <motion.path
              d="M -50 640 Q 320 540 650 600 T 1250 560"
              fill="none"
              stroke="#ffffff"
              strokeWidth="3.5"
              strokeDasharray="3 10"
              strokeLinecap="round"
              initial={{ strokeDashoffset: 0 }}
              animate={{ strokeDashoffset: -240 }}
              opacity="0.25"
            />
            <image
              href={truck}
              x="-48"
              y="-82"
              width="100"
              height="120"
              opacity="1"
              preserveAspectRatio="xMidYMid meet"
            >
              <animateMotion
                dur="16s"
                repeatCount="indefinite"
                rotate="auto"
                path="M -50 640 Q 320 540 650 600 T 1250 560"
              />
            </image>
          </svg>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(217,142,44,0.15),transparent_55%)]" />

          <div className="relative z-10 max-w-7xl mt-6 mx-auto px-6 text-center">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 backdrop-blur-sm text-[#D98E2C] text-xs font-semibold tracking-[0.15em] uppercase">
                Contact Us
              </span>

              <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-[1.1]">
                Connect With Shambhu{" "}
                <span className="text-[#D98E2C]">Corporation</span>
              </h1>

              <p className="mt-6 max-w-3xl mx-auto text-lg text-slate-300 leading-relaxed">
                Whether you need bulk FMCG export clearance or international
                postal network routing, our global logistics desks are ready to
                assist.
              </p>
            </motion.div>
          </div>
        </section>

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
          </motion.div>

          {/* Split Grid Component */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            {/* Left Column: Visual Brand Card & Quick Details (5 Columns) */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              className="lg:col-span-5 bg-[#0B1E33] rounded-3xl p-8 lg:p-10 text-white flex flex-col justify-between shadow-xl relative overflow-hidden group"
            >
              {/* Decorative background overlay pattern */}
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,0.3),transparent_60%)] pointer-events-none" />

              <div>
                <h2 className="text-2xl font-bold mb-2">Contact Information</h2>
                <p className="text-zinc-100 text-sm mb-8">
                  Reach out directly to our central management lines.
                </p>

                {/* Info Rows */}
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-blue-500/10 rounded-xl text-[#fff] border border-zinc-100">
                      <FaMapMarkerAlt className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-100">
                        Headquarters
                      </h4>
                      <p className="text-sm text-slate-100 mt-0.5">
                        B-001,GF,TOWER-B,AAKRITI SHANTI NIKETAN , 143-B, NOIDA,
                        201304, Uttar Pradesh, India
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-blue-500/10 rounded-xl text-[#fff] border border-zinc-100">
                      <FaPhoneAlt className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-100">
                        Global Trade Hotline
                      </h4>
                      <p className="text-sm text-slate-100 mt-0.5">
                        +91 99-1116-1669
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-blue-500/10 rounded-xl text-[#fff] border border-zinc-100">
                      <FaEnvelope className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-100">
                        Official Channels
                      </h4>
                      <p className="text-sm text-slate-100 mt-0.5">
                        operations@shambhucorp.com
                      </p>
                    </div>
                  </div>
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
              <h3 className="text-2xl font-bold text-slate-900 mb-5">
                Send an Official Inquiry
              </h3>
              {/* <p className="text-gray-500 text-sm mb-6">Our compliance and ticketing division will register and reply within 12 working hours.</p> */}

              {formSubmitted ? (
                <motion.div
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  className="bg-emerald-50 border border-emerald-200 text-emerald-800 p-6 rounded-2xl text-center my-auto flex flex-col items-center gap-3"
                >
                  <FaCheckCircle className="w-12 h-12 text-emerald-500" />
                  <h4 className="text-lg font-bold">
                    Inquiry Securely Transmitted
                  </h4>
                  <p className="text-sm max-w-md text-emerald-700">
                    Your tracking ticket ID has been registered. An export or
                    postal logistics officer will reach out via the provided
                    email shortly.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="flex flex-col">
                      <label className="text-xs font-bold uppercase text-slate-500 mb-1.5 tracking-wide">
                        Full Name
                      </label>
                      <input
                        required
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:border-[#1a56db] focus:ring-2 focus:ring-blue-100 transition"
                        placeholder="saurabh "
                      />
                    </div>
                    <div className="flex flex-col">
                      <label className="text-xs font-bold uppercase text-slate-500 mb-1.5 tracking-wide">
                        Phone no.
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:border-[#1a56db] focus:ring-2 focus:ring-blue-100 transition"
                        placeholder="123-456-7890"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
                    <div className="flex flex-col">
                      <label className="text-xs font-bold uppercase text-slate-500 mb-1.5 tracking-wide">
                        Email Address
                      </label>
                      <input
                        required
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:border-[#1a56db] focus:ring-2 focus:ring-blue-100 transition"
                        placeholder="name@company.com"
                      />
                    </div>
                    <div className="flex flex-col">
                      <label className="text-xs font-bold uppercase text-slate-500 mb-1.5 tracking-wide">
                        Services
                      </label>
                      <select
                        name="department"
                        value={formData.department}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white focus:outline-none focus:border-[#1a56db] focus:ring-2 focus:ring-blue-100 transition cursor-pointer"
                      >
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
                    <label className="text-xs font-bold uppercase text-slate-500 mb-1.5 tracking-wide">
                      Cargo Manifest / Message Specification
                    </label>
                    <textarea
                      required
                      rows="4"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:border-[#1a56db] focus:ring-2 focus:ring-blue-100 transition resize-none"
                      placeholder="Describe your container volumes or postal network scale requirements here..."
                    ></textarea>
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    disabled={loading}
                    type="submit"
                    className="w-full bg-[#ffac1c] text-white py-3.5 rounded-xl font-bold flex items-center justify-center gap-2 shadow-md hover:bg-[#E0920F] transition cursor-pointer disabled:opacity-70"
                  >
                    {loading ? "Sending Inquiry..." : "Submit Data"}

                    <FaArrowRight className="w-4 h-4" />
                  </motion.button>
                </form>
              )}
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
}
