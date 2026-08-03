import { Sun, Moon } from "lucide-react";
import { useTheme } from "../context/ThemeContext";
import "../styles/themetoggle.css";

const ThemeToggle = () => {
    const { isDark, toggleTheme } = useTheme();

    return (
        <button
            className="theme-toggle"
            onClick={toggleTheme}
            aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
            title={isDark ? "Light mode" : "Dark mode"}
        >
            <span className={`theme-icon ${isDark ? "hide" : "show"}`}>
                <Sun />
            </span>
            <span className={`theme-icon ${isDark ? "show" : "hide"}`}>
                <Moon />
            </span>
        </button>
    );
};

export default ThemeToggle;
