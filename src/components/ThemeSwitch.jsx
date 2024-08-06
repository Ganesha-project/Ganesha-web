'use client'

import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import { IoSunnySharp } from "react-icons/io5";
import { IoMoonSharp } from "react-icons/io5";

export default function ThemeSwitch() {
  const { systemTheme, theme, setTheme } = useTheme('dark');
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
        data-tip="Theme Switch"
          onClick={() => setTheme('dark')}
          className='tooltip tooltip-left p-2 rounded-full bg-white bg-opacity-25 backdrop-blur-md hover:bg-opacity-100 hover:bg-mainColor hover:text-white duration-300 dark:hover:bg-secondaryColor'>
          <IoSunnySharp className='text-xl' />
        </button>
      ) : (
        <button
        data-tip="Theme Switch"
          onClick={() => setTheme('light')}
          className='tooltip tooltip-left p-2 rounded-full bg-white bg-opacity-25 backdrop-blur-md hover:bg-opacity-100 hover:bg-mainColor hover:text-white duration-300 dark:hover:bg-secondaryColor'>
          <IoMoonSharp className='text-xl' />
        </button>
      )}
    </>
  );
}
