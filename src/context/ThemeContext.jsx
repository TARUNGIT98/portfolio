import { createContext, useCallback, useContext, useEffect, useState } from "react";

const STORAGE_KEY = "theme";
const ThemeContext = createContext(null);

const readStored = () => {
    try {
        const saved = localStorage.getItem(STORAGE_KEY);
        return saved === "light" || saved === "dark" ? saved : null;
    } catch {
        return null; /* private mode */
    }
};

const systemTheme = () =>
    window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";

export function ThemeProvider({ children }) {
    /* A stored value means the visitor chose for themselves; otherwise follow the OS. */
    const [theme, setThemeState] = useState(() => readStored() ?? systemTheme());
    const [isPinned, setIsPinned] = useState(() => readStored() !== null);

    /* Paint the choice. The inline script in index.html already did this for the
       first render, so this only matters for subsequent changes. */
    useEffect(() => {
        document.documentElement.setAttribute("data-theme", theme);
    }, [theme]);

    /* Keep following the OS until — and only until — the visitor picks a side.
       Persisting on every render would silently pin the very first value and
       break this entirely. */
    useEffect(() => {
        if (isPinned) return;
        const mq = window.matchMedia("(prefers-color-scheme: dark)");
        const onChange = (e) => setThemeState(e.matches ? "dark" : "light");
        mq.addEventListener("change", onChange);
        return () => mq.removeEventListener("change", onChange);
    }, [isPinned]);

    const setTheme = useCallback((next) => {
        setThemeState(next);
        setIsPinned(true);
        try {
            localStorage.setItem(STORAGE_KEY, next);
        } catch { /* private mode — the choice just won't survive a reload */ }
    }, []);

    const toggleTheme = useCallback(
        () => setTheme(theme === "dark" ? "light" : "dark"),
        [theme, setTheme]
    );

    return (
        <ThemeContext.Provider value={{ theme, setTheme, toggleTheme, isDark: theme === "dark" }}>
            {children}
        </ThemeContext.Provider>
    );
}

export function useTheme() {
    const ctx = useContext(ThemeContext);
    if (!ctx) throw new Error("useTheme must be used inside <ThemeProvider>");
    return ctx;
}
