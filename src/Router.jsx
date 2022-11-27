import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../src/pages/home";
import About from "../src/pages/about";
import Error from "../src/pages/error";
import Logement from "../src/pages/logement";
import Header from "../src/components/header";
import Footer from "../src/components/footer";
import "../src/style/index.css"

function Routing() {
   return (
      <div className="App">
         <Header />
         <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Logement/:id" element={<Logement />} />
            <Route path="/about" element={<About />} />
            <Route path="/*" element={<Error />} />
         </Routes>
         <Footer />
      </div>
   );
}

export default Routing;