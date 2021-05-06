import React from "react";
import Navbar from "./components/Navbar";
import MainCrousel from "./components/MainCrousel";
import Skills from "./components/Skills";
import Footer from "./components/Footer";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="appDiv">
      <Navbar />
      <MainCrousel />
      <Skills />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
