import "../styles/footer.css";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const SOCIALS = [
  {
    label: "GitHub",
    href: "https://github.com/TARUNGIT98",
    icon: <FaGithub />,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/saitarunsirapurapu",
    icon: <FaLinkedin />,
  },
  {
    label: "Email",
    href: "mailto:tarunsirapurapu@gmail.com",
    icon: <FaEnvelope />,
  },
];

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-left">
          <span className="footer-name">Tarun Sirapurapu</span>
          <span className="footer-note">
            Built with React · Dayton, Ohio · © {year}
          </span>
        </div>

        <div className="footer-socials">
          {SOCIALS.map((s) => (
            <a
              key={s.label}
              className="footer-icon"
              href={s.href}
              aria-label={s.label}
              target={s.href.startsWith("mailto:") ? undefined : "_blank"}
              rel="noopener noreferrer"
            >
              {s.icon}
            </a>
          ))}
        </div>

        <button
          className="footer-top"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          Back to top ↑
        </button>
      </div>
    </footer>
  );
}

export default Footer;
