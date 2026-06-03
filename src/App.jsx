import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
// import Services from "./pages/Services";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
// import Signup from "./pages/Signup";
import Footer from "./components/Footer";
import PostalServices from "./pages/PostalServices";
import Exporting from "./pages/Exporting";
import Fmcg from "./pages/Fmcg";



function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/services" element={<Services />} /> */}
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/exporting" element={<Exporting />} />
        <Route path="/postal" element={<PostalServices />} />
        <Route path="/fmcg" element={<Fmcg />} />
        {/* <Route path="*" element={<Signup/>} /> */}
      </Routes>
      <Footer />
    </>
  );
}

export default App;
