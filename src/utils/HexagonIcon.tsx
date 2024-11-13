"use client"
import { DarkModeContext } from '@/app/providers';
import React, { useContext } from 'react'

const useDarkMode = () => {
  const context = useContext(DarkModeContext);
  if (!context) {
    throw new Error("darkModeContext is possibly undefined!");
  }
  return context;
};

const HexagonIcon = () => {
  const { isDarkMode, toggleDarkMode } = useDarkMode();
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="45"
      height="45"
      viewBox="0 0 24 24"
      fill={`${isDarkMode ? '#fff' : '#000'}`}
      stroke={`${isDarkMode ? '#fff' : '#000'}`}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="lucide lucide-hexagon dark:!fill-white">-+

      <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
    </svg>
  )
}

export default HexagonIcon