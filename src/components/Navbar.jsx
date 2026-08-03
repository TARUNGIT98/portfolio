import { useState, useEffect } from "react";
import "../styles/navbar.css";
import ResumeButton from "./ResumeButton";
import ThemeToggle from "./ThemeToggle";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    /* passive: the handler never calls preventDefault, and saying so lets the
       browser scroll without waiting on us */
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className={scrolled ? "navbar scrolled" : "navbar"}>
      <div className="navbar-inner">

        <div className="navbar-left">
          <a className="logo" href="/">
            <span className="logo-first">tarun</span>
            <span className="logo-last">sirapurapu</span>
          </a>
          <div className="nav-links">
            <a href="#about">About</a>
            <a href="#projects">Projects</a>
            <a href="#work">Work</a>
            <a href="#contact">Contact</a>
          </div>
        </div>
        <div className="navbar-actions">
          <ResumeButton />
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
