'use client'

import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import { IoSunnySharp, IoMoonSharp } from "react-icons/io5";

export default function ThemeSwitch() {
  const { systemTheme, theme, setTheme } = useTheme('dark');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;
  const currentTheme = theme === 'system' ? systemTheme : theme;

  return (
    <label className="swap swap-rotate">
      {/* Hidden checkbox to control the state */}
      <input
        type="checkbox"
        onChange={() => setTheme(currentTheme === 'light' ? 'dark' : 'light')}
        checked={currentTheme === 'dark'}
      />

      {/* Sun icon (for light mode) */}
      <div className='swap-off tooltip tooltip-left p-2 rounded-full bg-white bg-opacity-25 backdrop-blur-md hover:bg-opacity-100 hover:bg-mainColor hover:text-white duration-300 dark:hover:bg-secondaryColor'>
        <IoSunnySharp className="text-xl" />
      </div>

      {/* Moon icon (for dark mode) */}
      <div className='swap-on tooltip tooltip-left p-2 rounded-full bg-white bg-opacity-25 backdrop-blur-md hover:bg-opacity-100 hover:bg-mainColor hover:text-white duration-300 dark:hover:bg-secondaryColor'>
        <IoMoonSharp className="text-xl" />
      </div>
    </label>
  );
}
