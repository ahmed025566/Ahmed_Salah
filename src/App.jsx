import Header from "./components/Header";
import MobileHeader from "./components/MobileHeader";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";
import About from "./components/About";
import MoreAboutMe from "./components/MoreAboutMe";
import Contact from "./components/Contact";
import Works from "./components/Works";
function App() {
  useEffect(() => {
    AOS.init({duration: 1200});
  })

  useEffect(() => {
    if(window.innerWidth <= 768) {
      const menuBtn = document.querySelector(".menu-btn");
      const menu  = document.querySelector('.slider');
      const link = document.querySelectorAll('.header-link')
      let showMenu = false;
      const toggleMenu = () => {
        if (!showMenu) {
            menuBtn.classList.add("close");
            menu.style.top = '50px'
            menu.style.opacity = 1
            showMenu = true;
        } else {
          menuBtn.classList.remove("close");
          showMenu = false;
          menu.style.opacity = 0
          menu.style.top = '-250px'
        }
      }
      menuBtn.addEventListener("click" , toggleMenu )
     link.forEach(item => {
      item.addEventListener('click', () => {
        menuBtn.classList.remove("close");
        showMenu = false;
        menu.style.opacity = 0
        menu.style.top = '-250px'
      })
     })
    }
   
  })
 
  
  return (
    <div className="App">
      {window.innerWidth <= 768 ? <MobileHeader /> :  <Header />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/more-about-me" element={<MoreAboutMe />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/works" element={<Works />} />
      </Routes>
    </div>
  );
}

export default App;