import { useState, useEffect } from'react';
import { MdOutlineDarkMode } from "react-icons/md";

const ToggleButton = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  return (
    <button
      onClick={() => setDarkMode(!darkMode)}
      className="p-0.5 bg-gray-400 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded fixed top-3 right-0"
    >
        <MdOutlineDarkMode />
    </button>
  );
};

export default ToggleButton;
