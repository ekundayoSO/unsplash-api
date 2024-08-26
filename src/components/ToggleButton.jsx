import { useState, useEffect } from'react';
import { MdOutlineDarkMode } from "react-icons/md";
import { CiLight } from "react-icons/ci";

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
    <div>
      <button
        onClick={() => setDarkMode(!darkMode)}
        className="p-0.5 bg-gray-400 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded fixed top-3 right-0"
      >
        {darkMode ? <MdOutlineDarkMode /> : <CiLight />}
      </button>
    </div>
  );
};

export default ToggleButton;
