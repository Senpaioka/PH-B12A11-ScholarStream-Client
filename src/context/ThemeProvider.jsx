import { useState, useEffect } from 'react';
import { ThemeContext } from './ThemeContext';

function ThemeProvider({ children }) {
    const [theme, setTheme] = useState(() => {
        // Get theme from localStorage or default to 'light'
        return localStorage.getItem('theme') || 'light';
    });

    useEffect(() => {
        // Apply theme to document
        document.documentElement.setAttribute('data-theme', theme);
        // Save theme to localStorage
        localStorage.setItem('theme', theme);
    }, [theme]);

    const toggleTheme = () => {
        setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light');
    };

    const themeInfo = {
        theme,
        toggleTheme
    };

    return (
        <ThemeContext value={themeInfo}>
            {children}
        </ThemeContext>
    );
}

export default ThemeProvider;