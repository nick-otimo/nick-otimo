import React, { useContext } from 'react';
import { Sun, Moon } from 'lucide-react';
import { ThemeContext } from '../contexts/ThemeContext';

const ThemeToggle: React.FC = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <button
      onClick={toggleTheme}
      className="fixed z-50 bottom-6 left-6 p-2 rounded-full shadow-lg bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 transition-all duration-300 hover:ring-2 hover:ring-teal-400"
      aria-label="Toggle dark mode"
    >
      {theme === 'dark' ? (
        <Sun className="h-6 w-6" />
      ) : (
        <Moon className="h-6 w-6" />
      )}
    </button>
  );
};

export default ThemeToggle;