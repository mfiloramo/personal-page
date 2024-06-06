import React, { ReactElement, useState } from 'react';
import { SunIcon, MoonIcon } from "@heroicons/react/24/solid"; // Ensure you have heroicons installed

interface ThemeToggleProps {
  readonly darkMode: boolean;
  readonly toggleTheme: any;
}

export default function ThemeToggle({ darkMode, toggleTheme }: ThemeToggleProps) {
  return (
    <div className="flex items-center justify-center">
      <button
        onClick={toggleTheme}
        className={`relative w-14 h-8 ${
          darkMode ? 'bg-gray-600' : 'bg-gray-300'
        } rounded-full shadow-inner`}
      >
        <span
          className={`absolute top-1 left-1 w-6 h-6 rounded-full transition-transform ${
            darkMode ? 'translate-x-6 bg-gray-800' : 'bg-white'
          }`}
        >
          {darkMode ? (
            <MoonIcon className="text-white h-5 w-5 m-0.5"/>
          ) : (
            <SunIcon className="text-yellow-400 h-5 w-5 m-0.5"/>
          )}
        </span>
      </button>
    </div>
  );
}