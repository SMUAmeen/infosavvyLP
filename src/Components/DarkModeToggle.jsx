import React, { useEffect } from 'react'
import { useState } from 'react'
import { PiMoonDuotone } from "react-icons/pi";
import { PiSunDimDuotone } from "react-icons/pi";

export const DarkModeToggle = () => {

    const [darkMode, setDarkMode] = useState(localStorage.getItem("theme") === "dark")

    useEffect(() => {
        if (darkMode) {
          document.documentElement.classList.add("dark"); 
          localStorage.setItem("theme", "dark"); 
        } else {
          document.documentElement.classList.remove("dark"); 
          localStorage.setItem("theme", "light");
        }
      }, [darkMode]);

  return (
    <button
        onClick={() => setDarkMode(!darkMode)} // Toggles dark mode state
        className="p-2 rounded-md bg-gray-200 dark:bg-gray-800 dark:text-white shadow-md"
        >
        {darkMode ? <PiSunDimDuotone className='h-6 w-6 text-yellow-400' /> : <PiMoonDuotone className='h-6 w-6'/>}
    </button>
    
  )
}
