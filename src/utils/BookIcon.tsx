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

const BookIcon = () => {
  const { isDarkMode, toggleDarkMode } = useDarkMode();
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill={`${isDarkMode ? '#000' : '#fff'}`}
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke={`${isDarkMode ? '#fff' : '#000'}`}
      className="absolute left-1/2 top-1/2 h-8 w-8 max-sm:h-4 max-sm:w-4 -translate-x-1/2 -translate-y-1/2 transform">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25"
      />
    </svg>
  )
}

export default BookIcon