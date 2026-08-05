import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import "../styles/navbar.css";
import ResumeButton from "./ResumeButton";
import ThemeToggle from "./ThemeToggle";

const LINKS = [
  { href: "#about", label: "About" },
  { href: "#work", label: "Work" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#dsa", label: "DSA" },
  { href: "#contact", label: "Contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    /* passive: the handler never calls preventDefault, and saying so lets the
       browser scroll without waiting on us */
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* Hold the page still behind an open menu, and let Escape close it */
  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (e) => e.key === "Escape" && setMenuOpen(false);
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [menuOpen]);

  return (
    <nav className={scrolled || menuOpen ? "navbar scrolled" : "navbar"}>
      <div className="navbar-inner">

        <div className="navbar-left">
          <a className="logo" href="/">
            <span className="logo-first">tarun</span>
            <span className="logo-last">sirapurapu</span>
          </a>

          <div className="nav-links">
            {LINKS.map((l) => (
              <a key={l.href} href={l.href}>{l.label}</a>
            ))}
          </div>
        </div>

        <div className="navbar-actions">
          <ResumeButton />
          <ThemeToggle />
          <button
            className="nav-burger"
            onClick={() => setMenuOpen((o) => !o)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* display:none above 820px — see navbar.css */}
      <div className={menuOpen ? "nav-mobile open" : "nav-mobile"}>
        {LINKS.map((l) => (
          <a key={l.href} href={l.href} onClick={() => setMenuOpen(false)}>
            {l.label}
          </a>
        ))}
      </div>
    </nav>
  );
}

export default Navbar;
