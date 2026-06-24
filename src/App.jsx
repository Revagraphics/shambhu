import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";
import PostalServices from "./pages/PostalServices";
import Exporting from "./pages/Exporting";
import Fmcg from "./pages/Fmcg";
import GoToTop from "./components/GoToTop";
import Import from "./pages/Import";
import Trading from "./pages/Trading";
import NotFound from "./pages/NotFound";

import Social from "./components/Social";


function App() {
  return (
    <>
      <GoToTop/>

      <Navbar />
      <Routes>
        <Route path="*" element={<NotFound />} />
        <Route path="/home" element={<Home/>}/>
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/exporting" element={<Exporting />} />
        <Route path="/postal" element={<PostalServices />} />
        <Route path="/fmcg" element={<Fmcg />} />
        <Route path="/import" element={<Import/>} />
        <Route path="/trading" element={<Trading/>} />




      </Routes>
      <Footer />
      <Social />
    </>
  );
}

export default App;
