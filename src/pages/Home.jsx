import { motion } from "framer-motion";
import "../styles/home.css";

function Home() {
  return (
    <motion.div
      className="home-container"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8 }}
    >
      <motion.h1 className="title" whileHover={{ scale: 1.05 }}>
        Hello, I'm Tarun
      </motion.h1>
      <motion.p
        className="subtitle"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.8 }}
      >
        AI/ML Developer | Software Engineer
      </motion.p>
    </motion.div>
  );
}

export default Home;
