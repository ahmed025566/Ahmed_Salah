import Header from "./components/header";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";
import About from "./components/About";
import MoreAboutMe from "./components/MoreAboutMe";
import Contact from "./components/Contact";
function App() {
  useEffect(() => {
    AOS.init({duration: 1200});
  })
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/more-about-me" element={<MoreAboutMe />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;