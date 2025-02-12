import { motion } from "framer-motion";
import "../styles/contact.css";

function Contact() {
  return (
    <motion.div
      className="contact-container"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <h1>Contact Me</h1>
      <motion.form whileHover={{ scale: 1.02 }} transition={{ duration: 0.3 }}>
        <input type="text" placeholder="Your Name" required />
        <input type="email" placeholder="Your Email" required />
        <textarea placeholder="Your Message" required />
        <button type="submit">Send Message</button>
      </motion.form>
    </motion.div>
  );
}

export default Contact;
