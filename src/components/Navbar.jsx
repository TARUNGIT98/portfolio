import { useState, useEffect } from "react";
import { FaDownload, FaSun, FaMoon } from "react-icons/fa";
import resume from "../assets/TarunSirapurapuResume.pdf";

function Navbar() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Check for saved theme preference or default to light mode
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

    if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
      setIsDarkMode(true);
      document.documentElement.classList.add('dark');
    } else {
      setIsDarkMode(false);
      document.documentElement.classList.remove('dark');
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = !isDarkMode;
    setIsDarkMode(newTheme);

    if (newTheme) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  return (
    <div className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50">
      <div className="bg-white dark:bg-gray-800 rounded-full shadow-md px-6 py-3 flex items-center gap-6 transition-colors duration-300">
        {/* Name */}
        <div className="text-lg font-semibold whitespace-nowrap text-gray-900 dark:text-white">
          Tarun Sirapurapu
        </div>

        {/* Nav Links */}
        <div className="flex gap-6 text-sm font-medium text-gray-700 dark:text-gray-300">
          <a href="#projects" className="hover:text-black dark:hover:text-white transition">
            Projects
          </a>
          <a href="#careerpath" className="hover:text-black dark:hover:text-white transition">
            Career
          </a>
        </div>

        {/* Spacer */}
        <div className="flex-1" />

        {/* Theme Toggle */}
        <button
          onClick={toggleTheme}
          className="p-2 rounded-full bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 transition-all duration-300"
          aria-label={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
        >
          {isDarkMode ? (
            <FaSun className="text-yellow-500 text-sm" />
          ) : (
            <FaMoon className="text-gray-600 text-sm" />
          )}
        </button>

        {/* Contact + Resume Buttons */}
        <div className="flex items-center gap-3">
          <a
            href="#contact"
            className="px-4 py-1.5 border border-gray-300 dark:border-gray-600 rounded-full text-sm hover:bg-gray-100 dark:hover:bg-gray-700 transition text-gray-700 dark:text-gray-300"
          >
            Contact
          </a>
          <a
            href={resume}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-1.5 bg-black dark:bg-white text-white dark:text-black rounded-full text-sm flex items-center gap-2 hover:bg-gray-800 dark:hover:bg-gray-200 transition"
          >
            <FaDownload className="text-xs" />
            Resume
          </a>
        </div>
      </div>
    </div>
  );
}

export default Navbar;