import "./styles/global.css";
import { ThemeProvider } from "./context/ThemeContext.jsx";
import Home from "./pages/Home.jsx"
import Projects from "./pages/Projects.jsx"
import CareerPath from "./pages/CareerPath.jsx"
import Dsa from "./pages/Dsa.jsx"
import Skills from "./pages/Skills.jsx"
import Learning from "./pages/Learning.jsx"
import Contact from "./pages/Contact.jsx"
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";

function App() {
  return (
    <ThemeProvider>
      <Navbar />
      <Home />
      <CareerPath />
      <Projects />
      <Skills />
      <Dsa />
      <Learning />
      <Contact />
      <Footer />
    </ThemeProvider>
  );
}

export default App;
