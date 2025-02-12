import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import "../styles/navbar.css";

function Navbar() {
  return (
    <motion.nav
      className="navbar"
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <h1 className="logo">Tarun's Portfolio</h1>
      <div className="nav-links">
        {["Home", "About", "Projects", "Skills", "Contact"].map((page) => (
          <motion.div
            whileHover={{ scale: 1.1, color: "#58a6ff" }}
            transition={{ duration: 0.3 }}
            key={page}
          >
            <Link to={`/${page.toLowerCase()}`}>{page}</Link>
          </motion.div>
        ))}
      </div>
    </motion.nav>
  );
}

export default Navbar;
