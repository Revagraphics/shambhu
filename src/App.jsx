import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
// import Services from "./pages/Services";
import Contact from "./pages/Contact";
import AuthPage from "./pages/AuthPage";
// import Signup from "./pages/Signup";
import Footer from "./components/Footer";
import PostalServices from "./pages/PostalServices";
import Exporting from "./pages/Exporting";
import Fmcg from "./pages/Fmcg";
import GoToTop from "./components/GoToTop";



function App() {
  return (
    <>
      <GoToTop/>

      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<AuthPage />} />
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
