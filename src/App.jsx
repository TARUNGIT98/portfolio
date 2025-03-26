import { useEffect } from "react"; // idhi import chesi, useEffect hook ni use chesthunnam
import Home from "./pages/Home";
import CareerPath from "./pages/CareerPath";
import Projects from "./pages/Projects";
import Skills from "./pages/Skills";
import Contact from "./pages/Contact";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "./styles/global.css"; // idhi em chestundhi ante, app.css file ni import chesthundhi



function App() {
  useEffect(() => {
    const links = document.querySelectorAll("a[href^='#']");
    links.forEach(link => {
      link.addEventListener("click", function (e) {
        e.preventDefault();
        const targetId = this.getAttribute("href").substring(1);
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
          targetElement.scrollIntoView({ behavior: "smooth" });
        }
      });
    });
  }, []);

  return (
    <div>
      <Navbar />
      <div className="content">
        <section id="home"><Home /></section>
        <section id="careerpath"><CareerPath /></section>
        <section id="projects"><Projects /></section>
        <section id="skills"><Skills /></section>
        <section id="contact"><Contact /></section>
      </div>
      <Footer />
    </div>
  );
}

export default App;
