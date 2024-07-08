'use client'

import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import { IoSunnySharp } from "react-icons/io5";
import { IoMoonSharp } from "react-icons/io5";

export default function ThemeSwitch() {
  const { systemTheme, theme, setTheme } = useTheme('light');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;
  const currentTheme = theme === 'system' ? systemTheme : theme;

  return (
    <> 
      {currentTheme === 'light' ? (
        <button
          onClick={() => setTheme('dark')}
          className='hidden lg:visible text-gray-800 bg-[#ffffff81] backdrop-blur-sm hover:bg-[#e9b3ee]  font-medium rounded-full text-sm px-2 py-2 text-center md:inline-block'>
          <IoSunnySharp className='text-xl' />
        </button>
      ) : (
        <button
          onClick={() => setTheme('light')}
          className='hidden lg:visible text-gray-800 bg-[#ffffff81] backdrop-blur-sm hover:bg-[#e9b3ee]  font-medium rounded-full text-sm px-2 py-2 text-center md:inline-block'>
          <IoMoonSharp className='text-xl' />
        </button>
      )}
    </>
  );
}
