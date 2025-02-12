import "../styles/footer.css";
import { FaGithub, FaLinkedin } from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">
      <p>Made with ❤️ by Tarun Sirapurapu</p>
      <a href="https://github.com/your-github" target="_blank" rel="noopener noreferrer">
        <FaGithub className="icon" />
      </a>
      <a href="https://www.linkedin.com/in/your-linkedin/" target="_blank" rel="noopener noreferrer">
        <FaLinkedin className="icon" />
      </a>
    </footer>
  );
}

export default Footer;
