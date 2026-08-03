import "./styles/global.css";
import Home from "./pages/Home.jsx"
import Projects from "./pages/Projects.jsx"
import Navbar from "./components/Navbar.jsx";

function App() {
  return <>
    <Navbar />
    <Home />
    <Projects />
  </>
}

export default App;
