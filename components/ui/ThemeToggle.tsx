import { useState, useEffect } from "react";
import { AiOutlineSun } from "react-icons/ai";
import { CiDark } from "react-icons/ci";

const ThemeToggle = () => {
    const [dark, setDarkMode] = useState(() => {
        if (typeof window !== 'undefined') {
            // Check localStorage only in the browser
            const theme = localStorage.getItem("theme");
            return theme === "dark";
        }
        // Default to light theme if window is not defined
        return false;
    });

    useEffect(() => {
        // Apply the initial theme
        if (typeof window !== 'undefined') {
            if (dark) {
                document.documentElement.classList.add('dark');
            } else {
                document.documentElement.classList.remove('dark');
            }
        }
    }, [dark]);

    const handleToggle = () => {
        setDarkMode(prevDark => !prevDark);
    };

    // Sync theme with localStorage
    useEffect(() => {
        if (typeof window !== 'undefined') {
            localStorage.setItem("theme", dark ? "dark" : "light");
        }
    }, [dark]);

    return (
        <div 
            className="rounded-full p-2 bg-slate-300 dark:bg-slate-700 text-4xl text-gray-700 dark:text-slate-200 hover:text-orange-100 dark:hover:text-slate-900 cursor-pointer" 
            onClick={handleToggle}>
            {dark ? <CiDark /> : <AiOutlineSun />}
        </div>
    );
}

export default ThemeToggle;
